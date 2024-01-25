
export interface DiaryEntry{
    date:string;
    id:number;
    weather: Weather;
    visibility: Visibility;
    comment?: string;
}

export interface DiagEntry{
    code: string;
    name: string;
    latin?: string;
}

export interface PatientEntry {
    id: number;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: string;
    occupation: string;
}

export enum Weather {
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Stormy = 'stormy',
    Windy = 'windy',
}

export enum Visibility{
    Great = 'great',
    Good = 'good',
    Ok = 'ok',
    Poor = 'poor',
}


export type NonSensitivePatientEntry = Omit<PatientEntry, 'ssn'>;

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;
