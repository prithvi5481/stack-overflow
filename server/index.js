import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'

const app = express();
dotenv.config();
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors(
    {
        origin:['https://deploy'],
        methods:["POST","GET"],
        credentials:true,
    }
));

app.get('/',(req,res)=>{
    res.send('This is a stack overflow clone API');
})

app.use('/user',userRoutes)
app.use('/questions',questionRoutes)
app.use('/answer', answerRoutes);

const PORT = process.env.PORT || 5000;

const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect('mongodb+srv://prithvisingh91827:prithvi91827@cluster0.ep7cwjc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=> app.listen(PORT,()=>{console.log(`server is listening on port ${PORT}`)}))
    .catch((err)=> console.log('unable to connect to mongodb atlas database'));