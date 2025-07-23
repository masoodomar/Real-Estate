import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", test); // Define a route for testing

    export default router;
    