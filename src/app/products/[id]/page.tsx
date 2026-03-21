import Link from "next/link";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  return (
    <main style={{ padding: 16, maxWidth: 980, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 8 }}>商品详情</h1>
      <p style={{ color: "#666", marginBottom: 16 }}>
        当前商品 ID：<span style={{ fontWeight: 700 }}>{id}</span>
      </p>

      <div style={{ border: "1px solid #eee", borderRadius: 8, padding: 16 }}>
        <p style={{ margin: 0 }}>这里是商品详情内容（示例）。</p>
        <p style={{ margin: "12px 0 0", color: "#666", fontSize: 13 }}>
          如果你希望展示“昨天写的真实商品数据”，把数据文件/代码位置告诉我，我再帮你接上。
        </p>
        <div style={{ marginTop: 14 }}>
          <Link href="/products">返回商品列表</Link>
        </div>
      </div>
    </main>
  );
}

