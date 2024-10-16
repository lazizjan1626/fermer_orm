export class CreateWorkerDto {
    name: string;
    age: number;
    experience: string;
    speciality_id?: number;
    phone_number: string;
    worker_schedule?: string;
    hashed_token?: string;
    role_id?: string;
}
