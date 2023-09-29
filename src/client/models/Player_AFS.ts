/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SteamRepProfile_ROI } from './SteamRepProfile_ROI';
import type { User_URI } from './User_URI';

export type Player_AFS = {
    created_at?: string;
    updated_at?: string;
    id?: number;
    user?: User_URI;
    steamrep_profile?: SteamRepProfile_ROI;
    username: string;
    steamid3: string;
    steamid32: string;
    steamid64: string;
    profile_url?: string;
    avatar?: string;
    country_code: string;
    reputation?: number;
};

