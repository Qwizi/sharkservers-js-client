/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Like_AYY } from './Like_AYY';
import type { User_QMC } from './User_QMC';

export type Post_UTH = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    author?: User_QMC;
    content: string;
    likes?: Array<Like_AYY>;
};

