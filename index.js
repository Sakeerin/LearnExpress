import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact</h1>");
});

app.post("/register", (req, res) => {
    res.sendStatus(201);
});

app.put("/user/update", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/update", (req, res) => {
    res.sendStatus(200);
});

app.delete("/delete", (req, res) => {
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});