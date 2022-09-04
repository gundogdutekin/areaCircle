import { unlink } from 'node:fs'
const fileDelete = (filePath) => {
    return new Promise((resolve, reject) => {
        unlink(filePath, (err) => {
            if (err) reject('HATA!Dosya silinemedi.')
            resolve('Dosya silindi.')
        })
    })
}
fileDelete('./employees.json')
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.log(error)
    })