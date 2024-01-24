import diagData from "../../data/diagnoses";
import { DiagEntry } from "../types";

const getAllDiagnoses = ():DiagEntry[]  =>{
   return diagData;
}


export default {
    getAllDiagnoses
}