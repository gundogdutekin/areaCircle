import { unlink } from 'node:fs'

unlink('./delete.txt', (err) => {
    if (err) throw console.log('HATA !Dosya Silinemedi')
    console.log('Dosya silindi')
})