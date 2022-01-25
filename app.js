const express = require("express");
const users = require("./database/users.json");
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Menggunakan EJS
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/gameplay", (req, res) => {
    res.render("gameplay");
});

app.get("/users", (req, res) => {
    console.log(users);
    res.status(200).json(users);
});

app.get("/loginpage", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", (req, res) => {
    const { email, password } = req.body;
    const newUser = {
        email,
        password,
    };

    users.push(newUser);
    res.status(201).redirect("/loginpage");
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    for (user of users) {
        if (user.email === email && user.password === password) {
            return res.redirect("/gameplay");
        }
    }
    res.status(400).json({
        message: "E-Mail dan Password yang Anda Masukkan Salah",
    });
});

app.listen(port, () => {
    console.log(`Berjalan di Port : ${port}`);
});