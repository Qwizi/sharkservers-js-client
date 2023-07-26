/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Player_BJI } from './Player_BJI';
import type { Role_RKG } from './Role_RKG';

export type User_GTO = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    username: string;
    is_activated?: boolean;
    is_superuser?: boolean;
    avatar?: string;
    display_role?: Role_RKG;
    last_online?: string;
    players?: Array<Player_BJI>;
};

