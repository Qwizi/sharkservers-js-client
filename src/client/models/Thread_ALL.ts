/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Category_VEW } from './Category_VEW';
import type { Post_UTH } from './Post_UTH';
import type { Server_SGQ } from './Server_SGQ';
import type { Tag_TLT } from './Tag_TLT';
import type { User_VIR } from './User_VIR';

export type Thread_ALL = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    title: string;
    content: string;
    is_closed?: boolean;
    status?: string;
    category?: Category_VEW;
    author?: User_VIR;
    posts?: Array<Post_UTH>;
    tags?: Array<Tag_TLT>;
    server?: Server_SGQ;
};

