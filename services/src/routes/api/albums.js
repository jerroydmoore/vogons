const Router = require("koa-router");

const router = new Router({ prefix: "/api/v1/albums" });

router.get("/", (ctx) => {
  console.log('GET ALBUM');
  const { response } = ctx;

  response.set({
    "Content-Type": "application/json",
  });
  response.status = 200;
  response.body = JSON.stringify([{
    id: 1,
    name: "Japan Trip",
    description: "2006 High School Japan Trip",
  }, {
    id: 2,
    name: "South African Trip",
    description: "First trip to Africa in 2016",
  }, {
    id: 3,
    name: "South African Trip",
  }, {
    id: 4,
    name: "South African Trip",
  }, {
    id: 5,
    name: "South African Trip",
  }, {
    id: 6,
    name: "South African Trip",
  }, {
    id: 7,
    name: "South African Trip",
  }, {
    id: 8,
    name: "South African Trip",
  }, {
    id: 9,
    name: "South African Trip",
  }]);
});


// router.post("/", (ctx, next) => {
//   //
// });

module.exports = router;
