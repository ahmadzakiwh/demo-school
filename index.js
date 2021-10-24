const express = require("express");
const app = express();
const port = 3000;
const pool = require("./config");

app.use(express.urlencoded({extended:false}))
app.use(express.json());

function createTeachers(body) {
    console.log(body)
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO "Teachers" (first_name, last_name, email, gender) VALUES ($1, $2, $3, $4);`;

        pool
            .query(query, Object.values(body))
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

app.post("/", (req, res) => {
    console.log(req.body)
    createTeachers(req.body)
    .then((data) => {
         res.send(data)
    })
    .catch((err) => {
        res.send(err)
    })
});

app.get("/", (req, res) => {
    res.send("Hello world from zaki")
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});