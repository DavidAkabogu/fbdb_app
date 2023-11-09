const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/User.js");
const Athlete = require("./models/Athelete.js");
const cookieParser = require("cookie-parser");
const imageDownloader = require("image-downloader");
const multer = require("multer");
const fs = require("fs");

require("dotenv").config();

const port = process.env.PORT || 3000
const app = express();
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "kadeco100%";

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads/"));
app.use(cors({ credentials: true, origin: "fbdb-app-akabogu-davids-projects.vercel.app" }));


// browser testing backend point
app.get("/test", (req, res) => {
  res.json("express. test ok!");
});

// register user endpoint
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

// login user endpoint
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email }).maxTimeMS(20000);

  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        { email: userDoc.email, id: userDoc._id },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(userDoc);
        }
      );
    } else {
      res.status(422).json("pass not ok");
    }
  } else {
    res.json("not found");
  }
});

// user profile endpoint
app.get(
  "/profile",
  (getUserProfile = async (req, res) => {
    try {
      const { token } = req.cookies;

      if (token) {
        const userData = await jwt.verify(token, jwtSecret);
        const user = await User.findById(userData.id);

        if (user) {
          const { name, email, _id } = user;
          return res.json({ name, email, _id });
        }
      }

      return res.json(null);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  })
);

// logout function
app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});

// upload by link
app.post("/upload-by-link", async (req, res) => {
  const { link } = req.body;
  const newName = "photo" + Date.now() + ".jpg";
  try {
    await imageDownloader.image({
      url: link,
      dest: __dirname + "/uploads/" + newName,
    });
    res.json(newName);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the request." });
  }
});

// upload from device
const photosMiddleware = multer({ dest: "uploads/" });
app.post("/upload", photosMiddleware.array("photos", 100), (req, res) => {
  const uploadedFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname } = req.files[i];
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);
    uploadedFiles.push(newPath.replace("uploads/", ""));
  }
  res.json(uploadedFiles);
});

// new athlete biodata
app.post("/biodata", (req, res) => {
  const { token } = req.cookies;
  const { addedPhoto, sport, school, name, age, weight, height, bio } =
    req.body;

  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const athleteDoc = await Athlete.create({
      athlete: userData.id,
      photo: addedPhoto,
      sport,
      school,
      name,
      age,
      weight,
      height,
      bio,
    });
    res.json(athleteDoc);
  });
});

// find athlete
app.get("/user-biodata", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    const { id } = userData;
    res.json(await Athlete.find({ athlete: id }));
  });
});

// find athlete by id
app.get("/biodata/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await Athlete.findById(id));
});

// update athlete data
app.put("/biodata", async (req, res) => {
  const { token } = req.cookies;
  const { id, addedPhoto, sport, school, name, age, weight, height, bio } =
    req.body;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const athleteDoc = await Athlete.findById(id);
    if (userData.id === athleteDoc.athlete.toString()) {
      athleteDoc.set({
        photo: addedPhoto,
        sport,
        school,
        name,
        age,
        weight,
        height,
        bio,
      });
      await athleteDoc.save();
      res.json("ok");
    }
  });
});

app.get('/biodata', async (req,res) => {
  res.json(await Athlete.find());
})

const bootstrap = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log("connected on port " + port);
})
}

bootstrap();