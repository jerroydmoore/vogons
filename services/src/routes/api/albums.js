const Router = require("koa-router");

const router = new Router({ prefix: "/albums" });

router.get("/", (ctx) => {
  const { response } = ctx;

  response.set({
    "Content-Type": "application/json",
  });
  response.status = 200;
  response.body = JSON.stringify([{
    id: 1,
    name: "Japan Trip",
  }, {
    id: 2,
    name: "South African Trip",
  }]);
});

// router.post("/", (ctx, next) => {
//   //
// });

module.exports = router;
