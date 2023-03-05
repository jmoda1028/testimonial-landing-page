const backdrop = document.querySelector('.backdrop');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const btnExit = document.querySelector('.btn-exit');
const menuItems = document.querySelectorAll('.mobile-nav--link');

const toggleMenu = () => {
    backdrop.classList.toggle('show-backdrop')
    mobileNav.classList.toggle('show-mobile--nav')
}

menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", toggleMenu)
})

toggleButton.addEventListener("click", toggleMenu)
btnExit.addEventListener("click", toggleMenu)
backdrop.addEventListener("click", toggleMenu)

// main nav active
document.querySelectorAll('.main-nav--items li a').forEach(link => {
    if(link.href === window.location.href){
      link.classList.add('active');
    }
  })