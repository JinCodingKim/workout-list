const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT | 3001;
const app = express();
const ec = require("./controllers/exercises_controller");
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../public/`));

app.get("/api/exercises", ec.getExercises);
app.post("/api/exercises", ec.addExercises);
app.put("/api/exercises/:id", ec.updateExercises);
app.delete("/api/exercises/:id", ec.removeExercises);

app.listen(process.env.PORT || port, () => {
  console.log(`Server is listening on port: ${port}`);
});