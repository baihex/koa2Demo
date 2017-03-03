// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

const app = new Koa();
const router = require('koa-simple-router')
const convert = require('koa-convert')
const path=require('path')
const render = require('koa-swig');
const serve = require('koa-static');
const co = require('co');
// 创建一个Koa对象表示web app本身:

// 对于任何请求，app将调用该异步函数处理请求：

app.context.render = co.wrap(render({
    root: path.join(__dirname, './views'),
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html'
}));


app.use(router(_ => {
    _.get('/', (ctx, next) => {
    ctx.body = 'hello'
})
    // app.use(async ctx => ctx.body = await ctx.render('index'));
_.get('/index', async (ctx, next) => {
    ctx.body = await ctx.render('index.html')

})
}))

app.use(convert(serve(path.join(__dirname,'./pub'))))
// 在端口3000监听:
app.listen(3000,()=>{
    console.log('app started at port 3000...')})