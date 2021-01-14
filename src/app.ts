import Server from "./server/server";
import Ok from "./routes/ok";
import Teachers from "./routes/teachers";
import SqlQueries from "./sql/sql-queries";
import Teacher from "./interfaces/teacher";

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

const sqlQueries: SqlQueries = new SqlQueries();
sqlQueries.getTeacher({}).then((rez) => {
  console.log("getAllTeachers: ", rez);
});
sqlQueries.getTargetMathTeachers().then((rez) => {
  console.log("getTargetMathTeachers: ", rez);
});

app.listen();
