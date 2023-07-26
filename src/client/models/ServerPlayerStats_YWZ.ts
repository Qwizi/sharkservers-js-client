/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Player_UPV } from './Player_UPV';
import type { PlayerStats_FHB } from './PlayerStats_FHB';

export type ServerPlayerStats_YWZ = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    player?: Player_UPV;
    stats?: Array<PlayerStats_FHB>;
    points?: number;
};

