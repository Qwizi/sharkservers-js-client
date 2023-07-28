/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Like_YGP } from './Like_YGP';
import type { User_GGL } from './User_GGL';

export type Post_NWY = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    author?: User_GGL;
    content: string;
    likes?: Array<Like_YGP>;
};

