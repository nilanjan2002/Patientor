import { NewDiaryEntry, Visibility, Weather } from "../src/types";


export const toNewDiaryEntry = (object:unknown): NewDiaryEntry => {
    if(!object || typeof object !== 'object'){
        throw new Error('Incorrect or missing data');
    }
    if('date' in object && 'weather' in object && 'visibility' in object){
        const newEntry: NewDiaryEntry = {
            date: parseDate(object.date),
            weather: parseWeather(object.weather),
            visibility: parseVisibility(object.visibility),
            comment: ""
        }
        if('comment' in object ){
            newEntry.comment=parseComment(object.comment)
        }
        return newEntry;
    }
    console.log('fallthrough')
    throw new Error('Incorrect or missing data');    
}

export const parseComment = (comment:unknown):string =>{
    if(!isString(comment)){
        throw new Error('Incorrect or missing comment');
    }
    return comment;
}

export const parseDate = (date: unknown) =>{
    if(!isString(date) || !isDate(date)){
        console.log('date incorrect')
        throw new Error('Date is incorrrect or missing')
    }
    return date;
}

const isDate = (str:string):boolean =>{
    return Boolean(Date.parse(str))
}

const isString = (text:unknown):text is string => {
    return text instanceof String || typeof text === 'string';
}

export const parseWeather = (weather: unknown): Weather => {
    if (!isString(weather) || !isWeather(weather)) {
        console.log('weather incorrect')
        throw new Error('Incorrect or missing weather: ' + weather);
    }
    return weather;
  };

const isWeather = (param: string): param is Weather => {
    return Object.values(Weather).map(v => v.toString()).includes(param);
};

const parseVisibility = (visibility: unknown):Visibility =>{
    if(!isString(visibility) || !isVisibility(visibility)){
        console.log('weather incorrect')
        throw new Error('Incorrect or missing visibility: '+ visibility);
    }
    return visibility;
}

const isVisibility = (param:string): param is Visibility =>{
    return Object.values(Visibility).map(vi => vi.toString()).includes(param);
}
