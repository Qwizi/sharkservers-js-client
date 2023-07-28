/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Player_VIO } from './Player_VIO';
import type { PlayerStats_XMN } from './PlayerStats_XMN';

export type ServerPlayerStats_RAR = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    player?: Player_VIO;
    stats?: Array<PlayerStats_XMN>;
    points?: number;
};

