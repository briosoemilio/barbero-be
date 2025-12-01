import {setGlobalOptions} from "firebase-functions";
import {onRequest} from "firebase-functions/https";
import * as logger from "firebase-functions/logger";
import express from "express";
import cors from "cors";

setGlobalOptions({maxInstances: 10});

// initialize app
const app = express();

// enable cors
app.use(cors({origin: true}));
app.use(express.json());

// routes
app.get("/hello", (_, res) => {
  logger.info("Hello logs!", {structuredData: true});
  res.send("Hello barbero app");
});

exports.api = onRequest(app);
