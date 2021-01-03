import Server from "./server/server";
import Ok from "./routes/ok"; // problem

const app = new Server([
  {
    path: "/api/ok",
    cntr: new Ok(),
  },
]);

app.listen();
