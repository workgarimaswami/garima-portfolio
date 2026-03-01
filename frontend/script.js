// script.js
document.getElementById("contact-form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = {
    name: `${document.getElementById("first-name").value} ${document.getElementById("last-name").value}`,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  try {
    const response = await fetch("https://your-backend-url.vercel.app/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    const responseDiv = document.getElementById("response");
    responseDiv.innerText = result.message;
    responseDiv.style.backgroundColor = "#d4edda";
    responseDiv.style.color = "#155724";
    
    // Clear form
    document.getElementById("contact-form").reset();
  } catch (error) {
    const responseDiv = document.getElementById("response");
    responseDiv.innerText = "Error sending message. Please try again.";
    responseDiv.style.backgroundColor = "#f8d7da";
    responseDiv.style.color = "#721c24";
  }
});