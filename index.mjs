import express, { request } from "express";
import bodyParser from "body-parser";
import sqlite3 from "sqlite3";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("statics"));

const db = new sqlite3.Database("./db/blogEntries.db", function (err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Yay! The SERVICE has initalized the blogEntries db!");
});

app.get("/blogEntry/all/list", (req, res) => {
  db.all("SELECT * FROM BlogEntries", function (error, rows) {
    if (error) {
      console.error(error);
      return res.status(404);
    }

    const resultJsonArray = rows.map((row) => {
      const { id, title, create_date, author, content } = row;
      return {
        id,
        title,
        create_date,
        author,
        content,
      };
    });
    return res.json(resultJsonArray);
  });
});

app.get("/", (req, res) => {
  return res.json({ message: "It works!" });
});

app.get("/blogEntry/:id", (req, res) => {
  const id = req.params["id"];
  db.get(
    "SELECT * FROM BlogEntries WHERE id = $id",
    {
      $id: id,
    },
    function (err, row) {
      if (err) {
        console.error(err);
        return res
          .status(404)
          .json({ message: `Can't find the blog entry with id: ${id}` });
      }

      const { id, title, create_date, author, content } = row;

      const resultJson = {
        id,
        title,
        create_date,
        author,
        content,
      };
      return res.json(resultJson);
    }
  );
});

app.post("/blogEntry", (req, res) => {
  const requestBody = req.body;
  const dateOfEntry = Date.now();
  const currentEntryTime = dateOfEntry;
  const { title, author, content } = requestBody;
  const columnsList = ["title", "create_date", "author", "content"];
  db.run(
    `
    INSERT INTO BlogEntries (${columnsList.join(", ")})
        VALUES (
            $title,
            $currentEntryTime,
            $author,
            $content
        )
    `,
    // Format to be inserted into Postman:
    // {
    //     "title": "",
    //     "create_date": "",
    //     "author": "",
    //     "content": "",
    //
    // }
    {
      $title: title,
      $currentEntryTime: currentEntryTime,
      $author: author,
      $content: content,
    },

    function (err) {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Something bad happened." });
      }
      const id = this.lastID;
      return res.json({ type: "blogEntry", id: id });
    }
  );
});

app.delete("/blogEntry/:id", (req, res) => {
  const id = req.params["id"];
  db.run(
    "DELETE FROM BlogEntries WHERE id = $id",
    { $id: id },
    function (error) {
      if (error) {
        console.error(error);
        return res.status(500);
      }
      return res.json({ type: "blogEntry", id });
    }
  );
});

app.listen(4000, () => {
  console.log("Hoooray, we're online for both back and front!!");
});
