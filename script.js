const toastBox = document.getElementById("toast-box");

let successMessage =
  '<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let errorMessage =
  '<i class="fa-solid fa-circle-xmark"></i>Please Fix the Error !';
let invalidMessage =
  '<i class="fa-solid fa-circle-exclamation"></i> Invalid input Check again!';

function showToast(message) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = message;
  toastBox.appendChild(toast);

  if (message.includes("Error")) {
    toast.classList.add("error");
  }
  if (message.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 5000);
}
