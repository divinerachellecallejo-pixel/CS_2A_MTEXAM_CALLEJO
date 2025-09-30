document.addEventListener("DOMContentLoaded", () => {
    const cartCountElement = document.getElementById("cart-count");
    let cartCount = 0;

    function updateCartCount() {
        if (cartCountElement) {
            cartCountElement.textContent = cartCount;
        }
    }
    
    document.querySelectorAll(".add").forEach(addBtn => {
        addBtn.addEventListener("click", () => {
            addBtn.classList.add("hidden");
            const removeBtn = addBtn.nextElementSibling;
            if (removeBtn && removeBtn.classList.contains("remove")) {
                removeBtn.classList.remove("hidden");
            }
            
            cartCount++;
            updateCartCount();
            
            const productCard = addBtn.closest(".product.card");
            const productName = productCard ? productCard.querySelector("h4").textContent : "product";
            alert(`Added "${productName}" to cart.`);
        });
    });
    
    document.querySelectorAll(".remove").forEach(removeBtn => {
        removeBtn.addEventListener("click", () => {
            removeBtn.classList.add("hidden");
            const addBtn = removeBtn.previousElementSibling;
            if (addBtn && addBtn.classList.contains("add")) {
                addBtn.classList.remove("hidden");
            }
            
            if (cartCount > 0) {
                cartCount--;
                updateCartCount();
            }
            
            const productCard = removeBtn.closest(".product.card");
            const productName = productCard ? productCard.querySelector("h4").textContent : "product";
            alert(`Removed "${productName}" from cart.`);
        });
    });
});