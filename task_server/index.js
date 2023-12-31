const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kaasp8g.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    const database = client.db('developerLook');
    const places = database.collection('touringPlaces');
    
    app.get("/places", async(req, res)=>{
        const result = await places.find().toArray();
        res.send(result);
    });
    
    app.get("/places/:category", async(req, res)=>{
        const category = req.params.category;
        const query = {category:category};
        const result = await places.find(query).toArray();
        res.send(result);
    })
    
    app.get("/filterPlaces", async(req, res)=>{
        const price = parseInt(req.query.price);
        if(!price){
          console.log("not set");
        }
        // const filter = 
        const result = await places.find({price:{$lte:price}}).toArray();
        console.log(result);
        res.send(result);
    })
    
    app.get("/price-range", async(req, res)=>{
        const minPrice = parseInt(req.query.minPrice);
        const maxPrice = parseInt(req.query.maxPrice);
        if(!minPrice || !maxPrice){
          console.log("not set");
        }
        const result = await places.find().toArray();
                
        res.send(result.filter(i => {
          return i.price>=minPrice && i.price<=maxPrice;
        }));
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/',(req, res)=>{
    res.send("Hello World");
})
app.listen(port, ()=>{
    console.log(`port running on ${port}`);
})