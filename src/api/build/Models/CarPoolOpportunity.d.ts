import Model from "./Model";
export interface Point {
    x: number;
    y: number;
}
export interface ICarPoolOpportunity {
    id: string;
    departure_time: string;
    expected_arrival_time: string;
    origin: string;
    days_available: string;
    destination: string;
    available_seats: number;
    owner: string;
    notes?: string;
    date_created?: Date;
}
export interface IJoinedCarPoolOpportunity {
    users_id: string;
    car_pool_opportunity_id: string;
    on_which_days: string;
    date_joined: Date;
}
export default class CarPoolOpportunities extends Model<ICarPoolOpportunity> {
    static TABLE_NAME: string;
    constructor(src: ICarPoolOpportunity);
    static Create(src: Omit<ICarPoolOpportunity, "id" | "owner" | "date_created">, owner: string): Promise<ICarPoolOpportunity>;
    static hasOverlappingCPOs(departure_time: string, expected_arrival_time: string, days: string[], owner: string): Promise<boolean>;
    static hasOverlayingCreatedCPOs(departure_time: string, expected_arrival_time: string, days: string[], owner: string): Promise<boolean>;
    static hasOverlappingDays(days0: string[], days1: string[]): boolean;
    static hasOverlayingJoinedCPOs(departure_time: string, expected_arrival_time: string, days: string[], user: string): Promise<boolean>;
    static createIsOverlayingCondition(): string;
}
//# sourceMappingURL=CarPoolOpportunity.d.ts.map