"""
Blender 5.1 headless render — Diamond hero image
Usage: blender --background --python render_diamond.py
"""
import bpy
import os
import math
import sys

# ─── Config ───
OBJ_PATH = r"D:\Desktop\obj\Gemstone-04.obj"
OUTPUT_PATH = r"D:\Desktop\independent-store\public\images\diamond-hero.png"
RESOLUTION_X = 1920
RESOLUTION_Y = 1080
SAMPLES = 256

print("[RENDER] Script starting...")

# ─── Clear scene ───
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
# Also purge orphans
bpy.ops.outliner.orphans_purge(do_local_ids=True, do_linked_ids=True, do_recursive=True)

print("[RENDER] Scene cleared.")

# ─── Import OBJ ───
# Blender 4.0+ uses wm.obj_import, older uses import_scene.obj
try:
    bpy.ops.wm.obj_import(filepath=OBJ_PATH)
except AttributeError:
    bpy.ops.import_scene.obj(filepath=OBJ_PATH)

diamond = bpy.context.selected_objects[0]
diamond.name = "Diamond"

# Center
bpy.ops.object.origin_set(type='ORIGIN_GEOMETRY', center='BOUNDS')
diamond.location = (0, 0, 0)

# Scale to ~2 units
max_dim = max(diamond.dimensions)
if max_dim > 0:
    scale_factor = 2.0 / max_dim
    diamond.scale = (scale_factor, scale_factor, scale_factor)
    bpy.ops.object.transform_apply(scale=True)

print(f"[RENDER] Diamond imported. Dimensions: {diamond.dimensions[:]}")

# ─── Diamond Material (Cycles Principled) ───
mat = bpy.data.materials.new(name="Diamond_Material")
try:
    mat.use_nodes = True
except:
    # Blender 6.0 will remove use_nodes; nodes are default
    pass
nodes = mat.node_tree.nodes
links = mat.node_tree.links
nodes.clear()

# Output
output_node = nodes.new('ShaderNodeOutputMaterial')
output_node.location = (800, 0)

# Principled BSDF v2 (Blender 4.0+)
principled = nodes.new('ShaderNodeBsdfPrincipled')
principled.location = (0, 0)

# White diamond
principled.inputs['Base Color'].default_value = (1.0, 1.0, 1.0, 1.0)
principled.inputs['Roughness'].default_value = 0.0
principled.inputs['IOR'].default_value = 2.418

# Transmission - make it see-through
# Try different input names for Blender 5.1 compatibility
for inp_name in ['Transmission Weight', 'Transmission', 'Transmission weight']:
    if inp_name in principled.inputs:
        principled.inputs[inp_name].default_value = 0.98
        print(f"[RENDER] Set {inp_name} = 0.98")
        break

# Specular
for inp_name in ['Specular IOR Level', 'Specular', 'Specular IOR level']:
    if inp_name in principled.inputs:
        principled.inputs[inp_name].default_value = 1.0
        print(f"[RENDER] Set {inp_name} = 1.0")
        break

links.new(principled.outputs['BSDF'], output_node.inputs['Surface'])

# Apply to all meshes in diamond hierarchy
def apply_material(obj, material):
    if obj.type == 'MESH':
        if obj.data.materials:
            obj.data.materials[0] = material
        else:
            obj.data.materials.append(material)
    for child in obj.children:
        apply_material(child, material)

apply_material(diamond, mat)

print("[RENDER] Material applied.")

# ─── Camera ───
cam_data = bpy.data.cameras.new('Camera')
cam_obj = bpy.data.objects.new('Camera', cam_data)
bpy.context.collection.objects.link(cam_obj)
cam_obj.location = (0, -5.5, 2.5)
cam_obj.rotation_euler = (math.radians(72), 0, 0)
cam_data.lens = 85
cam_data.dof.use_dof = True
cam_data.dof.focus_object = diamond
cam_data.dof.aperture_fstop = 2.8

bpy.context.scene.camera = cam_obj
print("[RENDER] Camera set up.")

# ─── Lighting (Studio 5-light setup) ───
def create_light(name, light_type, energy, color, location, rotation=None, spot_size=None, size=None):
    lt_data = bpy.data.lights.new(name, type=light_type)
    lt_data.energy = energy
    lt_data.color = color
    if size and light_type in ('AREA',):
        lt_data.size = size
    if spot_size and light_type == 'SPOT':
        lt_data.spot_size = math.radians(spot_size)
    lt_obj = bpy.data.objects.new(name, lt_data)
    bpy.context.collection.objects.link(lt_obj)
    lt_obj.location = location
    if rotation:
        lt_obj.rotation_euler = rotation
    return lt_obj

