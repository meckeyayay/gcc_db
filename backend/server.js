import express from "express"
import cors from "cors"
import AdminRoute from "./routes/AdminRoute.js"
import db from "./config/Database.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(AdminRoute)

app.listen(9573, ()=> {
    console.log("Connected to backend!")
})

app.get("/", (req, res) => {
    // res.json("Data")
    console.log("Connected to backend!")
})

app.get("/", (req, res) => {
    console.log("masuk")
    const qry = "SELECT * FROM Admin"
    db.query(qry, (err, data) => {
        if (err) {
            console.log(100)
            return err
        }
        else {
            res.json(data)
            console.log(200)
        }
    })
})

app.get("/home/admin", (req, res) => {
    console.log("masuk")
    const qry = "SELECT * FROM Admin"
    db.query(qry, (err, data) => {
        if (err) {
            console.log(100)
            return err
        }
        else {
            res.json(data)
            console.log(200)
        }
    })
})

