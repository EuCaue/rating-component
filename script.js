const $options = document.querySelectorAll("input[type='radio']"),
  $form = document.querySelector(".form");
$btnSubmit = document.querySelector(".submit-btn");

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  for (const option of $options) {
    if (option.checked) {
      e.target.submit();
      return;
    } else {
      console.log("select a value!");
    }
  }
});
