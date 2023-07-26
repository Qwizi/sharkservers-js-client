/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Like_RRK } from './Like_RRK';
import type { User_KYE } from './User_KYE';

export type Post_GBY = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    author?: User_KYE;
    content: string;
    likes?: Array<Like_RRK>;
};

