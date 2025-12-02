// బటన్ క్లిక్ చేసినప్పుడు అలర్ట్ చూపించడానికి
function selectProduct(productName) {
    alert("Great choice! You have selected the " + productName + " edition. Proceeding to checkout...");
}

// స్మూత్ స్క్రోలింగ్ ఎఫెక్ట్ (Optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});