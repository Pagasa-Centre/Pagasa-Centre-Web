export interface Ministry {
    id: string;
    outreach_id: string;
    name: string;
    short_description: string;
    long_description:string;
    thumbnail_url:string;
    day: string;
    start_time?: string;
    end_time?: string;
    meeting_location?: string;
    ministry_leaders?:string[];
    activities: string[];
}

export interface GetAllMinistriesResponse {
    ministries?: Ministry[];
    message: string;
}

export interface MinistryApplicationResponse {
    message: string;
}