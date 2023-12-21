import express from "express";
import { db, connectToDb } from "./db.js";

// localhost:3000/articles/learn-node
// PUT / articles/learn-react/upvote

/*
let articlesInfo = [
  {
    name: 'learn-react',
    upvotes: 0,
    comments: [],
  },{
    name: 'learn-node',
    upvotes: 0,
    comments: [],
  },{
    name: 'learn-mongodb',
    upvotes: 0,
    comments: [],
  },
];
*/

const app = express();
app.use(express.json());

app.get("/api/articles/:name", async (req, res) => {
  const { name } = req.params;

  const article = await db.collection("articles").findOne({ name });
  if (article) res.json(article);
  else res.sendStatus(404);
});

app.put("/api/articles/:name/upvote", async (req, res) => {
  const { name } = req.params;

  await db.collection("articles").updateOne(
    { name },
    {
      $inc: { upvotes: 1 },
    }
  );
  const article = await db.collection("articles").findOne({ name });

  console.log(article);

  if (article) {
    res.json(article);
  } else {
    res.send("That article doens't exist");
  }
});

app.post("/api/articles/:name/comments", async (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;

  await db.collection("articles").updateOne(
    { name },
    {
      $push: { comments: { postedBy, text } },
    }
  );

  const article = await db.collection("articles").findOne({ name });

  if (article) {
    res.json(article);
  } else {
    res.send("That article does not exist!");
  }
});

connectToDb(() => {
  console.log("Connecting to server successfully");
  app.listen(8000, (req, res) => {
    console.log("Server is listening on port 8000");
  });
});
