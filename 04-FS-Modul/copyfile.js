import { copyFile } from 'node:fs'

copyFile('./delete.txt', './files/delete.txt', (err) => {
    if (err) throw console.log('HATA ! Dosya kopyalanamadı.')
    console.log('Dosya kopyalandı')
})