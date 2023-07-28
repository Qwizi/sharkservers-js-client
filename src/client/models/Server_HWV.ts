/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChatColorModule_ARE } from './ChatColorModule_ARE';
import type { ServerPlayerStats_MTU } from './ServerPlayerStats_MTU';

export type Server_HWV = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    name: string;
    ip: string;
    port: number;
    server_stats?: Array<ServerPlayerStats_MTU>;
    server_chat_color_module?: Array<ChatColorModule_ARE>;
};

