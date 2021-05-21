let tablica = new Array()
function changeName() {
    let name = document.getElementById('inp1').value
    if (name.length < 3) {
        document.getElementById('p1').style = 'visibility: visibles'
    } else {
        document.getElementById('p1').style = 'visibility: hidden'
    }
}
function getName() {
    let name = document.getElementById('inp1').value
    tablica.push("Imie:", name)
}
function changeSurname() {
    let surname = document.getElementById('inp2').value
    if (surname.length < 4) {
        document.getElementById('p2').style = 'visibility: visibles'
    } else {
        document.getElementById('p2').style = 'visibility: hidden'
    }
}
function getSurname() {
    let surname = document.getElementById('inp2').value
    tablica.push("Nazwisko:", surname)
}
function changeTelefon(val) {
    // let telefon = document.getElementById('inp3').value
    const arr = val.split('')
    const num = arr.filter(item => {
        if (item === '0' || item === '1' || item === '2' || item === '3' || item === '4' || item === '5' || item === '6' || item === '7' || item === '8' || item === '9') {
            document.getElementById('p4-1').style = 'visiblity: hidden'
        } else {
            document.getElementById('p4-1').style = 'visiblity: visible'
        }
    })
}
function getTelefon(val) {
    let telefon = document.getElementById('inp4').value
    let xd = val.split('')
    const isTelefon = xd.some(item => item === '1' || item === '2' || item === '3' || item === '4' || item === '5' || item === '6' || item === '7' || item === '8' || item === '9')
    if (isTelefon == true) {
    }
    else {
        tablica.push("Telefon:", telefon)
    }
}
function changeEmail(val) {
    // const email = document.getElementById('inp3').value
    let xd = val.split('')
    const isEmail = xd.some(item => item === '@')
    if (isEmail == false) {
        document.getElementById('p3').style = 'visiblity: visible'
    } else {
        document.getElementById('p3').style = 'visiblity: hidden'
    }
}
function getEmail(val) {
    let email = document.getElementById('inp3').value
    let xd = val.split('')
    const isEmail = xd.some(item => item == '@')
    if (isEmail == true) {
        alert('Adres e-mail musi posiadać "@" w sobie.')
    } else {
        tablica.push("Email:", email)
    }
}
const info = document.getElementById('inp5').value
function changeWiadomosc() {
    let wiadom = document.getElementById('inp5').value
    if (wiadom.length < 10) {
        document.getElementById('p5').style = 'visibility: visibles'
    } else {
        document.getElementById('p5').style = 'visibility: hidden'
    }
}
function getWiadomosc() {
    let wiadom = document.getElementById('inp5').value
    tablica.push("Imie:", wiadom)
}

function go(value) {
    changeName(), getName(), changeSurname(), getSurname(), changeEmail(value), getEmail(value), changeTelefon(value), getTelefon(value), changeWiadomosc(), getWiadomosc();
    console.log(tablica)
    tablica = []
}
