/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SteamRepProfile_EKU } from './SteamRepProfile_EKU';

export type Player_BUX = {
    created_at?: string;
    updated_at?: string;
    id?: number;
    steamrep_profile?: SteamRepProfile_EKU;
    username: string;
    steamid3: string;
    steamid32: string;
    steamid64: string;
    profile_url?: string;
    avatar?: string;
    country_code: string;
    reputation?: number;
};
