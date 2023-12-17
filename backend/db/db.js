const { default: mongoose } = require("mongoose");


const MONOGDB = process.env.MONGODB

mongoose.connect(MONOGDB).then(() => {
    console.log(`DB COnnected Successfully At ${MONOGDB}`)
}).catch((error)=>{
    console.log(`DB COnnection Failed Due To  ${error}`) 
});