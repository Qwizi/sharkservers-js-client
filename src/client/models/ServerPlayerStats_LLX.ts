/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Player_BJI } from './Player_BJI';
import type { PlayerStats_YLH } from './PlayerStats_YLH';

export type ServerPlayerStats_LLX = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    player?: Player_BJI;
    stats?: Array<PlayerStats_YLH>;
    points?: number;
};

