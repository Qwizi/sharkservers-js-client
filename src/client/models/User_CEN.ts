/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Ban_LNO } from './Ban_LNO';
import type { Player_BJI } from './Player_BJI';
import type { Role_RKG } from './Role_RKG';

export type User_CEN = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    username: string;
    email: string;
    password: string;
    is_activated?: boolean;
    is_superuser?: boolean;
    avatar?: string;
    roles?: Array<Role_RKG>;
    display_role?: Role_RKG;
    last_login?: string;
    last_online?: string;
    secret_salt: string;
    banned_user?: Array<Ban_LNO>;
    banned_by?: Array<Ban_LNO>;
    players?: Array<Player_BJI>;
};

