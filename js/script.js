function showCartAlert() {
    const alertBox = document.getElementById("cart-alert");
    alertBox.classList.remove("hidden");
    setTimeout(() => alertBox.classList.add("opacity-100"), 10);
    
    setTimeout(() => {
        alertBox.classList.remove("opacity-100");
        setTimeout(() => alertBox.classList.add("hidden"), 300);
    }, 3000);
}
