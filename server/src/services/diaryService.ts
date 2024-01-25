import diaryData from "../../data/entries";
import {DiaryEntry, NewDiaryEntry, NonSensitiveDiaryEntry} from "../types"


const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

const getEntries = ():DiaryEntry[] =>{
    return diaries;
}
const getNonSensitiveEntries = ():NonSensitiveDiaryEntry[] =>{
  return diaryData.map(({id, weather, date, visibility})=>(
     {
        id,
        date,
        weather,
        visibility
    }
  ))
}

const addDiary = (newEntry:NewDiaryEntry ):NewDiaryEntry =>{
  const newDiary = {
    id: Math.max(...diaries.map( d => d.id ))+1,
  ...newEntry
  }
  diaries.push(newDiary);
  return newDiary;
}

export default {
    getEntries,
    addDiary,
    getNonSensitiveEntries
}