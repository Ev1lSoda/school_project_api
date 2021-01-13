import Server from "./server/server";
import Ok from "./routes/ok";
import Teachers from "./routes/teachers";
import SqlQueries from "./sql/sql-queries";

const app = new Server([
  {
    path: "/api/ok",
    cntr: new Ok(),
  },
  {
    path: "/api/teacher",
    cntr: new Teachers(),
  },
]);

app.listen();
