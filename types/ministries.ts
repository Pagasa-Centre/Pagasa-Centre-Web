export interface Ministry {
    id: string;
    outreach_id: string;
    name: string;
    description: string;
    day: string;
    start_time?: string;
    end_time?: string;
    meeting_location?: string;
}

export interface GetAllMinistriesResponse {
    ministries?: Ministry[];
    message: string;
}

export interface MinistryApplicationResponse {
    message: string;
}