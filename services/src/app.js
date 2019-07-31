const Koa = require("koa");
const cors = require('koa2-cors');

const albums = require("./routes/api/albums");

const app = new Koa();

app.use(cors({
  origin: "*",
}));
app.use(albums.routes());

app.use(async (ctx) => {
  ctx.body = "Hello Vogons!";
});

const PORT = 3000;
app.listen(PORT);

console.log(`Server listening at port ${PORT}`);
