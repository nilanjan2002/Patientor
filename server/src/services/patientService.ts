import { NonSensitivePatientEntry, PatientEntry } from "../types";
import patientData from "../../data/patients";

const entries:PatientEntry[] = patientData;

const getEntries = ()=> {
    return entries;
}
const getNonSensitiveEntries = ():NonSensitivePatientEntry[] => {
    return entries.map(({id, name, dateOfBirth, gender, occupation })=>(
        {
            id,
            name, 
            dateOfBirth,
            gender,
            occupation
        }
    ));
}

const findById = (id:number): PatientEntry | undefined =>{
    const entry = entries.find(p=> p.id === id );
    return entry;
}

export default {
    getEntries,
    getNonSensitiveEntries,
    findById
}
