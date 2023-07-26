/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminUpdateUserSchema } from '../models/AdminUpdateUserSchema';
import type { BanUserSchema } from '../models/BanUserSchema';
import type { CreateUserSchema } from '../models/CreateUserSchema';
import type { Page_User_MST_ } from '../models/Page_User_MST_';
import type { User_MST } from '../models/User_MST';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminUsersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Admin Get Users
     * Admin route to get users list
     * :param admin_user:
     * :param users_service:
     * :param params:
     * :return Page[UserOutWithEmail]:
     * @param page
     * @param size
     * @returns Page_User_MST_ Successful Response
     * @throws ApiError
     */
    public adminGetUsers(
        page: number = 1,
        size: number = 50,
    ): CancelablePromise<Page_User_MST_> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/admin/users',
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
     * Admin Create User
     * Admin create user
     * :param user_data:
     * :param user:
     * :return UserOutWithEmail:
     * @param requestBody
     * @returns User_MST Successful Response
     * @throws ApiError
     */
    public adminCreateUser(
        requestBody: CreateUserSchema,
    ): CancelablePromise<User_MST> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/admin/users',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Get User
     * Admin route to get user
     * :param admin_users:
     * :param user:
     * :return UserOutWithEmail:
     * @param userId
     * @returns User_MST Successful Response
     * @throws ApiError
     */
    public adminGetUser(
        userId: number,
    ): CancelablePromise<User_MST> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/admin/users/{user_id}',
            path: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Update User
     * @param userId
     * @param requestBody
     * @returns User_MST Successful Response
     * @throws ApiError
     */
    public adminUpdateUser(
        userId: number,
        requestBody: AdminUpdateUserSchema,
    ): CancelablePromise<User_MST> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/admin/users/{user_id}',
            path: {
                'user_id': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Delete User
     * Admin delete user
     * :param users_service:
     * :param validate_user:
     * :param user_id:
     * :param admin_user:
     * :return dict:
     * @param userId
     * @returns any Successful Response
     * @throws ApiError
     */
    public adminDeleteUser(
        userId: number,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/admin/users/{user_id}',
            path: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Ban User
     * Admin ban user
     * :param ban_data:
     * :param ban_service:
     * :param user:
     * :return dict:
     * @param userId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public adminBanUser(
        userId: number,
        requestBody: BanUserSchema,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/admin/users/{user_id}/ban',
            path: {
                'user_id': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Unban User
     * Admin unban user
     * :param ban_service:
     * :param user:
     * :return dict:
     * @param userId
     * @returns any Successful Response
     * @throws ApiError
     */
    public adminUnbanUser(
        userId: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/admin/users/{user_id}/unban',
            path: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
