import express from "express";
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("pages/index", {
      symbols: ["TCS.NS", "WIPRO.NS", "RELIANCE.NS"],
      
    });
})

export default router;
