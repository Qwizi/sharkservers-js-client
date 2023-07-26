/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChatColorModule_DTK } from './ChatColorModule_DTK';
import type { ServerPlayerStats_LLX } from './ServerPlayerStats_LLX';

export type Server_LAU = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    name: string;
    ip: string;
    port: number;
    server_stats?: Array<ServerPlayerStats_LLX>;
    server_chat_color_module?: Array<ChatColorModule_DTK>;
};

