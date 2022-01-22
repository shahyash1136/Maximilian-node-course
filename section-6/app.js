const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const app = express();

//for Pug
/* app.set("view engine", "pug"); */

//For Handlerbars
/* app.engine(
  "hbs",
  expressHbs({ layoutDir: "views/layouts/", defaultLayout: "main-layout" })
);
app.set("view engine", "hbs"); */

//For EJS
app.set("view engine", "ejs");

app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { docTitle: "404 Page Not Found" });
});

app.listen(3000);
