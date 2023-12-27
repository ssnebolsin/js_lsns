// document.querySelector('.btn').onclick = () => {

//     toggleModal('Hello1')
//     toggleModal('Esse et nostrud non exercitation consectetur proident esse duis enim.')
// }
// let btn1 = document.getElementById('hello')
// btn1.onclick = () => {
//     toggleModal(btn1.innerText)
// }

let config = {
    'hello': 'Hello',
    'goodbye': 'Goodbye',
    'howru': 'How are you doing',
    'lorem': 'Dolor tempor est veniam magna voluptate tempor Lorem.'
}

console.log(Array.from(document.querySelectorAll('.btn')))
let allBtns = Array.from(document.querySelectorAll('.btn'))
allBtns.forEach(action)
function action(item){
    item.onclick = () => {
        let txt = item.id
        toggleModal(config[txt])
    }
}

function toggleModal(content){
    let existedModals = document.querySelectorAll('dialog[open]')
    let offset = 0
    if (existedModals[0]){
        offset = Array.from(existedModals).reduce(callback,0)
    }

    function callback(total, item){
        return total + item.offsetHeight + 20
    }
    
    console.log(offset)
    let modal = createModal(content, offset)
    document.querySelector('body').appendChild(modal)
}

function createModal(content, top = 0){
    let modal = document.createElement('dialog')
    modal.innerText = content
    modal.classList.add('active')
    modal.setAttribute('open', '')
    modal.style.position = 'fixed'
    modal.style.top = '0px'
    modal.style.left = '300px'
    modal.style.width = '100px'
    modal.style.translate = `0 ${top}px`
    return modal
}