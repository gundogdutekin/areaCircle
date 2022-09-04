import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.status(200).send('INDEX SAYFASI')
})
app.get('/about', (req, res) => {
    res.status(200).send('ABOUT SAYFASI')
})
app.get('/contact', (req, res) => {
    res.status(200).send('CONTACT SAYFASI')
})
app.get('/category', (req, res) => {
    res.status(200).send('CATEGORY SAYFASI')
})
app.get('*', (req, res) => {
    res.status(404).send('404 ! ARADIĞINIZ SAYFA BULUNAMADI')
})

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda çalıştırıldı.`)
})