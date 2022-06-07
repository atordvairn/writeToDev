import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";
import fetch from "node-fetch";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default async function handler(req, res) {
  // Run cors
  await cors(req, res);

  if (req.method === "POST") {
    const body = {
      article: {
        title: req.body.title,
        published: true,
        body_markdown: req.body.body,
        tags: req.body.tags,
      },
    };

    const response = await fetch("https://dev.to/api/articles", {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "api-key": req.body.api_key,
      },
    });
    res.json({ message: req.body });
    const data = await response.json();

    console.log(data);
  } else {
    res.json({ message: "use post" })
  }
}
