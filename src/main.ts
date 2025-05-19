import "./style.css";

// Handle form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("participationForm") as HTMLFormElement;
  const fileInput = document.getElementById("image") as HTMLInputElement;
  const fileLabel = document.querySelector(
    ".file-input-label"
  ) as HTMLLabelElement;

  // Update file input label when a file is selected
  if (fileInput && fileLabel) {
    fileInput.addEventListener("change", () => {
      if (fileInput.files && fileInput.files.length > 0) {
        fileLabel.textContent = fileInput.files[0].name;
      } else {
        fileLabel.textContent = "Comparte tu foto ganadora";
      }
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Get form values
      const name = (document.getElementById("name") as HTMLInputElement).value;
      const phone = (document.getElementById("phone") as HTMLInputElement)
        .value;
      const email = (document.getElementById("email") as HTMLInputElement)
        .value;
      const imageInput = document.getElementById("image") as HTMLInputElement;

      // Validate form
      if (!name || !phone || !email || !imageInput.files?.length) {
        alert("Por favor, completa todos los campos.");
        return;
      }

      // Here you would typically send the data to your server
      // For this demo, we'll just show a success message

      alert(
        `¡Gracias por participar, ${name}! Hemos recibido tu información correctamente.`
      );
      form.reset();

      // Reset file input label
      const fileLabel = document.querySelector(
        ".file-input-label"
      ) as HTMLLabelElement;
      if (fileLabel) {
        fileLabel.textContent = "Comparte tu foto ganadora";
      }
    });
  }
});
