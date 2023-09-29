"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminServersService = void 0;
class AdminServersService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Admin Create Server
     * Create a new server
     * :param servers_service:
     * :param server_data:
     * :return:
     * @param requestBody
     * @returns Server_IPO Successful Response
     * @throws ApiError
     */
    adminCreateServer(requestBody) {
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
    adminDeleteServer(serverId) {
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
exports.AdminServersService = AdminServersService;
