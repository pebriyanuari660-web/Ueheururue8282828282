
export default async function handler(
req,
res
){

  const BOT_TOKEN =
  process.env.BOT_TOKEN;

  const CHAT_ID =
  process.env.CHAT_ID;

  await fetch(

    "https://api.telegram.org/bot"
    +
    BOT_TOKEN
    +
    "/sendMessage",

    {
      method:"POST",

      headers:{
        "Content-Type":
        "application/json"
      },

      body:JSON.stringify({

        chat_id: CHAT_ID,

        text:
        "🔔 User kembali ke halaman QRIS"

      })

    }

  );

  res.status(200).json({
    success:true
  });

}
