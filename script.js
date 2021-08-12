
const input_to_amount = document.getElementById('to_amount')
const to_dollar = document.querySelector('.response')
const moeda = {"USD": "Dollar","BRL": "Real"}

async function calculate(){
    let from = moeda[1]
    let to = moeda[0]
    let { rates } = await getURL(`https://api.exchangerate-api.com/v4/latest/${from}`)
    let rate = rates[to]
    to_dollar.innerHTML = `O valor em Dolar agora é ${input_to_amount.value}`
}


function main() {
    calculate() 
}
async function getURL(url){
    return(await fetch(url)).json()
}

main()



input_to_amount.addEventListener('input',calculate())
to_dollar.addEventListener('click', calculate())
                          
console.log(from) 
//input_from_amount.addEventListener('input',cotar())

