import { mkdir } from 'node:fs'

mkdir('./files', (err) => {
    if (err) throw console.log('HATA ! Dizin oluşturulamadı')
    console.log('Dizin oluşturuldu')
})