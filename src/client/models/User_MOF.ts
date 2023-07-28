/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Player_VIO } from './Player_VIO';
import type { Role_SHU } from './Role_SHU';

export type User_MOF = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    username: string;
    is_activated?: boolean;
    is_superuser?: boolean;
    avatar?: string;
    display_role?: Role_SHU;
    last_online?: string;
    players?: Array<Player_VIO>;
};

