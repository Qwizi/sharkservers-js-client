/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Category_YET } from './Category_YET';
import type { ThreadMeta_TLB } from './ThreadMeta_TLB';
import type { User_RGC } from './User_RGC';

export type ThreadOut = {
    created_at?: string;
    updated_at?: string;
    id?: number;
    title: string;
    content: string;
    is_closed?: boolean;
    is_pinned?: boolean;
    status?: string;
    category?: Category_YET;
    author?: User_RGC;
    meta_fields?: Array<ThreadMeta_TLB>;
    post_count?: number;
};

