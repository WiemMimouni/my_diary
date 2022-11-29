const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://root:Allahallah@cluster0.wuseb7o.mongodb.net/diary", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("database connected"))
  .catch((err) => console.log(err));
  
  

let postSchema = mongoose.Schema({
    username:{type:String,require:true},
    date:{type:String},
    
    
    content:{type:String,require :true,},
    
    

});

let save = (repo) => {
  Repo.create(repo).then(
    console.log(repo,'created')
  ).catch(err=>console.log(err))
  
};

let post = mongoose.model("posts", postSchema);

module.exports = {post};
