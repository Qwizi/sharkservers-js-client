/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Category_SCK } from './Category_SCK';
import type { Post_ATI } from './Post_ATI';
import type { ThreadMeta_CEX } from './ThreadMeta_CEX';
import type { User_GHG } from './User_GHG';

export type Thread_GAG = {
    created_at?: string;
    updated_at?: string;
    id?: number;
    title: string;
    content: string;
    is_closed?: boolean;
    is_pinned?: boolean;
    status?: string;
    category?: Category_SCK;
    author?: User_GHG;
    posts?: Array<Post_ATI>;
    meta_fields?: Array<ThreadMeta_CEX>;
    post_count?: number;
};

