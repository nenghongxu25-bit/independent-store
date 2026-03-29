import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.DEEPSEEK_API_KEY;

    // 检查 Key 是否存在
    if (!apiKey) {
      console.error("❌ 错误：环境变量中没有找到 DEEPSEEK_API_KEY");
      return NextResponse.json({ content: "请检查根目录的 .env.local 文件并重启服务器。" }, { status: 500 });
    }

    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { 
            role: "system", 
            content: "你是 Vikas，Shimmer Jewelry 的专业珠宝专家。你精通培育钻石（HPHT/CVD）、4C 标准和定制珠宝。你的语气专业、高级且乐于助人。请始终使用中文回答客户。" 
          },
          ...messages
        ],
        stream: false
      })
    });

    if (!response.ok) {
      const errorMsg = await response.text();
      console.error("❌ DeepSeek 接口请求失败:", errorMsg);
      return NextResponse.json({ content: "Vikas 正在鉴别钻石，请稍后再试。" }, { status: 500 });
    }

    const data = await response.json();
    
    // 安全检查返回数据
    if (data.choices && data.choices[0]) {
      return NextResponse.json({ content: data.choices[0].message.content });
    } else {
      throw new Error("API 返回格式不正确");
    }

  } catch (error: any) {
    console.error("❌ API 路由异常:", error.message);
    return NextResponse.json({ content: "抱歉，Vikas 这里的网络连接有点问题，请刷新重试。" }, { status: 500 });
  }
}