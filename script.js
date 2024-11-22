const adviceBtn = document.getElementById("adviceBtn");
const adviceText = document.getElementById("adviceText");
const adviceNo = document.getElementById("adviceNo");

const getAdvice = async () => {
  const data = await fetch("https://api.adviceslip.com/advice");
  const dataJson = await data.json();
  return dataJson.slip;
};

adviceBtn.addEventListener("click", async () => {
  let data = await getAdvice();
  adviceNo.innerText = `ADVICE NO #${data.id}`;
  adviceText.innerText = `“${data.advice}”`;
});

adviceBtn.click();
