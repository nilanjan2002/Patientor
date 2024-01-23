import diaryData from "../../data/entries";
import {DiaryEntry, NonSensitiveDiaryEntry} from "../types"


const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

const getEntries = ():DiaryEntry[] =>{
    return diaries;
}
const getNonSensitiveEntries = ():NonSensitiveDiaryEntry =>{
  return diaryData.map(({id, weather, date, visibility})=>(
     {
        id,
        date,
        weather,
        visibility
    }
  ))
}

const addDiary = ()=>{
 return  null;
}

export default {
    getEntries,
    addDiary,
    getNonSensitiveEntries
}