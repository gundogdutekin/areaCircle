import { readFile } from 'node:fs'
const fileRead = (filePath) => {
    return new Promise((resolve, reject) => {
        readFile(filePath, 'utf8', (err, data) => {
            if (err) reject('HATA!Dosya okunamadı.')
            resolve(data)
        })
    })
}
fileRead('./employees.json')
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.log(error)
    })