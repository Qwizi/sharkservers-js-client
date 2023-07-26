"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServersService = void 0;
class ServersService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get Servers
     * Get all servers
     * :return:
     * @param ip
     * @param port
     * @param page
     * @param size
     * @returns any Successful Response
     * @throws ApiError
     */
    getServers(ip, port, page = 1, size = 50) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/servers/',
            query: {
                'ip': ip,
                'port': port,
                'page': page,
                'size': size,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Servers Status
     * Get all servers' status
     * :return:
     * @returns any Successful Response
     * @throws ApiError
     */
    getServersStatus() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/servers/status',
        });
    }
    /**
     * Get Server
     * Get server by id
     * :param server:
     * :param server_id:
     * :return:
     * @param serverId
     * @returns Server_SHR Successful Response
     * @throws ApiError
     */
    getServer(serverId) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/servers/{server_id}',
            path: {
                'server_id': serverId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Players Stats
     * Get server player stats
     * :param server_player_stats_service:
     * :param server:
     * :return:
     * @param serverId
     * @param page
     * @param size
     * @returns any Successful Response
     * @throws ApiError
     */
    getPlayersStats(serverId, page = 1, size = 50) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/servers/{server_id}/player-stats',
            path: {
                'server_id': serverId,
            },
            query: {
                'page': page,
                'size': size,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Server Player Stats
     * Get server player stats
     * :param server_player_stats:
     * :param player:
     * :param server_player_stats_service:
     * :param server:
     * :return:
     * @param serverId
     * @param steamid64
     * @returns any Successful Response
     * @throws ApiError
     */
    getServerPlayerStats(serverId, steamid64) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/servers/{server_id}/player-stats/{steamid64}',
            path: {
                'server_id': serverId,
                'steamid64': steamid64,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Server Player Stats
     * Update server player stats
     * :param player_stats_service:
     * :param server_player_stats:
     * :return:
     * @param serverId
     * @param steamid64
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    updateServerPlayerStats(serverId, steamid64, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/servers/{server_id}/player-stats/{steamid64}',
            path: {
                'server_id': serverId,
                'steamid64': steamid64,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Server Player Stats
     * Create server player stats
     * :param player:
     * :param server_player_stats_service:
     * :param server:
     * :return:
     * @param serverId
     * @param steamid64
     * @returns any Successful Response
     * @throws ApiError
     */
    createServerPlayerStats(serverId, steamid64) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/servers/{server_id}/player-stats/{steamid64}',
            path: {
                'server_id': serverId,
                'steamid64': steamid64,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Players Chat Colors
     * Get players chat colors
     * :param flag:
     * :param server:
     * :param chat_color_module_service:
     * :return:
     * @param serverId
     * @param flag
     * @param steamid64
     * @param page
     * @param size
     * @returns any Successful Response
     * @throws ApiError
     */
    getPlayersChatColors(serverId, flag, steamid64, page = 1, size = 50) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/servers/{server_id}/modules/chat-colors/',
            path: {
                'server_id': serverId,
            },
            query: {
                'flag': flag,
                'steamid64': steamid64,
                'page': page,
                'size': size,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Player Chat Color
     * Create player chat color
     * :param data:
     * :param chat_color_module_service:
     * :param player:
     * :param server:
     * :return:
     * @param serverId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    createPlayerChatColor(serverId, requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/servers/{server_id}/modules/chat-colors/',
            path: {
                'server_id': serverId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Player Chat Color
     * Update player chat color
     * :param tag_id:
     * :param data:
     * :param chat_color_module_service:
     * :param server:
     * :return:
     * @param tagId
     * @param serverId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    updatePlayerChatColor(tagId, serverId, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/servers/{server_id}/modules/chat-colors/{tag_id}',
            path: {
                'tag_id': tagId,
                'server_id': serverId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
exports.ServersService = ServersService;
