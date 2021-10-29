const modalGalery = document.querySelector('.modal-galery')
const imageProduct = document.querySelector('.carousel__track-container')
const closeModalGalery = document.querySelector('.galery__button--close')

imageProduct.addEventListener('click', () => {
    modalGalery.classList.add('active-modal-galery')
})


closeModalGalery.addEventListener('click', () => {
    modalGalery.classList.remove('active-modal-galery')
})


const track = document.querySelector('.carousel__track')
const slides = Array.from(track.children)
const dotsNav = document.querySelector('.carousel__nav')
const dots = Array.from(dotsNav.children)
 
const slideWidth = slides[0].getBoundingClientRect().width

//arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'
}

slides.forEach(setSlidePosition)

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
    targetSlide.classList.add('current-slide')
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide')
    targetDot.classList.add('current-slide')
}

// when I click the nav indicators, move to that slide
dotsNav.addEventListener('click', e => {
    // what indicator was clicked on?
    const targetDot = e.target.closest('button')

    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide')
    const currentDot = dotsNav.querySelector('.current-slide')
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targtSlide = slides[targetIndex]

    moveToSlide(track, currentSlide, targtSlide)
    updateDots(currentDot, targetDot)
})









//modal

const modalTrack = document.querySelector('.galery__track')
const modalSlides = Array.from(modalTrack.children)
const nextButton = document.querySelector('.galery__button--right ') 
const prevButton = document.querySelector('.galery__button--left ')
const modalDotsNav = document.querySelector('.galery__nav')
const modalDots = Array.from(modalDotsNav.children)

const modalSlideWidth = modalSlides[0].getBoundingClientRect().width

const setModalSlidePosition = (modalSlide, modalIndex) => {
    modalSlide.style.left = modalSlideWidth * modalIndex + 'px'
}

modalSlides.forEach(setModalSlidePosition)

const modalMoveToSlide = (modalTrack, modalCurrentSlide, modalTargetSlide) => {
    modalTrack.style.transform = 'translateX(-' + modalTargetSlide.style.left + ')'
    modalCurrentSlide.classList.remove('modal-current-slide')
    modalTargetSlide.classList.add('modal-current-slide')
}

const modalUpdateDots = (modalCurrentDot, modalTargetDot) => {
    modalCurrentDot.classList.remove('modal-current-slide')
    modalTargetDot.classList.add('modal-current-slide')
}

const modalHideShowArrows = (modalSlides, prevButton, nextButton, modalTargetIndex) => {
    if(modalTargetIndex === 0) {
        prevButton.classList.add('is-hidden')
        nextButton.classList.remove('is-hidden')
    } else if (modalTargetIndex === modalSlides.length - 1) {
        prevButton.classList.remove('is-hidden')
        nextButton.classList.add('is-hidden')
    } else {
        prevButton.classList.remove('is-hidden')
        nextButton.classList.remove('is-hidden')
    }
}

prevButton.addEventListener('click', e => {
    const modalCurrentSlide = modalTrack.querySelector('.modal-current-slide')
    const modalPrevSlide = modalCurrentSlide.previousElementSibling
    const modalCurrentDot = modalDotsNav.querySelector('.modal-current-slide')
    const modalPrevDot = modalCurrentDot.previousElementSibling
    const modalPrevIndex = modalSlides.findIndex(modalSlide => modalSlide === modalPrevSlide)
    
    modalMoveToSlide(modalTrack, modalCurrentSlide, modalPrevSlide)
    modalUpdateDots(modalCurrentDot, modalPrevDot)
    modalHideShowArrows(modalSlides, prevButton, nextButton, modalPrevIndex)
})

nextButton.addEventListener('click', e => {
    const modalCurrentSlide = modalTrack.querySelector('.modal-current-slide')
    const modalNextSlide = modalCurrentSlide.nextElementSibling
    const modalCurrentDot = modalDotsNav.querySelector('.modal-current-slide')
    const modalNextDot = modalCurrentDot.nextElementSibling
    const modalNextIndex = modalSlides.findIndex(modalSlide => modalSlide === modalNextSlide)
    
    modalMoveToSlide(modalTrack, modalCurrentSlide, modalNextSlide)
    modalUpdateDots(modalCurrentDot, modalNextDot)
    modalHideShowArrows(modalSlides, prevButton, nextButton, modalNextIndex)
})

modalDotsNav.addEventListener('click', e => {
    const modalTargetDot = e.target.closest('button')

    if(!modalTargetDot) return;

    const modalCurrentSlide = modalTrack.querySelector('.modal-current-slide')
    const modalCurrentDot = modalDotsNav.querySelector('.modal-current-slide')
    const modalTargetIndex = modalDots.findIndex(modalDot => modalDot === modalTargetDot)
    const modalTargtSlide = modalSlides[modalTargetIndex]

    modalMoveToSlide(modalTrack, modalCurrentSlide, modalTargtSlide)
    modalUpdateDots(modalCurrentDot, modalTargetDot)
    modalHideShowArrows(modalSlides, prevButton, nextButton, modalTargetIndex)
})