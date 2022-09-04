import { appendFile } from 'node:fs'

const fileUpdate = (filePath) => {
    return new Promise((resolve, reject) => {
        appendFile(
            filePath,
            "\n { name: 'Employee 2 Name', salary: 3000 }",
            (err) => {
                if (err) reject('HATA!Dosya güncellenemedi.')
                resolve('Dosya güncellendi')
            }
        )
    })
}
fileUpdate('./employees.json')
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.log(error)
    })