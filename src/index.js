const host = process.env.HOST || "localhost";
const port = process.env.PORT ? +process.env.PORT : 8080;

require("cors-anywhere")
  .createServer({
    originWhitelist: [], // Allow all origins
  })
  .listen(port, host, () => {
    console.log(`Running CORS Anywhere on ${host}:${port}`);
  });
