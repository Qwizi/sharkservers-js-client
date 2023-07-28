/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Post_NWY } from './Post_NWY';
import type { Server_HWV } from './Server_HWV';
import type { Tag_FYX } from './Tag_FYX';
import type { User_GGL } from './User_GGL';

export type Thread_OIZ = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    title: string;
    content: string;
    is_closed?: boolean;
    status?: string;
    author?: User_GGL;
    posts?: Array<Post_NWY>;
    tags?: Array<Tag_FYX>;
    server?: Server_HWV;
};

