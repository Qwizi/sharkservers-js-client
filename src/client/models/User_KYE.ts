/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Ban_WQW } from './Ban_WQW';
import type { Player_UPV } from './Player_UPV';

export type User_KYE = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    username: string;
    email: string;
    password: string;
    is_activated?: boolean;
    is_superuser?: boolean;
    avatar?: string;
    last_login?: string;
    last_online?: string;
    secret_salt: string;
    banned_user?: Array<Ban_WQW>;
    banned_by?: Array<Ban_WQW>;
    players?: Array<Player_UPV>;
};

