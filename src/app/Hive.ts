export class Hive
{
    temperature:number;
    hatchOpen: boolean;
    vibration: number;
    soundActivity: number;
    dateTime: Date;

    constructor(temperature:number, hatchOpen:boolean,vibration: number
        ,soundActivity: number,dateTime: Date)
    {
        this.temperature=temperature;
        this.hatchOpen=hatchOpen;
        this.vibration=vibration;
        this.soundActivity=soundActivity;
        this.dateTime=dateTime;
    }
}