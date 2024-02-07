const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
/////////////////////////////////////////
const projectRoute = require("./routes/projects");
const listRoute = require("./routes/lists");
const emailRoute = require("./routes/emails");
const bookRoute = require("./routes/books");
const quoteRoute = require("./routes/quotes");
const cors = require("cors"); // Import the cors middleware




dotenv.config();

/// la conexion de mongoss avec espress
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("DB Connection Successfull")).catch((err) => console.log(err))


const corsOptions = {
  origin: ["https://hamza-bouyoussef.netlify.app", "http://localhost:3000" , "https://hamzabouyoussef.tech.app" ],

  optionsSuccessStatus: 200,
};

// Use cors middleware
app.use(cors(corsOptions))

// le run du serveur au niveau du port 8080
app.listen(process.env.PORT || 8080, () => {
  console.log("backend is running")
})

app.use(express.json()); /// pour le envoi
app.use("/api/projects", projectRoute)
app.use("/api/lists", listRoute)
app.use("/api/emails", emailRoute);
app.use("/api/books", bookRoute);
app.use("/api/quotes", quoteRoute);