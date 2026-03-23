export default function Title() {
  const shopname = "Shimmer Jewelry";

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1 style={{ textAlign: 'center', color: 'gold', fontSize: '6rem' }}>
        {shopname}
      </h1>
      <p>顶级实验室钻石定制</p>
    </div>
  );
}
