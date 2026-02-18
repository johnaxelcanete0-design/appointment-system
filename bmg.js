// DROPDOWN MENU
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      const dropdownMenu = this.nextElementSibling;

      // I-close lahat ng bukas na dropdown maliban dito
      document.querySelectorAll(".dropdown-menu").forEach(menu => {
        if (menu !== dropdownMenu) {
          menu.classList.remove("show");
        }
      });

      // I-toggle yung dropdown menu
      dropdownMenu.classList.toggle("show");
    });
  });

  // I-close kapag nag-click sa labas
  window.addEventListener("click", function (e) {
    if (!e.target.matches(".dropdown-toggle")) {
      document.querySelectorAll(".dropdown-menu").forEach(menu => {
        menu.classList.remove("show");
      });
    }
  });
});

// SERVICES
window.onload = function () {
  showCategory('nails');
};

function showCategory(categoryId) {
  const allCategories = document.querySelectorAll('.offrs');
  const allButtons = document.querySelectorAll('.ctgrybttns button');

  allCategories.forEach(category => {
    category.style.display = 'none';
  });

  allButtons.forEach(button => {
    button.classList.remove('active');
  });

  const selectedCategory = document.getElementById(categoryId);
  if (selectedCategory) {
    selectedCategory.style.display = 'flex';
  }

  const activeButton = document.querySelector(`.ctgrybttns button[onclick="showCategory('${categoryId}')"]`);
  if (activeButton) {
    activeButton.classList.add('active');
  }
}
/* UNIVERSAL FOOTER DROPDOWN (works on all pages) */
document.addEventListener('DOMContentLoaded', function () {
  // hanapin lahat ng footer headings na may kasunod na <ul>
  const footerHeads = document.querySelectorAll('.ftrcontent h3');

  footerHeads.forEach(head => {
    // siguraduhin may next sibling na <ul>
    const next = head.nextElementSibling;
    if (next && next.tagName.toLowerCase() === 'ul') {
      // markahan para gamitin bilang dropdown list kung wala pa
      next.classList.add('dropdown-list');

      // gumamit ng click handler
      head.style.cursor = 'pointer';
      head.addEventListener('click', function (e) {
        e.preventDefault();

        // toggle current list
        next.classList.toggle('show');

        // isara yung ibang dropdowns sa footer
        document.querySelectorAll('.ftrcontent .dropdown-list').forEach(ul => {
          if (ul !== next) ul.classList.remove('show');
        });
      });
    }
  });

  // kapag nag-click sa labas ng footer headings, isara lahat
  window.addEventListener('click', function (e) {
    const clickedInsideHead = e.target.closest('.ftrcontent h3');
    if (!clickedInsideHead) {
      document.querySelectorAll('.ftrcontent .dropdown-list').forEach(ul => {
        ul.classList.remove('show');
      });
    }
  });
});
