function calculateTotal() {
  const amount200 = parseInt(document.getElementById("amount200").value) || 0;
  const amount200Second =
    parseInt(document.getElementById("amount200Second").value) || 0;
  const total200 = amount200 * 200 * 100 + amount200Second * 200;

  document.getElementById("total200").innerText = total200;

  const amount100 = parseInt(document.getElementById("amount100").value) || 0;
  const amount100Second =
    parseInt(document.getElementById("amount100Second").value) || 0;
  const total100 = amount100 * 100 * 100 + amount100Second * 100;

  document.getElementById("total100").innerText = total100;

  const amount50 = parseInt(document.getElementById("amount50").value) || 0;
  const amount50Second =
    parseInt(document.getElementById("amount50Second").value) || 0;
  const total50 = amount50 * 50 * 100 + amount50Second * 50;

  document.getElementById("total50").innerText = total50;

  const amount20 = parseInt(document.getElementById("amount20").value) || 0;
  const amount20Second =
    parseInt(document.getElementById("amount20Second").value) || 0;
  const total20 = amount20 * 20 * 100 + amount20Second * 20;

  document.getElementById("total20").innerText = total20;

  const amount10 = parseInt(document.getElementById("amount10").value) || 0;
  const amount10Second =
    parseInt(document.getElementById("amount10Second").value) || 0;
  const total10 = amount10 * 10 * 100 + amount10Second * 10;

  document.getElementById("total10").innerText = total10;

  const amount5 = parseInt(document.getElementById("amount5").value) || 0;
  const amount5Second =
    parseInt(document.getElementById("amount5Second").value) || 0;
  const total5 = amount5 * 5 * 100 + amount5Second * 5;

  document.getElementById("total5").innerText = total5;

  const totalAll = total200 + total100 + total50 + total20 + total10 + total5;

  document.getElementById("totalAll").innerText = totalAll;

  // تحديث الأعمدة بفاصل الآلاف
  const formatter = new Intl.NumberFormat("en-US");

  document.getElementById("total200").innerText = formatter.format(total200);
  document.getElementById("total100").innerText = formatter.format(total100);
  document.getElementById("total50").innerText = formatter.format(total50);
  document.getElementById("total20").innerText = formatter.format(total20);
  document.getElementById("total10").innerText = formatter.format(total10);
  document.getElementById("total5").innerText = formatter.format(total5);

  // تحديث عمود الاجمالي بفاصل الآلاف
  document.getElementById("totalAll").innerText = formatter.format(totalAll);
}

function saveData() {
  const data = {
    amount200: document.getElementById("amount200").value,
    amount200Second: document.getElementById("amount200Second").value,
    amount100: document.getElementById("amount100").value,
    amount100Second: document.getElementById("amount100Second").value,
    amount50: document.getElementById("amount50").value,
    amount50Second: document.getElementById("amount50Second").value,
    amount20: document.getElementById("amount20").value,
    amount20Second: document.getElementById("amount20Second").value,
    amount10: document.getElementById("amount10").value,
    amount10Second: document.getElementById("amount10Second").value,
    amount5: document.getElementById("amount5").value,
    amount5Second: document.getElementById("amount5Second").value,
    operationCount:
      parseInt(document.getElementById("operationCount").innerText) + 1,
  };

  localStorage.setItem("savedData", JSON.stringify(data));

  document.getElementById("savedMessage").style.display = "block";
  setTimeout(function () {
    document.getElementById("savedMessage").style.display = "none";
  }, 3000);

  document.getElementById("operationCount").innerText = data.operationCount;
}

function loadSavedData() {
  const savedData = localStorage.getItem("savedData");
  if (savedData) {
    const data = JSON.parse(savedData);

    document.getElementById("amount200").value = data.amount200;
    document.getElementById("amount200Second").value = data.amount200Second;
    document.getElementById("amount100").value = data.amount100;
    document.getElementById("amount100Second").value = data.amount100Second;
    document.getElementById("amount50").value = data.amount50;
    document.getElementById("amount50Second").value = data.amount50Second;
    document.getElementById("amount20").value = data.amount20;
    document.getElementById("amount20Second").value = data.amount20Second;
    document.getElementById("amount10").value = data.amount10;
    document.getElementById("amount10Second").value = data.amount10Second;
    document.getElementById("amount5").value = data.amount5;
    document.getElementById("amount5Second").value = data.amount5Second;
    document.getElementById("operationCount").innerText = data.operationCount;

    calculateTotal();
  }
}

function downloadData() {
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.table_to_sheet(document.querySelector(".money-table"));
  XLSX.utils.book_append_sheet(wb, ws, "عملية العد");

  XLSX.writeFile(wb, "عملية_العد.xlsx");
}

function resetData() {
  localStorage.removeItem("savedData");
  location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
  loadSavedData();
});
