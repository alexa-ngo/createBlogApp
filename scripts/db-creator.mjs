import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./db/blogEntries.db", function (err) {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Yay! We created the blogEnties.db database!");
});

db.run(
  `
    CREATE TABLE IF NOT EXISTS BlogEntries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        create_date BIGINT,
        author TEXT,
        content TEXT
    );
`,
  function (err) {
    if (err) {
      console.error(err);
      return;
    }
    console.log("The blogEntries table was created!");
  }
);
