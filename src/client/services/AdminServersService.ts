/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateServerSchema } from '../models/CreateServerSchema';
import type { Server_QGM } from '../models/Server_QGM';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminServersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Admin Create Server
     * Create a new server
     * :param servers_service:
     * :param server_data:
     * :return:
     * @param requestBody
     * @returns Server_QGM Successful Response
     * @throws ApiError
     */
    public adminCreateServer(
        requestBody: CreateServerSchema,
    ): CancelablePromise<Server_QGM> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/admin/servers',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Delete Server
     * Delete a server
     * :param servers_service:
     * :param server_id:
     * :return:
     * @param serverId
     * @returns any Successful Response
     * @throws ApiError
     */
    public adminDeleteServer(
        serverId: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/admin/servers/{server_id}',
            path: {
                'server_id': serverId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
