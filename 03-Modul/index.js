const { circleArea, circleCircumference } = require('./circle')

const circleCal = (r) => {
        return new Promise((resolve, reject) => {
            console.log(circleArea(r))
            console.log(circleCircumference(r))
            resolve('Dairenin alanı ve çevresi hesaplandı.')

            reject('HATA! Dairenin alanı ve çevresi hesaplanamadı.')
        })
    }
    /* async function calculator(r) {
            try {
                const result = await circleCal(r)
                console.log(result)
            } catch (error) {
                console.log(error)
            }
        }
        calculator(5) */

circleCal(5)
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.log(error)
    })