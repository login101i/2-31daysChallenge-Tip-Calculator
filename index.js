const cost_input = document.querySelector('.cost')
const service_input = document.querySelector('.service');
const people_input = document.querySelector('.people')

const tipBtn = document.querySelector('footer');
tipBtn.addEventListener('click', calc_tip)

function calc_tip() {
    let cost = Number(cost_input.value)
    let service = Number(service_input.value) / 100
    let people = Number(people_input.value)
    let tip = (cost * service) / people

    let tip_el = document.querySelector('.tip-wrap .tip')
    tip_el.innerText = tip.toFixed(2) + "zł" + ((people > 1) ? ' dla każdego kelnera' : " ")
}
