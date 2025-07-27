const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public')); // index.html, data.json 서빙

app.listen(PORT, () => {
  console.log(`🌐 서버 실행 중: http://localhost:${PORT}`);
});
