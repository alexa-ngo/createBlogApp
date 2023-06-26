const BASE_URI = "http://localhost:4000";

function allBtns() {
  const titleResult = document.getElementById("titleDiv").value;
  const authorResult = document.getElementById("authorDiv").value;
  const contentResult = document.getElementById("contentDiv").value;
  const data = `Title: ${titleResult} Author: ${authorResult} Content: ${contentResult}`;
  if (titleResult === "" || authorResult === "" || contentResult === "") {
    const data = "At least one input box is empty!";
    document.getElementById("error").append(data);
  }
  countWords();
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

const currComment = document.getElementById("contentDiv").value;
function countWords() {
  const maxWordsInTextBox = 15;
  const data = document.getElementById("contentDiv").value;
  const strTrimmed = data.trim();
  const strResultNumWords = strTrimmed.split(" ").length;
  if (strResultNumWords > maxWordsInTextBox) {
    const tooManyWordsAlert = "The content box has exceeded its word limit.";
    document.getElementById("error").append(tooManyWordsAlert);
  }
}

function allResetBtns() {
  const titleResult = document.getElementById("titleDiv").value;
  const authorResult = document.getElementById("authorDiv").value;
  const contentResult = document.getElementById("contentDiv").value;
  if (titleResult === "" || authorResult === "" || contentResult === "") {
    const data = "At least one input box is empty!";
    document.getElementById("resultSpot").append(data);
  }
  document.getElementById("titleDiv").value = "";
  document.getElementById("authorDiv").value = "";
  document.getElementById("contentDiv").value = "";
  const data = "";
  document.getElementById("error").innerHTML = "";
}

const resetbutton = document.getElementById("resetButton");
resetbutton.addEventListener("click", allResetBtns);

const button = document.getElementById("submitButton");
button.addEventListener("click", allBtns);
