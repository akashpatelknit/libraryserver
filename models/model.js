const mongoose=require('mongoose')

const paper=mongoose.Schema({
  year:{
  type:String,
  require:true
  },
  branch:{
  type:String,
  require:true
  },
  semester:{
  type:String,
  require:true
  },
  subject:{
  type:String,
  require:true
  },
  session:{
  type:String,
  require:true
  },
  url:{
  type:String,
  require:true
  },
  type:{
  type:String,
  required:true
  }

})


module.exports=mongoose.model('Book',paper);