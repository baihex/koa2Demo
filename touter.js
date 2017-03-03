const Koa = require('koa') // koa 2.x 
const router = require('koa-simple-router')

let app = new Koa()

app.use(router(_ => {
    _.get('/', (ctx, next) => {
    ctx.body = 'hello'
})
_.get('/name', (ctx, next) => {

    ctx.body = {
        name:'hello'
}
})
})