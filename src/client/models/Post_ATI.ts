/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Like_QYZ } from './Like_QYZ';
import type { User_GHG } from './User_GHG';

export type Post_ATI = {
    created_at?: string;
    updated_at?: string;
    id?: number;
    author?: User_GHG;
    content: string;
    likes?: Array<Like_QYZ>;
    likes_count?: number;
};

