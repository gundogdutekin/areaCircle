import { writeFile } from 'node:fs'
import { jsonData } from './index.js'

jsonData()
    .then((value) => {
        writeFile('message.json', value, (err) => {
            if (err) throw console.log('Dosyaya yazdırılamadı.')
            console.log('Dosya Yazdırıldı!')
        })
    })
    .catch((error) => {
        console.log(error)
    })