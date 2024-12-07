// const http = require('http');

// const server = http.createServer((req, res) => {

//     const { url } = req;
//     console.log(url);
//     if(url === '/') {
//     res.end('Hello FWorld');
//     } else if (url === '/contact') {
//     res.end('The Contact Page');
//     } else if (url === '/about') {
//     res.end('The About Page');
//     } else {
//     res.writeHead(404)
//     res.end('Not Found');
//     }
// });

// server.listen(3000, () => {
// console.log('Server running on port 3000');
// });

//MongoDB password: vK8Bi5wzQn52ME3k

const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));
app.use(express.static('src'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { message: 'Hello From Node.js' });
});
app.get('/contact', (req, res) => {
    res.render('index', { message: 'The Contact Page' });
});
app.get('/about', (req, res) => {
    res.render('index', { message: 'The About Page' });
});
app.get('*', (req, res) => {
    res.status(404).render('index', { message: 'Not Found' });
});




const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});