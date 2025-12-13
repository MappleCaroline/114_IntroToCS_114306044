let submitBtn = document.getElementById("submitBtn");
let tableBody = document.querySelector("#gradeTable tbody");

submitBtn.addEventListener("click", function () {
  let math = Number(document.getElementById("math").value);
  let english = Number(document.getElementById("english").value);

  if (isNaN(math) || isNaN(english)) {
    alert("Please enter valid numbers");
    return;
  }

  let rowCount = tableBody.rows.length + 1;
  let avg = ((math + english) / 2).toFixed(2);

  let row = tableBody.insertRow();
  row.insertCell(0).innerText = rowCount;
  row.insertCell(1).innerText = math;
  row.insertCell(2).innerText = english;
  row.insertCell(3).innerText = avg;

  updateColumnAverages();
});

function updateColumnAverages() {
  let rows = tableBody.rows;
  let mathTotal = 0;
  let engTotal = 0;

  for (let i = 0; i < rows.length; i++) {
    mathTotal += Number(rows[i].cells[1].innerText);
    engTotal += Number(rows[i].cells[2].innerText);
  }

  let mathAvg = (mathTotal / rows.length).toFixed(2);
  let engAvg = (engTotal / rows.length).toFixed(2);
  let overallAvg = ((Number(mathAvg) + Number(engAvg)) / 2).toFixed(2);

  document.getElementById("mathAvg").innerText = mathAvg;
  document.getElementById("englishAvg").innerText = engAvg;
  document.getElementById("overallAvg").innerText = overallAvg;
}