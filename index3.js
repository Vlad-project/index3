const slider = document.querySelector('.slider')
const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
// отримуємо всі картинку у вигляді NodeList
const slides = document.querySelectorAll('.slider-image')
const bottom = document.querySelector('.bottom')

let currentSliderIndex = 0
const paginationCircles = []
// отримуємо ширину слайдера для обчислення ширини слайдів
let sliderWidth = slider.clientWidth
window.addEventListener('resize', () => {
	sliderWidth = slider.clientWidth
	showSlide()
})
function createPaginations() {
	const div = document.createElement('div')
	div.classList.add('pagination-circle')
	bottom.appendChild(div)
	paginationCircles.push(div)
}
function addPaginations() {
	slides.forEach(createPaginations)
	paginationCircles[0].classList.add('activeSlider')
	paginationCircles.forEach((circle, index) => {
		circle.addEventListener('click', () => changeSlider(index))
	})
}
function addActiveSliderClass() {
	paginationCircles[currentSliderIndex].classList.add('activeSlider')
}
function removeActiveSliderClass() {
	paginationCircles[currentSliderIndex].classList.remove('activeSlider')
}
function changeSlider(sliderIndex) {
	removeActiveSliderClass()
	currentSliderIndex = sliderIndex
	addActiveSliderClass()
	showSlide()
}
function showSlide() {
	slider.style.transform = `translateX(-${currentSliderIndex * sliderWidth}px)`
	slider.style.transition = `transform 0.5s ease-in-out`
}
function nextSlide() {
	let newSliderIndex = currentSliderIndex + 1
	if (newSliderIndex >= slides.length) {
		newSliderIndex = 0
	}
	changeSlider(newSliderIndex)
}
function previousSlide() {
	let newSliderIndex = currentSliderIndex - 1
	if (newSliderIndex < 0) {
		newSliderIndex = slides.length - 1
	}
	changeSlider(newSliderIndex)
}
addPaginations()
arrowLeft.addEventListener('click', previousSlide)
arrowRight.addEventListener('click', nextSlide)