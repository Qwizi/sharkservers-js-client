/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Player_AHX } from './Player_AHX';
import type { Role_WAF } from './Role_WAF';

export type User_HTP = {
    created_at?: string;
    updated_at?: string;
    id?: number;
    username: string;
    is_activated?: boolean;
    is_superuser?: boolean;
    avatar?: string;
    display_role?: Role_WAF;
    last_online?: string;
    players?: Array<Player_AHX>;
};

