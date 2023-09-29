/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChatColorModule_WUK } from './ChatColorModule_WUK';
import type { SteamRepProfile_HSV } from './SteamRepProfile_HSV';

export type Player_LCL = {
    created_at?: string;
    updated_at?: string;
    id?: number;
    steamrep_profile?: SteamRepProfile_HSV;
    username: string;
    steamid3: string;
    steamid32: string;
    steamid64: string;
    profile_url?: string;
    avatar?: string;
    country_code: string;
    reputation?: number;
    player_chat_color_module?: Array<ChatColorModule_WUK>;
};

