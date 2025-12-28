function addToCart(product) {
  alert(product + " added to cart!");
}

let selectedProducts = [];

document.querySelectorAll('.compare-check').forEach(check => {
  check.addEventListener('change', function () {

    const card = this.closest('.product-card');
    const product = {
      name: card.dataset.name,
      price: card.dataset.price,
      spec: card.dataset.spec
    };

    if (this.checked) {
      if (selectedProducts.length >= 2) {
        alert("You can compare only 2 products");
        this.checked = false;
        return;
      }
      selectedProducts.push(product);
    } else {
      selectedProducts = selectedProducts.filter(p => p.name !== product.name);
    }

    updateCompareBar();
  });
});

function updateCompareBar() {
  const bar = document.getElementById('compareBar');
  const text = document.getElementById('compareText');

  if (selectedProducts.length > 0) {
    bar.style.display = 'flex';
    text.textContent = selectedProducts.map(p => p.name).join(" vs ");
  } else {
    bar.style.display = 'none';
  }
}

function compareProducts() {
  if (selectedProducts.length < 2) {
    alert("Select 2 products to compare");
    return;
  }

  alert(
    `${selectedProducts[0].name} (${selectedProducts[0].price})\nVS\n` +
    `${selectedProducts[1].name} (${selectedProducts[1].price})`
  );
}

function addToCart(product) {
  alert(product + " added to cart!");
}








        // Form submission handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would send the form data to a server here
            // For this example, we'll just show a success message
            
            // Show success message
            document.getElementById('successMessage').style.display = 'block';
            
            // Reset the form
            this.reset();
            
            // Hide success message after 5 seconds
            setTimeout(function() {
                document.getElementById('successMessage').style.display = 'none';
            }, 5000);
        });
        
        // Add some interactivity to the form
        const formInputs = document.querySelectorAll('.form-control');
        
        formInputs.forEach(input => {
            // Add focus effect
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            // Remove focus effect
            input.addEventListener('blur', function() {
                if (this.value === '') {
                    this.parentElement.classList.remove('focused');
                }
            });
        });
    