export default function Title() {
  const shopname = "Shimmer Jewelry";

  return (
    <div style={{ display: 'flex', justifyContent: 'flexstart', alignItems: 'center', paddingTop: '0px', flexDirection: 'column',backgroundColor:'#fff'}}>
      <h1 style={{ textAlign: 'center', color: 'gold', fontSize: '6rem' }}>
        {shopname}
      </h1>
      <p>顶级实验室钻石定制</p>
    </div>
  );
}
