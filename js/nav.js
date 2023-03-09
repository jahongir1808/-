const btn = document.getElementById('navbar_btn')

let a = 1

function openMenu() {
	if (a == 1) {
		document.getElementById('navbarMenu').style.display = 'block'
		return (a = 0)
	} else {
		document.getElementById('navbarMenu').style.display = 'none'
		return (a = 1)
	}
}

btn.addEventListener('click', openMenu)

const footer_btn = document.getElementById('footer__btn')

let b = 1

function openFooter() {
	if (b == 1) {
		document.getElementById('footerMenu').style.display = 'inline'
		return (b = 0)
	} else {
		document.getElementById('footerMenu').style.display = 'none'
		return (b = 1)
	}
}

footer_btn.addEventListener('click', openFooter)
const popup_close = document.getElementById('popup-close')
const popup_menu = document.querySelector('.popup')
const popup_bottom = document.getElementById('popup_bottom-menu')

popup_close.addEventListener('click', function () {
	popup_menu.style.display = 'none'
})

const popup_open = document.getElementById('popup-menu')

popup_open.addEventListener('click', function () {
	popup_menu.style.display = 'block'
})

popup_bottom.addEventListener('click', function () {
	popup_menu.style.display = 'block'
})
