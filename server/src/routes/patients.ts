import express from "express";
import patientService from "../services/patientService";


const router = express.Router();

router.get('/',(_req,res)=>{
    res.send(patientService.getNonSensitiveEntries());
});

router.get('/:id', (req,res)=>{
    const patient = patientService.findById(Number(req.params.id));
    if(patient){
        res.send(patient);
    }else{
        res.status(404);
    }
})

router.post('/', (req,res)=>{
    
})

export default router;