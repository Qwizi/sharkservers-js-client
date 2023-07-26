/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Like } from './Like';
import type { PkOnlyUserbmiilz } from './PkOnlyUserbmiilz';
import type { User } from './User';

/**
 * Post
 */
export type Post = {
    id?: number;
    author?: (number | User | PkOnlyUserbmiilz);
    content: string;
    likes?: (number | Like | Array<Like>);
    created_date?: string;
    updated_date?: string;
};

