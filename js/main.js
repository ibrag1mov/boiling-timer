const elTimer = document.querySelector('.js-timer');
const elBtn = document.querySelector('.js-submit');
const elInput = document.querySelector('.js-input');





elBtn.addEventListener('click', (evt)=>{
    let elText = document.createElement('p');
    elText.setAttribute('class', 'timer rounded-circle bg-warning');
    timer(elInput.value, elText)
    elTimer.appendChild(elText);
    evt.preventDefault()
    elInput.value=''

})

function timer(number, text){
    if(number>0){
        text.textContent = number;
        let interval = setInterval(()=>{
            number--
       
            if(number <= 3){
                text.classList.remove('bg-warning')
                text.classList.add('bg-danger')
                text.classList.add('text-light')
            }
            if(number < 0)
            {
                text.classList.add('d-none')
                clearInterval(interval)
            }
            text.textContent = number;
        },1000)

    }
}
