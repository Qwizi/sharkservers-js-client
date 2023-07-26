/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChatColorModule_NHA } from './ChatColorModule_NHA';
import type { ServerPlayerStats_YWZ } from './ServerPlayerStats_YWZ';

export type Server_SHR = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    name: string;
    ip: string;
    port: number;
    server_stats?: Array<ServerPlayerStats_YWZ>;
    server_chat_color_module?: Array<ChatColorModule_NHA>;
};

