import { appendFile } from 'node:fs'
appendFile(
    './message.json',
    ',{"userId": 1,"id": 2,"title": "qui est esse","body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"}',
    (err) => {
        if (err) throw console.log('HATA! Dosyaya veri eklenemedi')
        console.log('Dosyaya veri eklendi.')
    }
)