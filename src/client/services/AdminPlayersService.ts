/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePlayerSchema } from '../models/CreatePlayerSchema';
import type { Player_AOK } from '../models/Player_AOK';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminPlayersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Admin Get Steam Profiles
     * @param page
     * @param size
     * @returns any Successful Response
     * @throws ApiError
     */
    public adminGetSteamProfiles(
        page: number = 1,
        size: number = 50,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/admin/players',
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
     * Admin Create Player
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public adminCreatePlayer(
        requestBody: CreatePlayerSchema,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/admin/players',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Get Steam Profile
     * @param profileId
     * @returns Player_AOK Successful Response
     * @throws ApiError
     */
    public adminGetSteamProfile(
        profileId: number,
    ): CancelablePromise<Player_AOK> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/admin/players/{profile_id}',
            path: {
                'profile_id': profileId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Delete Steam Profile
     * @param profileId
     * @returns Player_AOK Successful Response
     * @throws ApiError
     */
    public adminDeleteSteamProfile(
        profileId: number,
    ): CancelablePromise<Player_AOK> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/admin/players/{profile_id}',
            path: {
                'profile_id': profileId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
