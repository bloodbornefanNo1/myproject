let hand = 0
let chipslist = []
let rungame = true
let main_d = document.querySelector('.main_d')
let new_card = document.querySelector(".new_card")
let count = document.querySelector(".chips")
let enemy = document.querySelector(".enemypoints")
let hands = document.querySelector(".hands")
let openbutton = document.querySelector(".playcards")
let urmoney = document.querySelector(".urmoney")
let raisepot = document.querySelector(".raisepot")
let pot = document.querySelector(".pot")
let secretcard = document.querySelector(".secretcard")

let isDragging = false;
let offsetX, offsetY;

let potcount = 0
let e = 2
let a = 0
let f = 5
let g = 1

let money = localStorage.getItem("money")
if (money > 100) {
    potcount = money / 100 * 90 * 2
    money = money / 100 * 90

}
if (money > 5) {
    money -= 5
    potcount += 10
}
if (money == null) {
    money = 100
}
if (money <= 0) {
    money = 100
}
function handler_new_card() {
    f -= 1
    hands.innerText = f
    a = Math.round((Math.random() * 34) + 1)
    chipslist.push(a)
    const img = document.createElement("img")
    img.src = `./cards/${a}.webp`
    main_d.appendChild(img)
    chips = 0
    chipscount()

    if (f < 1) {
        new_card.removeEventListener("click", handler_new_card)
    }
}

hands.innerText = f
new_card.addEventListener('click',
    handler_new_card);
let chips = 0
function chipscount() {


    while (hand < e) {

        a = Math.round((Math.random() * 34) + 1)
        chipslist.push(a)
        const img = document.createElement("img")
        img.src = `./cards/${a}.webp`
        main_d.appendChild(img)
        hand++

    }

    let c = 0

    const chipslen = chipslist.length
    while (c < chipslen) {
        let d = chipslist[c]
        if (d < 3) {
            chips += 2
            c++
        }
        else if (5 > d & d >= 3) {
            chips += 3
            c++
        }
        else if (5 <= d & d < 8) {
            chips += 4
            c++
        }
        else if (8 <= d & d < 10) {
            chips += 5
            c++
        }
        else if (10 <= d & d < 11) {
            chips += 6
            c++
        }
        else if (11 <= d & d < 13) {
            chips += 7
            c++
        }
        else if (13 <= d & d < 14) {
            chips += 8
            c++
        }
        else if (14 <= d & d < 17) {
            chips += 9
            c++
        }
        else if (17 <= d & d < 21) {
            chips += 10
            c++
        }
        else if (21 <= d & d < 25) {
            chips += 2
            c++
        }
        else if (25 <= d & d < 28) {
            chips += 3
            c++
        }
        else if (28 <= d & d < 32) {
            chips += 4
            c++
        }
        else if (32 <= d & d <= 35) {
            chips += 11
            c++
        }
        count.innerText = `chips: ${chips}`
        const chipsrn = chips
    }
}
chipscount()
let h = 0
let k = 4
let enemyi = 0
let enemychipslist = []

function enemygivecards() {
    while (h < k) {
        enemyi = Math.round((Math.random() * 34) + 1)
        enemychipslist.push(enemyi)
        h++
    }
}
enemygivecards()
let enemychips = 0

let enemyc = 0
function enemycards() {



    const enemychipslen = enemychipslist.length
    while (enemyc < enemychipslen) {
        let enemyd = enemychipslist[enemyc]
        enemyc++
        if (enemyd < 3) {
            enemychips += 2
        }
        else if (5 > enemyd & enemyd >= 3) {
            enemychips += 3
        }
        else if (5 <= enemyd & enemyd < 8) {
            enemychips += 4
        }
        else if (8 <= enemyd & enemyd < 10) {
            enemychips += 5
        }
        else if (10 <= enemyd & enemyd < 11) {
            enemychips += 6
        }
        else if (11 <= enemyd & enemyd < 13) {
            enemychips += 7
        }
        else if (13 <= enemyd & enemyd < 14) {
            enemychips += 8
        }
        else if (14 <= enemyd & enemyd < 17) {
            enemychips += 9
        }
        else if (17 <= enemyd & enemyd < 21) {
            enemychips += 10
        }
        else if (21 <= enemyd & enemyd < 25) {
            enemychips += 2
        }
        else if (25 <= enemyd & enemyd < 28) {
            enemychips += 3
        }
        else if (28 <= enemyd & enemyd < 32) {
            enemychips += 4
        }
        else if (32 <= enemyd & enemyd <= 35) {
            enemychips += 11
        }



    }


}
enemycards()

