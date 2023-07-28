/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Scope_NAX } from './Scope_NAX';
import type { User_QMC } from './User_QMC';

export type Role_DKD = {
    id?: number;
    name: string;
    color?: string;
    scopes?: Array<Scope_NAX>;
    is_staff?: boolean;
    user_roles?: Array<User_QMC>;
    user_display_role?: Array<User_QMC>;
};

