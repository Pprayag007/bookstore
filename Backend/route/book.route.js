import express from "express";
import { getBook } from "../controller/book.controller.js";
import Book from "../model/book.model.js";

const router = express.Router();

router.get("/", getBook);
router.post("/postbooks",(req,res)=>{
    const {name,
        price,
        category,
        image,
        title} = req.body;
    if(!req.body){
        return res.json({
            message:"all fields are necessary"
        })
    }
    else{
        const user = Book.create({name,
            price,
            category,
            image,
            title})
        return res.json({
            message:'sucess'
        })
    }
})

export default router;