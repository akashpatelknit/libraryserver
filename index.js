const express=require('express')
const core=require('cors')
const app=express()
const Book=require('./models/model')
const bodyparser=require('body-parser')
app.use(core())
app.use(bodyparser.json());
const mongoose=require('mongoose')

const url='mongodb+srv://akash:Akash123@cluster0.jsxtowq.mongodb.net/express?retryWrites=true&w=majority'

mongoose.connect(url,).then(()=>{
console.log('connected to database')
}).catch((err)=>console.log(err))
 

 app.post('/add',async(req,res)=>{
      console.log(req.body.url)
      const data=new Book({
      year:req.body.year,
      branch:req.body.branchname,
      semester:req.body.semester,
      subject:req.body.subject,
      session:req.body.session,
      type:req.body.type,
      url:req.body.url
      })
      // console.log(data)
      try{
       const x=await data.save();
       console.log(x)
        res.json(x)
      }catch(err){
        console.log(err)
      }
      
 })

 app.get('/get',async(req,res)=>{
  let data= await Book.find({})
  data=data.filter(r=> (r.url!=undefined)&&(r.url.length>1))
  // console.log(data);
  
  res.json(data)
 
 })

  
app.listen(4000,()=>{
console.log('server started at 4000')
})