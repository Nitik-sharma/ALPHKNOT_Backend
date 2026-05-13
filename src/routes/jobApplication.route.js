import express from "express";

import { createJobApplication } from "../controllers/jobApplication.controller.js";

import upload from "../middleware/uploadResume.js";

const router = express.Router();

router.post(
  "/",

  (req, res, next) => {

    upload.single("resume")(req, res, function (err) {

      if (err) {
        console.log("UPLOAD ERROR:", err);

        return res.status(500).json({
          error: err.message || err,
        });
      }

      next();
    });
  },

  createJobApplication
);

export default router;