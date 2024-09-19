const express = require("express");
const manyToManyRoutes = require("./routes/many-to-manyRoutes"); // Adjust the path as needed
const app = express();

app.use(express.json());

app.use("/api", manyToManyRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
