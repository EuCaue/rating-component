const optionValue = new URL(document.location).searchParams.get("option");
if (optionValue === null) {
  window.location.href = "../index.html";
}
document.querySelector(
  ".rate"
).textContent = `You selected ${optionValue} out of 5`;
