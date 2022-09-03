const circleArea = (r) => {
    return `Dairenin Alanı :${Math.PI * Math.pow(r, 2)} `
}
const circleCircumference = (r) => {
    return `Dairenin Çevresi :${2 * Math.PI * r}`
}

module.exports = { circleArea, circleCircumference }