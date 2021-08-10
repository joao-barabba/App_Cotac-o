
const url = "https://economia.awesomeapi.com.br/last/USD-BRL"

const  cotar = () =>{
    alert(`Valor inserido ${valor}`)
}

const input_to_amount = document.getElementById('to_amount')
const  input_from_amount =document.getElementById('from_amount')                                     

input_from_amount.addEventListener('click',cotar)

