const titleCode = document.querySelector('.title-code')
const buttonMenuOpen = document.querySelector('.bnt-open')
const buttonMenuClose = document.querySelector('.bnt-close')
const iconMenu = document.querySelector('.bnt-menu img')
const navList = document.querySelector('.nav-list')

titleCode.textContent = '<Great Code/>'

buttonMenuOpen.addEventListener('click', () => {
  navList.classList.add('show')
  buttonMenuOpen.style.display = 'none'
  buttonMenuClose.style.display = 'block'
})

buttonMenuClose.addEventListener('click', () => {
  navList.classList.remove('show')
  buttonMenuClose.style.display = 'block'
  buttonMenuOpen.style.display = 'block'
  buttonMenuClose.style.display = 'none'
})
