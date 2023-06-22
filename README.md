# Blog Entries

This project is a simple blog application where people can add blog post entries. This program initializes both the front end and the back end of the application.

A user can enter their material to post on their blog like this:
![image](https://github.com/alexa-ngo/createBlogApp/assets/97919335/5dea2a31-6883-43d0-a492-612971bd7dee)

After the "Submit" button is clicked, the result is displayed on http://localhost:4000/index.html in this format.
![image](https://github.com/alexa-ngo/createBlogApp/assets/97919335/21b807f4-23c0-4582-a304-3c2054dbf100)

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
