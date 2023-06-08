import "reflect-metadata";

import dotenv from "dotenv";

import "./config/database/typeorm";
import "./config/container/tsyringe";

import express from "express";

import { router } from "@/shared/api/routes";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", router);

export default app;
