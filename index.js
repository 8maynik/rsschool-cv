const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


(function(){
  const buttonMenuOpen = document.querySelector('.button-open-menu-js');
  const buttonMenuClose = document.querySelector('.button-close-menu-js');
  const menuBurger = document.querySelector('.header__nav');

  buttonMenuOpen.addEventListener('click', toggleMenu);
  buttonMenuClose.addEventListener('click', toggleMenu);


  function toggleMenu() {
    menuBurger.classList.toggle('display-none');
    buttonMenuOpen.classList.toggle('display-none');
    buttonMenuClose.classList.toggle('display-none');
  }
}());