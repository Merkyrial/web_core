const buttonOpen = document.querySelectorAll('.open_modal')
const modalElem = document.querySelector('.modal')
const buttonClose = document.querySelector('.modal__close')

const closeModal =() =>{
    modalElem.style.display = 'none'
}
buttonOpen[0].addEventListener('click', () =>{
    modalElem.style.display = 'block'
    })
buttonOpen[1].addEventListener('click', () =>{
    modalElem.style.display = 'block'
    })
buttonClose.addEventListener('click',closeModal)
