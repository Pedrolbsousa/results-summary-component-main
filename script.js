let requestURL = document.querySelector("#summaryInfor");
let mediatotal = document.querySelector("#soma");
let soma = 0;

fetch("data.json").then((response) => {
  response.json().then((summaryInfor) => {
    summaryInfor.map((summary) => {
      requestURL.innerHTML += `<li class="summary ${summary.category}">
        <img src="${summary.icon}" alt="" />${summary.category}
        <h4 class="blackText">${summary.score}</h4>
        <p>/ 100</p>
      </li>`;
      soma += summary.score;
    });
  });
});
fetch("data.json").then((response) => {
  response.json().then((summaryInfor) => {
    let media = soma / summaryInfor.length;
    mediatotal.innerHTML = Math.trunc(media);
  });
});
