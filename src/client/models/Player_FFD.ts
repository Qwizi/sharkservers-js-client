/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SteamRepProfile_JNX } from './SteamRepProfile_JNX';
import type { User_YMC } from './User_YMC';

export type Player_FFD = {
    created_at?: string;
    updated_at?: string;
    id?: number;
    user?: User_YMC;
    steamrep_profile?: SteamRepProfile_JNX;
    username: string;
    steamid3: string;
    steamid32: string;
    steamid64: string;
    profile_url?: string;
    avatar?: string;
    country_code: string;
    reputation?: number;
};

