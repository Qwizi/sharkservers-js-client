/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Category_ZYX } from './Category_ZYX';
import type { Post_YZH } from './Post_YZH';
import type { Server_LAU } from './Server_LAU';
import type { Tag_OFP } from './Tag_OFP';
import type { User_UMK } from './User_UMK';

export type Thread_SNI = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    title: string;
    content: string;
    is_closed?: boolean;
    status?: string;
    category?: Category_ZYX;
    author?: User_UMK;
    posts?: Array<Post_YZH>;
    tags?: Array<Tag_OFP>;
    server?: Server_LAU;
};

