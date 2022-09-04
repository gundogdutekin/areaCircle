const Koa = require('koa')
const Router = require('@koa/router')
const app = new Koa()
const router = new Router()

router.get('/', (ctx, next) => {
    ctx.body = '<h1>INDEX SAYFASINA HOŞGELDİNİZ</h1>'
})
router.get('/iletisim', (ctx, next) => {
    ctx.body = '<h1>ILETISIM SAYFASINA HOŞGELDİNİZ</h1>'
})
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)