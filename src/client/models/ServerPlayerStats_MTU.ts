/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Player_KMO } from './Player_KMO';
import type { PlayerStats_AVJ } from './PlayerStats_AVJ';

export type ServerPlayerStats_MTU = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    player?: Player_KMO;
    stats?: Array<PlayerStats_AVJ>;
    points?: number;
};

