const express = require('express')
const multer = require('multer')
const cors = require('cors')
const app = express()
const port = 3030

app.use(cors())
const  upload = multer()


app.post('/api/number', upload.none(),  (req, res)=>{
    const number = req.body.number
    try{
        res.status(400).json({
            status: 'success',
            error: false,
            message: "Passing number successfully",
            data: number
        })
    }catch(e){
        console.log(e)
        res.status(401).json({
            status: "error",
            error: true,
            message: "Parsing number failed"
        })
    }
    
})

app.listen(port, ()=>{
    console.log("http://localhost:3030")
})