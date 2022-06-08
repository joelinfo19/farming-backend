
const express=require('express');
const cors=require('cors');

const app=express();
app.use(cors())

app.listen(process.env.PORT,()=>{
    console.log('Server run' + process.env.PORT);
})

console.log("holaaaaaaaaasss");