/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Ban_XMV } from './Ban_XMV';
import type { Player_VIO } from './Player_VIO';
import type { Role_SHU } from './Role_SHU';

export type User_QMC = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    username: string;
    email: string;
    password: string;
    is_activated?: boolean;
    is_superuser?: boolean;
    avatar?: string;
    roles?: Array<Role_SHU>;
    display_role?: Role_SHU;
    last_login?: string;
    last_online?: string;
    secret_salt: string;
    banned_user?: Array<Ban_XMV>;
    banned_by?: Array<Ban_XMV>;
    players?: Array<Player_VIO>;
};

