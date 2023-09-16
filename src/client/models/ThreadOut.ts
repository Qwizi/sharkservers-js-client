/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Category_GMP } from './Category_GMP';
import type { Server_UNO } from './Server_UNO';
import type { ThreadMeta_EPL } from './ThreadMeta_EPL';
import type { User_FYV } from './User_FYV';

export type ThreadOut = {
    created_at?: string;
    updated_at?: string;
    id?: number;
    title: string;
    content: string;
    is_closed?: boolean;
    is_pinned?: boolean;
    status?: string;
    category?: Category_GMP;
    author?: User_FYV;
    meta_fields?: Array<ThreadMeta_EPL>;
    post_count?: number;
    server?: Server_UNO;
};

