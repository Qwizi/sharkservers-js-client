/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { App_OUB } from './App_OUB';
import type { Ban_XMV } from './Ban_XMV';
import type { Player_VIO } from './Player_VIO';
import type { Role_UFL } from './Role_UFL';

export type User_VIR = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    username: string;
    is_activated?: boolean;
    is_superuser?: boolean;
    avatar?: string;
    display_role?: Role_UFL;
    last_login?: string;
    last_online?: string;
    banned_user?: Array<Ban_XMV>;
    banned_by?: Array<Ban_XMV>;
    apps?: Array<App_OUB>;
    players?: Array<Player_VIO>;
};

