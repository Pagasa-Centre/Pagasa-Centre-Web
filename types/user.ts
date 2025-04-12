export interface UserDetails {
    first_name?: string;
    last_name?: string;
    email?: string;
    birthday?: string;
    phone_number?: string;
    cell_leader_id?: string | null;
    outreach_id?: string;
}

export interface RegisterResponse {
    token?: string;
    user?: UserDetails;
    message: string;
}

export interface LoginResponse {
    message: string;
    token?: string;
    user?: UserDetails;
}

export interface UpdateUserDetailsResponse {
    message: string;
    user?: UserDetails;
}

export interface DeleteUserResponse {
    message: string;
}