export interface GetAllPendingApprovalsResponse {
    message:string;
    approvals?: Approval[]
}

export interface UserDetails {
    first_name: string;
    last_name: string;
    email: string;
    birthday: string;
    phone_number: string;
    cell_leader_id?: string;
    outreach_id: string;
    roles: string[];
}

export interface Approval {
    id: string;
    type: string;
    requested_role: string;
    reason?:string;
    status: string;
    requester_details: UserDetails;
}
