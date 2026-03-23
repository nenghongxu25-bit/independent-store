export default function Title() {
  const shopname = "Shimmer Jewelry";//定义店名

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>{/*设置画布，灵活，水平上下居中，高度，列换行*/}
      <h1 style={{ textAlign: 'center', color: 'gold', fontSize: '3rem' }}>{/*以h1标题形式输出店名，style为居中，金色，3倍字号*/}
        {shopname}
      </h1>{/*标题结束符号*/}
      <p>顶级实验室钻石定制</p>{/*正本文本*/}
    </div>{/*容器结束符号*/}
  );//返回值
}//定义默认输出函数，名字为Title