alert(enemychips)
while (enemychips > 24) {
    enemychips -= 3
}
while (enemychips < 17) {
    enemychips += 4
}
alert(enemychips)


console.log(enemychipslist)
console.log(chipslist)

openbutton.addEventListener("click",
    () => {
        if (chips > 21 & enemychips > 21) {
            if (chips < enemychips) {
                alert("u won!!!!!!!")
                money += potcount
                localStorage.setItem("money", money)

                location.reload()

            }
            else if (chips > enemychips) {
                alert("ure loser")
                location.reload()
            }

        }
        else if (chips > 21 & enemychips < 21) {
            alert("ure loser")
            location.reload()
        }
        else if (chips < 21 & enemychips > 21) {
            alert("u won!!!!!!!!!!")
            money += potcount
            localStorage.setItem("money", money)
            location.reload()
        }
        else if (chips < 21 & enemychips < 21) {
            if (chips > enemychips) {
                alert("u won!!!!!!!")
                money += potcount
                localStorage.setItem("money", money)

                location.reload()
            }
            else if (chips < enemychips) {
                alert("ure loser")
                location.reload()

            }

        }
        else if (chips == 21 & enemychips > 21 || enemychips < 21) {
            alert("u won")
            money += potcount
            localStorage.setItem("money", money)
            location.reload()
        }
        else if (enemychips == 21 & chips > 21 || chips < 21) {
            alert("u lose")
            location.reload()
        }
        else if (chips == enemychips) {
            alert("draw")
            money += potcount / 2
            localStorage.setItem("money", money)
            location.reload()
        }
    }
)
pot.innerText = `pot: ${potcount}`
urmoney.innerText = `money: ${money}`
raisepot.addEventListener("click",
    () => {
        money -= 5
        potcount += 10
        pot.innerText = `pot: ${potcount}`
        urmoney.innerText = `money: ${money}`
        localStorage.setItem("money", money)
        if (money <= 5) {
            potcount -= 10
            money += 5
        }

    })





secretcard.addEventListener("click",
    () => {
        let secretcardnum = Math.round((Math.random() * 10) + 1)
        // let secretcardnum = 8
        if (secretcardnum == 1) {
            alert("gain + 500 money!!!")
            money += 500
        }
        else if (secretcardnum == 2) {
            alert("loooooooser!!!!!!")
            money = money / 2
            localStorage.setItem("money", money)
            location.reload()
        }
        else if (secretcardnum == 4) {
            alert("im doing everything for u!!!!!!!!!")
            potcount += money - 5
            money = 5
            potcount = potcount * 4

        }
        else if (secretcardnum == 3) {
            // alert("stop gambling bruh, go read bible")

            // window.location.replace("https://prayerlit.com/bible-verses-about-gambling/")
            alert(secretcardnum)
        }
        else if (secretcardnum == 5) {
            alert("ok u won twin")
            money = money + potcount
            location.reload()
        }
        else if (secretcardnum == 6) {
            alert("vision through cards")
            alert(`enemychips = ${enemychips}`)
        }
        else if (secretcardnum == 7) {
            alert("nothing happened")
        }
        else if (secretcardnum == 8) {
            alert("nothing happened")
        }
        else if (secretcardnum == 9) {
           alert("ur lucky twin")
           money = money**2
        }
        else if (secretcardnum == 10){
            alert("nothing happened")
        }











        pot.innerText = `pot: ${potcount}`
        urmoney.innerText = `money: ${money}`
        localStorage.setItem("money", money)
    }
)