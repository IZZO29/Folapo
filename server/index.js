const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db")
const cors = require('cors')
const path = require('path')
app.use(cors(
  {
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
  }
))

mongoose.connect('mongodb://Folapo:Novasquad29@ac-qbujkez-shard-00-00.ir2w7k0.mongodb.net:27017,ac-qbujkez-shard-00-01.ir2w7k0.mongodb.net:27017,ac-qbujkez-shard-00-02.ir2w7k0.mongodb.net:27017/Folapo?ssl=true&replicaSet=atlas-lznhwz-shard-0&authSource=admin&retryWrites=true&w=majority')


app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

mongoDB;
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//static
app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', function(req,res){
  res.sendFile(path.join(__dirname, "./client/build"))
})
