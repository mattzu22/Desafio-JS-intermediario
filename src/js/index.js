
const inputs = document.querySelectorAll(".input")       

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault()

    inputs.forEach(input => {

        if(input.value == ''){
            input.classList.add('invalido')
            input.nextElementSibling.classList.add('invalido')
        }
       
    });

})

inputs.forEach(input => {

    input.addEventListener('change', function valido(){

        if(input.value != ''){
            input.classList.add('valido')
            input.classList.remove('invalido')
            input.nextElementSibling.classList.remove('invalido')
        }else{
            input.classList.remove('valido')
            
        }

    })
})

