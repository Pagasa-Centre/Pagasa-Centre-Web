export interface OutreachResponse {
    message: string;
    outreaches: Outreach[];
}

export interface Outreach {
    id: string;
    name: string;
    address_line_1: string;
    address_line_2: string;
    postcode: string;
    city: string;
    country: string;
    venue_name: string;
    region: string;
    thumbnail_url: string;
    services?:Services[]
}

interface Services{
    start_time:string;
    end_time:string;
    day:string;
}

