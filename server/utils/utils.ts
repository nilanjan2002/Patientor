import { NewDiaryEntry, Weather } from "../src/types";


export const toNewDiaryEntry = (object:unknown): NewDiaryEntry => {
    const newEntry: NewDiaryEntry = {
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        comment: parseComment(object.comment)
    }
    return newEntry;
}

export const parseComment = (comment:string):string =>{
    if(!comment || !isString){
        throw new Error('Incorrect or missing comment');
    }
    return comment;
}

export const parseDate = (date: string) =>{
    if(!date || !isString(date)){
        throw new Error('Date is incorrrect or missing')
    }
    return date;
}

const isString = (text:unknown):text is string => {
    return text instanceof String || typeof text === 'string';
}

export const parseWeather = (weather: unknown): Weather => {
    if (!weather || !isString(weather) || !isWeather(weather)) {
        throw new Error('Incorrect or missing weather: ' + weather);
    }
    return weather;
  };

const isWeather = (param: string): param is Weather => {
    return Object.values(Weather).map(v => v.toString()).includes(param);
};
