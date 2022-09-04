import { writeFile } from 'node:fs'

writeFile(
    './employees.json',
    "{ name: 'Employee 1 Name', salary: 2000 }",
    (err) => {
        if (err) throw console.log('HATA ! Dosya yazdırılamadı')
        console.log('Dosya yazdırıldı.')
    }
)