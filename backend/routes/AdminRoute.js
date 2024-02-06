import express from "express"
import { getUsers, getUsersById } from "../controllers/AdminController.js"

const router = express.Router();
router.get('/', getUsers)
// router.get('/home/admin/:email', getUsersById)

export default router