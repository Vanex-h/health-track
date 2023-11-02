export interface IUser {
    id: number;
    name: string;
    national_id: string;
    frequent_sickness: string;
}

export type ChartData = {
    body_temperature: number,
    heart_rate: number,
    id: number,
    patient_id: number,
    deduction: string,
    name: string,
    national_id: number,
    date: number
}