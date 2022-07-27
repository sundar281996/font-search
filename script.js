var container = document.createElement("div");
container.className = "container";
var title = document.createElement("div");
title.className = "title";
title.innerHTML = "Google Font Family Name";
var row = document.createElement("div");
row.className = "row";
//getting data from api and appending in html
function getFont() {
  fetch(
    "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDHabMp4A4R0pTcr_fDVglywFbSXm3Dt9s"
  )
    .then((data) => data.json())
    .then((data1) => {
      for (const iterator of data1.items) {
        console.log(iterator.family);
        var column = document.createElement("div");
        column.className = "col-lg-4 ";
        column.innerHTML = ` <div class="card" >${iterator.family}</div>`;
        column.style.fontFamily = iterator.family;
        row.append(column);
      }
    })
    .catch((err) => console.log(err));
}
container.append(title, row);
document.body.append(container);
// function calling
getFont();
