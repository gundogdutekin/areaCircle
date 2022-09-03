import { readFile } from 'node:fs'

const jsonData = () => {
    return new Promise((resolve, reject) => {
        readFile('./posts.json', 'utf8', (err, data) => {
            if (err) reject('HATA! Okunamadı')
            resolve(data)
        })
    })
}
export { jsonData }