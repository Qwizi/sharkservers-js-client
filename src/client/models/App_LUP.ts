/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User_YNQ } from './User_YNQ';

export type App_LUP = {
    created_at?: string;
    updated_at?: string;
    id?: number;
    name: string;
    description: string;
    owner?: User_YNQ;
    is_activated?: boolean;
    client_id?: string;
    client_secret?: string;
    secret_key?: string;
};

