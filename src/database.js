import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/companydb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(db => console.log("Db is connetted"))
    .catch(error => console.log(error))