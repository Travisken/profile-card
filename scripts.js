// Display formatted time
const msElement = document.querySelector('[data-testid="test-user-time"]');
const formattedElement = document.getElementById("formatted-time");

function updateTime() {
  const now = new Date();
  msElement.textContent = now.getTime(); // milliseconds
  formattedElement.textContent = now.toLocaleString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

updateTime();
setInterval(updateTime, 1000);

// Modal logic
const hobbiesModal = document.getElementById("hobbies-modal");
const dislikesModal = document.getElementById("dislikes-modal");

document.getElementById("open-hobbies").addEventListener("click", () => {
  hobbiesModal.showModal();
});

document.getElementById("close-hobbies").addEventListener("click", () => {
  hobbiesModal.close();
});

document.getElementById("open-dislikes").addEventListener("click", () => {
  dislikesModal.showModal();
});

document.getElementById("close-dislikes").addEventListener("click", () => {
  dislikesModal.close();
});

// Allow Esc key to close modals
[hobbiesModal, dislikesModal].forEach((modal) => {
  modal.addEventListener("cancel", (e) => e.preventDefault());
  modal.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.close();
  });
});
