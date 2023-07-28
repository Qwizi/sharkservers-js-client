/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User_QMC } from './User_QMC';

export type App_OUB = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    name: string;
    description: string;
    owner?: User_QMC;
    is_activated?: boolean;
    client_id?: string;
    client_secret?: string;
    secret_key?: string;
};

