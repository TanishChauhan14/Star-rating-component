const main = document.querySelectorAll("i")
const description = document.querySelector(".hero3")
function click1() {
    main[0].removeAttribute('id')
    description.innerHTML = `we're sorry to hear that you had a  bad experience.We would like to learn more about what happened and how we can make things right.`
}
function click2() {
    main[1].removeAttribute('id')
    main[0].removeAttribute('id')
    description.innerHTML = `We apologize for the inconvienece you experienced . we appereciate your feedback and would like to work with you to address any issues .`
}
function click3() {
    main[2].removeAttribute('id')
    main[1].removeAttribute('id')
    main[0].removeAttribute('id')
    description.innerHTML =`Thank you for your feedback.We are sorry to hear that your experience wasn't perfect . We would love to hear more about your concerns to how we can improve. `
}
function click4() {
    main[3].removeAttribute('id')
    main[2].removeAttribute('id')
    main[1].removeAttribute('id')
    main[0].removeAttribute('id')
    description.innerHTML =`Thank you for your feedback! We're glad to know glad to know that you had a great experience and we appreciate your support.`
}
function click5() {
    main[4].removeAttribute('id')
    main[3].removeAttribute('id')
    main[2].removeAttribute('id')
    main[1].removeAttribute('id')
    main[0].removeAttribute('id')
    description.innerHTML =`Excellent! We're thrilled to hear you had such a positive experienced. Thank you for choosing our platform`
}