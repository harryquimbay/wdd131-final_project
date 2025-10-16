// ===== FORM SUBMISSION =====
document.querySelector("#joinForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const style = document.querySelector("#style").value;

    // ===== CONDITIONAL BRANCHING =====
    if (!name || !email || style === "Select One") {
        alert("⚠️ Please fill out all fields before submitting!");
        return;
    }

    // ===== OBJECT CREATION =====
    const formData = {
        name,
        email,
        style,
        date: new Date().toLocaleString()
    };

    // ===== ARRAY & LOCAL STORAGE =====
    // Retrieve existing submissions or start new
    const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    submissions.push(formData);
    localStorage.setItem("submissions", JSON.stringify(submissions));

    // ===== TEMPLATE LITERAL MESSAGE =====
    alert(`🌊 Thank you, ${name}! Your beach style "${style}" has been saved.`);

    // Redirect to review page
    window.location.href = "review.html";
});


const submissions = JSON.parse(localStorage.getItem("submissions")) || [];

const container = document.querySelector("#review-container");

if (submissions.length > 0) {
    container.innerHTML = submissions.map(sub => `
        <div class="review-card">
            <h3>${sub.name}</h3>
            <p>Email: ${sub.email}</p>
            <p>Favorite Style: ${sub.style}</p>
            <small>Submitted on: ${sub.date}</small>
        </div>
    `).join("");
} else {
    container.innerHTML = "<p>No submissions found.</p>";
}