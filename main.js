// SEARCH OPTION
document.addEventListener('DOMContentLoaded', function () {
    var productsElement = document.querySelector('.search-option');
    var dropdown = document.querySelector('.search-option-description');

    productsElement.addEventListener('click', function () {
        dropdown.classList.toggle('search-option-description-visible');
    });
});

// UPDATED SELECTION OPTION AND ADDED ARROW
function updatePlaceholder(placeholderText, selectedOptionText) {
    document.querySelector('.search-input').placeholder = placeholderText;
    var selectedOption = document.getElementById('selectedOption');
    selectedOption.innerHTML = selectedOptionText + ' <span class="arrow">&#129171;</span>';
}

// CLEAR SEARCH INPUT
function clearSearchInput() {
    document.querySelector('.search-input').value = '';
    hideClearButton();
}

// SHOW CLEAR BUTTON WHEN TEXT IS WRITTEN
function showClearButton() {
    document.querySelector('.clear-button').style.display = 'flex';
    document.querySelector('.clear-button').style.justifyContent = 'center';
    document.querySelector('.clear-button').style.alignItems = 'center';
}

// HIDE THE CLEAR BUTTON WHEN THERE IS NO TEXT
function hideClearButton() {
    document.querySelector('.clear-button').style.display = 'none';
}

// REFRESH THE DISPLAY OF THE CLEAR BUTTON IF THERE IS TEXT OR NOT
document.querySelector('.search-input').addEventListener('input', function() {
    if (this.value.trim() !== '') {
        showClearButton();
    } else {
        hideClearButton();
    }
});

// OPEN THE BURGER MENU IF I CLICK
const burgerIcons = document.getElementById('burger-icons');
const links = document.querySelectorAll('.header-links li')
burgerIcons.addEventListener("click", () => {
    header.classList.toggle("burger-active")
})
// CLOSE THE BURGER MENU IF I CLICK ON A LINK
links.forEach((link) => {
    link.addEventListener("click", () => {
        header.classList.remove("burger-active")
    })
})