const BASE_URI = "http://localhost:4000"; // where the backend server is at

const currentRoot = document.querySelector("#root");

async function loadData() {
  const response = await fetch(`http://localhost:4000/blogEntry/all/list`);
  const list = await response.json();

  const divContainer = document.createElement("div");
  divContainer.setAttribute("id", "divContainer");
  currentRoot.appendChild(divContainer);

  const innerDivContainer = document.createElement("div");
  innerDivContainer.setAttribute("id", "innerDivContainer");
  divContainer.appendChild(innerDivContainer);

  const createPageLink = document.createElement("a");
  const createPageNav = document.createTextNode("Create Post");
  createPageLink.setAttribute("id", "createPageLink");
  createPageLink.setAttribute("href", "./create.html");
  createPageLink.appendChild(createPageNav);
  innerDivContainer.appendChild(createPageLink);

  const anotherPageLink = document.createElement("a");
  const anotherPageNav = document.createTextNode("Another Page Post");
  anotherPageLink.setAttribute("id", "anotherPageLink");
  anotherPageLink.setAttribute("href", "./create.html");
  anotherPageLink.appendChild(anotherPageNav);
  innerDivContainer.appendChild(anotherPageLink);

  const blogTitlePara = document.createElement("p");
  const blogTitleTextNode = document.createTextNode("Blog Entries: ");
  blogTitlePara.appendChild(blogTitleTextNode);
  blogTitlePara.setAttribute("id", "blogTitlePara");
  divContainer.appendChild(blogTitlePara);

  for (let i = 0; i < list.length; i++) {
    const listTitle = list[i].title;
    const listDate = list[i].create_date;
    const listAuthor = list[i].author;
    const listContent = list[i].content;

    const paraNodeMain = document.createElement("p");
    const paraNode1 = document.createElement("p");
    const paraNode2 = document.createElement("p");
    const paraNode3 = document.createElement("p");
    paraNodeMain.setAttribute("id", "mainHeader");

    const titleTextNode = document.createTextNode(listTitle);
    const dateTextNode = document.createTextNode(`Date: ` + listDate);
    const authorTextNode = document.createTextNode(`Author: ` + listAuthor);
    const contentTextNode = document.createTextNode(`Content: ` + listContent);

    const paraNodeTitle = document.createElement("p");
    paraNodeTitle.setAttribute("id", "titleOfEntry");
    paraNodeTitle.appendChild(titleTextNode);

    paraNodeMain.appendChild(paraNodeTitle);
    paraNodeMain.appendChild(paraNode1);
    paraNodeMain.appendChild(dateTextNode);
    paraNodeMain.appendChild(paraNode2);
    paraNodeMain.appendChild(authorTextNode);
    paraNodeMain.appendChild(paraNode3);
    paraNodeMain.appendChild(contentTextNode);

    divContainer.appendChild(paraNodeMain);
  }
  return currentRoot;
}

loadData();
