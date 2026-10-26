import express, { Express } from "express";
import dotenv from "dotenv";
import moment from "moment";

import clientRoutes from "./routes/client/index.route";

dotenv.config();

import bodyParser  from "body-parser";

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

app.use(express.static("public"));



//app.set("views", "./views");
app.set("views", "./views");
app.set("view engine", "pug");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// App Local Variables
app.locals.moment = moment;


// Client Routes
clientRoutes(app);

app.listen(port, () => {
  console.log(`App listeining on port ${port}`);
}); 