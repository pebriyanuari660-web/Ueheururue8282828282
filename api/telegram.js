export default async function handler(
req,
res
){

  const text =
  req.body.message?.text || "";

  // KIRIM
  if(
    text.toLowerCase() ===
    "kirim"
  ){

    await fetch(

      "https://ueheururue8282828282.vercel.app/api/status",

      {
        method:"POST",

        headers:{
          "Content-Type":
          "application/json"
        },

        body:JSON.stringify({
          mode:"paid"
        })

      }

    );

  }

  // STOP
  if(
    text.toLowerCase() ===
    "stop"
  ){

    await fetch(

      "https://ueheururue8282828282.vercel.app/api/status",

      {
        method:"POST",

        headers:{
          "Content-Type":
          "application/json"
        },

        body:JSON.stringify({
          mode:"waiting"
        })

      }

    );

  }

  res.status(200).send("ok");

}
