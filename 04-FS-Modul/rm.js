import { rm } from 'node:fs'

rm('./deleted-folder', { recursive: true }, (err) => {
    if (err) throw console.log('HATA! Klasörler silinemedi')
    console.log('Kalasörler ve tüm alt klasörler silindi')
})