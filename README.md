# Blog Entries

This project is a simple blog application where people can add blog post entries. This program initializes both the front end and the back end of the application.

## Blog Entry

- id
- title
- create_date
- author
- content

## API

- GET /blogEntries/all/list - returns a JSON array of all the entries with the fields

- GET /blogEntry/:id - returns a JSON object with the fields based on the id

- POST /blogEntry - posts the entry to the database with the information found in the body (json)

- DELETE
  /blogEntry/:id - delete the specified entry from the database
