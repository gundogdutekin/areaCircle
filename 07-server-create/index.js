import http from 'http'

const server = http.createServer((req, res) => {
    const url = req.url
    if (url === '/') {
        res.writeHeader('200', { 'Content-Type': 'text/html; charset: utf-8' })
        res.write('<h1>ANASAYFA SAYFASINA HOSGELDINIZ</h1>')
    } else if (url === '/about') {
        res.writeHeader('200', { 'Content-Type': 'text/html; charset: utf-8' })
        res.write('<h1>HAKKIMIZDA SAYFASINA HOSGELDINIZ</h1>')
    } else if (url === '/contact') {
        res.writeHeader('200', { 'Content-Type': 'text/html; charset: utf-8' })
        res.write('<h1>ILETISIM SAYFASINA HOSGELDINIZ</h1> ')
    } else {
        res.writeHeader('404', { 'Content-Type': 'text/html; charset: utf-8' })
        res.write('<h1>404 aradiginiz sayfa bulunmadi</h1> ')
    }

    res.end()
})

const port = 5000

server.listen(port, () => {
    console.log(`Sunucu ${port} nda başlatıldı `)
})