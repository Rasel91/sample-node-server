const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Simple Node Server is Running');
});


// psssword:TXBOQNMVtOzNAkLE user:simple-database
app.use(cors());

app.use(express.json());

const users = [
    { id: 1, name: 'Rasel', email: 'rr@gmail.com' },
    { id: 2, name: 'Uasel', email: 'uu@gmail.com' },
    { id: 3, name: 'Wasel', email: 'ww@gmail.com' },
    { id: 4, name: 'Masel', email: 'mm@gmail.com' },
];



const uri = "mongodb+srv://simple-database:TXBOQNMVtOzNAkLE@cluster0.phsffqx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run (){
try{
    const userCollection = client.db('simpleNode').collection('user');
    const user = { name:'Rohi', email:'rohi@gmail.com' }
    // const  result = await userCollection.insertOne(user)
    // console.log(result);

    app.post('/users', async(req, res) => {
        const user = req.body;
        const result = await userCollection.insertOne(user)
        console.log(result);
        user.id = result.insertedId;
        // users.push (user);
        // console.log(user);
        res.send(user);
    })


}
finally{

}




}
run().catch(console.dir)



app.get('/users', (req, res) => {
    res.send(users);
})




app.listen(port, () => {
    console.log(`Simple node Server running on port ${port}`);
});