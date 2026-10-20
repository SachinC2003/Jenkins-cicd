const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "DevOps Jenkins API is running"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy"
  });
});

app.get("/version", (req, res) => {
  res.status(200).json({
    version: "1.0.0"
  });
});

app.get("/info", (req, res) => {
  res.status(200).json({
    name: "DevOps Jenkins API",
    description: "A simple API for DevOps and Jenkins integration", 
  });
});

module.exports = app;