/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Post_GBY } from './Post_GBY';
import type { Server_SHR } from './Server_SHR';
import type { Tag_DYQ } from './Tag_DYQ';
import type { User_KYE } from './User_KYE';

export type Thread_NEY = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    title: string;
    content: string;
    is_closed?: boolean;
    status?: string;
    author?: User_KYE;
    posts?: Array<Post_GBY>;
    tags?: Array<Tag_DYQ>;
    server?: Server_SHR;
};

