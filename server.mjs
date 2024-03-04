import express from "express";
const app = express();
app.use(express.json());

app.post('/check', (req, res) => {
    console.log('its working');
    // Save formData to the database
    res.sendStatus(200);
  });

app.post('/form-data', (req, res) => {
  const formData = req.body.formData;
  console.log(formData);
  // Save formData to the database
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Server running on port 3000'));