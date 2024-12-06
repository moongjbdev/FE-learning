const express = require('express');
const path = require('path');

const app = express();

// Thiết lập pug làm template engine
app.set('view engine', 'pug');
// Cấu hình đường dẫn tới file pug (cùng cấp app.js)
app.set('views', path.join(__dirname)); // Thư mục hiện tại

// Route test
app.get('/', (req, res) => {
    res.render('index', { title: 'Hello', message: 'Welcome to Pug!' });
});

// Khởi động server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
