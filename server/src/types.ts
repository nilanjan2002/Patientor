export type Weather = 'sunny' | 'windy' | 'cloudy' | 'windy' | 'stormy' | 'rainy';
export type Visibility = 'great' | 'good' | 'ok' | 'poor';

export interface DiaryEntry{
    date:string;
    id:number;
    weather: Weather;
    visibility: Visibility;
    comment?: string;
}