# Key light — top right
create_light('KeyLight', 'AREA', 800, (1.0, 0.98, 0.95),
             (3, -3, 6), (math.radians(45), 0, math.radians(-30)), size=3.0)

# Fill light — left warm
create_light('FillLight', 'AREA', 400, (1.0, 0.92, 0.85),
             (-4, -2, 3), (math.radians(55), 0, math.radians(20)), size=2.5)

# Rim light — back edge
create_light('RimLight', 'AREA', 500, (0.95, 0.97, 1.0),
             (-1, 4, 2), (math.radians(60), 0, math.radians(160)), size=2.0)

# Bottom light — illuminate pavilion
create_light('BottomLight', 'POINT', 300, (1.0, 0.95, 0.9),
             (0, 0, -3))

# Top spot — table facet highlight
create_light('TopSpot', 'SPOT', 1500, (1.0, 1.0, 1.0),
             (0.5, -1, 8), (math.radians(85), 0, 0), spot_size=30)

print("[RENDER] Lighting set up (5 lights).")

# ─── World (dark background) ───
world = bpy.context.scene.world
if not world:
    world = bpy.data.worlds.new('World')
    bpy.context.scene.world = world
try:
    world.use_nodes = True
except:
    pass
wnodes = world.node_tree.nodes
wlinks = world.node_tree.links
wnodes.clear()

bg = wnodes.new('ShaderNodeBackground')
bg.inputs['Color'].default_value = (0.02, 0.02, 0.03, 1.0)
bg.inputs['Strength'].default_value = 0.5
output_world = wnodes.new('ShaderNodeOutputWorld')
wlinks.new(bg.outputs['Background'], output_world.inputs['Surface'])

print("[RENDER] World (background) set up.")

# ─── Render Settings ───
scene = bpy.context.scene
scene.render.engine = 'CYCLES'
scene.cycles.device = 'CPU'
scene.cycles.samples = SAMPLES

# Bounces for diamond
scene.cycles.diffuse_bounces = 12
scene.cycles.glossy_bounces = 32
scene.cycles.transmission_bounces = 32
scene.cycles.max_bounces = 64
# Caustics — API changed in Blender 5.x
try:
    scene.cycles.use_caustics = True
except AttributeError:
    # In newer Blender, caustics may be on by default or use different API
    try:
        scene.cycles.caustics_reflective = True
        scene.cycles.caustics_refractive = True
    except:
        print("[RENDER] Warning: Could not set caustics, continuing without explicit setting")

scene.cycles.use_adaptive_sampling = True
scene.cycles.adaptive_threshold = 0.005
try:
    scene.cycles.light_sampling_threshold = 0.001
except AttributeError:
    print("[RENDER] Warning: Could not set light_sampling_threshold")

# Denoising
try:
    scene.cycles.use_denoising = True
    try:
        scene.cycles.denoiser = 'OPENIMAGEDENOISE'
    except:
        print("[RENDER] Warning: Could not set denoiser type, using default")
except AttributeError:
    print("[RENDER] Warning: Could not enable denoising")

# Resolution
scene.render.resolution_x = RESOLUTION_X
scene.render.resolution_y = RESOLUTION_Y
scene.render.resolution_percentage = 100
scene.render.filepath = OUTPUT_PATH
scene.render.image_settings.file_format = 'PNG'
scene.render.image_settings.color_mode = 'RGBA'
scene.render.image_settings.compression = 0

# Transparent background
scene.render.film_transparent = True

print(f"[RENDER] Starting render: {RESOLUTION_X}x{RESOLUTION_Y}, {SAMPLES} samples, CPU + Cycles")
print(f"[RENDER] Caustics: ON | Denoiser: OpenImageDenoise | Transparent BG: ON")
print(f"[RENDER] Output: {OUTPUT_PATH}")

# ─── RENDER ───
bpy.ops.render.render(write_still=True)

print(f"[RENDER] ✅ Done! Saved to {OUTPUT_PATH}")
# Verify
if os.path.exists(OUTPUT_PATH):
    fsize = os.path.getsize(OUTPUT_PATH) / 1024
    print(f"[RENDER] File size: {fsize:.0f} KB")
else:
    print(f"[RENDER] ⚠️ File not found at {OUTPUT_PATH}")
