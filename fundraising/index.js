// const { url } = require("inspector")

const whatsapp = document.querySelector('.fa-whatsapp')
const instagram = document.querySelector("#insta")
const twitter = document.querySelectorAll(".share-twitter")

const pageUrl = location.href
const msg = 'Your small to small Donation can save this person life'

const whatsappApi = `https://wa.me/?text=${pageUrl}. ${msg}`;
const twitterApi = `https://twitter.com/intent/tweet?text=${pageUrl}.${msg}`

whatsapp.addEventListener('click', () => {
    console.log("isne whatsapp pe click kiya")
})

instagram.addEventListener('click', () => {
    console.log("isne insta pe click kiya")

})

twitter.forEach((twitterElement) => {
    twitterElement.addEventListener('click', () => {
        // console.log("isne twitter pe click kiya")
        window.open(url = twitterApi, target = 'blank')
    })
})

