/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Like_CQZ } from './Like_CQZ';
import type { User_CEN } from './User_CEN';

export type Post_YZH = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    author?: User_CEN;
    content: string;
    likes?: Array<Like_CQZ>;
};

