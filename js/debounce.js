let input = document.querySelector('.inp')
let counter = 0


input.addEventListener('input', (e)=>{
    debounce(e.target.value, 500)
})

function debounce (val, timeout) {
    counter++

    if(counter != 1){
        clearTimeout(timeOutFunc)
    }

    if (val.length > 0) {
        timeOutFunc = setTimeout( ()=>{
        console.log(val)
    }, timeout)
    }

}
