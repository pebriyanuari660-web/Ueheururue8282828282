global.statusMode =
global.statusMode || "waiting";

export default async function handler(
req,
res
){

  // UPDATE STATUS
  if(req.method === "POST"){

    const mode =
    req.body.mode;

    global.statusMode =
    mode;

    return res.status(200).json({
      success:true
    });

  }

  // GET STATUS
  res.status(200).json({

    mode:
    global.statusMode,

    downloadUrl:
    "https://github.com/pebriyanuari660-web/Ueheururue8282828282/releases/download/7727272/videomp4.7z"

  });

}
