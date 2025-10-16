const summary = document.querySelector("#summary");
const recList = document.querySelector("#recommendations");
const data = JSON.parse(localStorage.getItem("orderData"));

if (data) {
    summary.innerHTML = `
        <h2>Thank you, ${data.name}!</h2>
        <p>We’ll send updates about <strong>${data.style}</strong> trends to ${data.email}.</p>
`;

const recommendations = {
    swimwear: ["Bikini Set", "Boardshorts", "Towel"],
    linen: ["Linen Shirt", "Wide Pants", "Beach Hat"],
    sandals: ["Flip-flops", "Espadrilles", "Slides"]
};

const items = recommendations[data.style];
items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        recList.appendChild(li);
    });
}
