const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Security Project Running!');
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
