/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChatColorModule_WWC } from './ChatColorModule_WWC';
import type { ServerPlayerStats_RAR } from './ServerPlayerStats_RAR';

export type Server_SGQ = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    name: string;
    ip: string;
    port: number;
    server_stats?: Array<ServerPlayerStats_RAR>;
    server_chat_color_module?: Array<ChatColorModule_WWC>;
};

