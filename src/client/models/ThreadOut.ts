/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Category_NDC } from './Category_NDC';
import type { Server_ACD } from './Server_ACD';
import type { ThreadMeta_OUI } from './ThreadMeta_OUI';
import type { User_UPR } from './User_UPR';

export type ThreadOut = {
    created_at?: string;
    updated_at?: string;
    id?: number;
    title: string;
    content: string;
    is_closed?: boolean;
    is_pinned?: boolean;
    status?: string;
    category?: Category_NDC;
    author?: User_UPR;
    meta_fields?: Array<ThreadMeta_OUI>;
    post_count?: number;
    server?: Server_ACD;
};

