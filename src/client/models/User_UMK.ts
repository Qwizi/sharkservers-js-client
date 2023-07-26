/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { App_KTG } from './App_KTG';
import type { Ban_LNO } from './Ban_LNO';
import type { Player_BJI } from './Player_BJI';
import type { Role_MXV } from './Role_MXV';

export type User_UMK = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    username: string;
    is_activated?: boolean;
    is_superuser?: boolean;
    avatar?: string;
    display_role?: Role_MXV;
    last_login?: string;
    last_online?: string;
    banned_user?: Array<Ban_LNO>;
    banned_by?: Array<Ban_LNO>;
    apps?: Array<App_KTG>;
    players?: Array<Player_BJI>;
};

