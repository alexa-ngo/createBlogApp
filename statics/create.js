const BASE_URI = "http://localhost:4000";

const currentRoot = document.querySelector("#root");

function allBtns() {
  const titleResult = document.getElementById("titleDiv").value;
  const authorResult = document.getElementById("authorDiv").value;
  const contentResult = document.getElementById("contentDiv").value;
  const data = `Title: ${titleResult} Author: ${authorResult} Content: ${contentResult}`;
  document.getElementById("resultSpot").append(data);

  const eachEntry = {
    title: titleResult,
    create_date: "",
    author: authorResult,
    content: contentResult,
  };
  console.log(eachEntry);
  fetch(`${BASE_URI}/blogEntry`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eachEntry),
  });
}
