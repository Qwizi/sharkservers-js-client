/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthTypeEnum } from './AuthTypeEnum';

/**
 * UpdateAdminSchema model
 */
export type UpdateAdminSchema = {
    authtype?: AuthTypeEnum;
    identity?: string;
    password?: string;
    flags?: string;
    name?: string;
    immunity?: number;
    groups_id?: Array<number>;
};

