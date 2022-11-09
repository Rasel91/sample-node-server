const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Simple Node Server is Running');
});



app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: 'Rasel', email: 'rr@gmail.com' },
    { id: 2, name: 'Uasel', email: 'uu@gmail.com' },
    { id: 3, name: 'Wasel', email: 'ww@gmail.com' },
    { id: 4, name: 'Masel', email: 'mm@gmail.com' },
];


app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/user', (req, res) => {
    console.log('Post API Called');
    console.log(req.body);
})
app.listen(port, () => {
    console.log(`Simple not Server running on port ${port}`);
});