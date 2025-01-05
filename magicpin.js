
document.addEventListener('DOMContentLoaded', () => {
  
    const searchButtons = document.querySelectorAll('#d3 input[type="search"]');
    const mobileInput = document.getElementById('Mobile');
    const countryCodeInput = document.getElementById('country');
    const getAppImages = document.querySelectorAll('#d2 img');

   
    searchButtons.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.borderColor = '#007bff';
            input.style.outline = 'none';
        });

        input.addEventListener('blur', () => {
            input.style.borderColor = '#ccc';
        });
    });

    
    mobileInput.addEventListener('input', () => {
        const mobileValue = mobileInput.value;
        if (/^\d{10}$/.test(mobileValue)) {
            mobileInput.style.borderColor = 'green';
        } else {
            mobileInput.style.borderColor = 'red';
        }
    });

   
    countryCodeInput.disabled = true;

    getAppImages.forEach(img => {
        img.addEventListener('error', () => {
            img.alt = 'Image not available';
            img.style.display = 'none';
        });
    });

    
    const navMenu = document.querySelector('nav ul');
    const navToggle = document.createElement('button');
    navToggle.textContent = '☰';
    navToggle.classList.add('nav-toggle');
    document.querySelector('nav').prepend(navToggle);

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

   
    const clearSearchButtons = document.querySelectorAll('.clear-search');
    clearSearchButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            searchButtons[index].value = ''; // Clear the respective input field
            searchButtons[index].style.borderColor = '#ccc'; // Reset border color
        });
    });

   
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.textContent = '↑';
    scrollToTopButton.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopButton);

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

   
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });
});
