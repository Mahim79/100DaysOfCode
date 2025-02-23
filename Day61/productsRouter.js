const express = require("express")
const {products} = require("./Model/productsModel")
const productsRouter = express.Router()
const mongoDB = require("./database")

productsRouter.get("/",async (req,res)=>{

    const result = await products.find()
    if(!result) return res.status(404).send("Products Not Found")

    res.send(result)

})

productsRouter.get("/:id",async(req,res)=>{
    const {id} = req.params
    try{
        const result = await products.findById(id)
        if(!result) return res.send({message:"Not-Found"})
        res.send(result)
    }catch(err){
        res.send(err)
    }
})

productsRouter.post("/",async (req,res)=>{

   try{
    const result = await products.create(req.body)
    res.status(201).send({message:"Created successfully",data:result})
   }catch(err){
    res.status(400).send(err)
   }
})

productsRouter.delete("/:id",async (req,res)=>{
    const {id} = req.params
    try{
        const result = await products.findByIdAndDelete(id)
        if(!result) return res.status(400).send("Bad Request")
        res.send({message:"Deleted successfully",data:result})
    }catch(err){
        res.send(err)
    }
})

productsRouter.patch("/:id",async(req,res)=>{
    const {id} = req.params
 
    try{
        const result = await products.findByIdAndUpdate(id,req.body)
        if(!result) return res.send({message:"Not found"})
        res.send({message:"Updated Successfully",data:result})
    }catch(err){
        res.send(err)
    }
})

module.exports = productsRouter