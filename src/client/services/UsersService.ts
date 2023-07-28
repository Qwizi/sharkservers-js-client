/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangeDisplayRoleSchema } from '../models/ChangeDisplayRoleSchema';
import type { ChangePasswordSchema } from '../models/ChangePasswordSchema';
import type { ChangeUsernameSchema } from '../models/ChangeUsernameSchema';
import type { CreateAppSchema } from '../models/CreateAppSchema';
import type { Page_StaffRolesSchema_ } from '../models/Page_StaffRolesSchema_';
import type { Page_User_JQQ_ } from '../models/Page_User_JQQ_';
import type { Page_UserOut2Schema_ } from '../models/Page_UserOut2Schema_';
import type { SuccessChangeUsernameSchema } from '../models/SuccessChangeUsernameSchema';
import type { User_JQQ } from '../models/User_JQQ';
import type { User_ZJK } from '../models/User_ZJK';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UsersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Users
     * Get users
     * :param users_service:
     * :param params:
     * :return Page[UserOut]:
     * @param page
     * @param size
     * @returns Page_UserOut2Schema_ Successful Response
     * @throws ApiError
     */
    public getUsers(
        page: number = 1,
        size: number = 50,
    ): CancelablePromise<Page_UserOut2Schema_> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/users',
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
     * Get Staff Users
     * Get staff users
     * :param users_service:
     * :param params:
     * :return Page[UserOut]:
     * @param page
     * @param size
     * @returns Page_StaffRolesSchema_ Successful Response
     * @throws ApiError
     */
    public getStaffUsers(
        page: number = 1,
        size: number = 50,
    ): CancelablePromise<Page_StaffRolesSchema_> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/users/staff',
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
     * Get Logged User
     * Get logged user
     * :param user:
     * :return UserOutWithEmail:
     * @returns User_ZJK Successful Response
     * @throws ApiError
     */
    public getLoggedUser(): CancelablePromise<User_ZJK> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/users/me',
        });
    }

    /**
     * Get Logged User Posts
     * Get user posts
     * :param params:
     * :param posts_service:
     * :param user:
     * :return AbstractPage:
     * @param page
     * @param size
     * @returns any Successful Response
     * @throws ApiError
     */
    public getLoggedUserPosts(
        page: number = 1,
        size: number = 50,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/users/me/posts',
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
     * Get Logged User Threads
     * Get user threads
     * :param threads_service:
     * :param params:
     * :param user:
     * :return AbstractPage:
     * @param page
     * @param size
     * @returns any Successful Response
     * @throws ApiError
     */
    public getLoggedUserThreads(
        page: number = 1,
        size: number = 50,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/users/me/threads',
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
     * Get User Apps
     * Get user apps
     * :param apps_service:
     * :param user:
     * :return dict:
     * @param page
     * @param size
     * @returns any Successful Response
     * @throws ApiError
     */
    public getUserApps(
        page: number = 1,
        size: number = 50,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/users/me/apps',
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
     * Create User App
     * Create user app
     * :param scopes_service:
     * :param apps_service:
     * :param app_data:
     * :param user:
     * :return dict:
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public createUserApp(
        requestBody: CreateAppSchema,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/users/me/apps',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Change User Username
     * Change user username
     * :param auth_service:
     * :param change_username_data:
     * :param user:
     * :return UserOut:
     * @param requestBody
     * @returns SuccessChangeUsernameSchema Successful Response
     * @throws ApiError
     */
    public changeUserUsername(
        requestBody: ChangeUsernameSchema,
    ): CancelablePromise<SuccessChangeUsernameSchema> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/users/me/username',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Change User Password
     * Change user password
     * :param change_password_data:
     * :param user:
     * :return dict:
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public changeUserPassword(
        requestBody: ChangePasswordSchema,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/users/me/password',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Change User Display Role
     * Change user display role
     * :param auth_service:
     * :param change_display_role_data:
     * :param user:
     * :return dict:
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public changeUserDisplayRole(
        requestBody: ChangeDisplayRoleSchema,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/users/me/display-role',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Last Logged Users
     * Get last logged users
     * :param users_service:
     * :param params:
     * :return Page[UserOut]:
     * @param page
     * @param size
     * @returns Page_User_JQQ_ Successful Response
     * @throws ApiError
     */
    public getLastLoggedUsers(
        page: number = 1,
        size: number = 50,
    ): CancelablePromise<Page_User_JQQ_> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/users/online',
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
     * Get User
     * Get user
     * :param user:
     * :return UserOut:
     * @param userId
     * @returns User_JQQ Successful Response
     * @throws ApiError
     */
    public getUser(
        userId: number,
    ): CancelablePromise<User_JQQ> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/users/{user_id}',
            path: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get User Posts
     * Get user posts
     * :param posts_service:
     * :param params:
     * :param user:
     * :return AbstractPage:
     * @param userId
     * @param page
     * @param size
     * @returns any Successful Response
     * @throws ApiError
     */
    public getUserPosts(
        userId: number,
        page: number = 1,
        size: number = 50,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/users/{user_id}/posts',
            path: {
                'user_id': userId,
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
     * Get User Threads
     * Get user threads
     * :param threads_service:
     * :param params:
     * :param user:
     * :return AbstractPage:
     * @param userId
     * @param page
     * @param size
     * @returns any Successful Response
     * @throws ApiError
     */
    public getUserThreads(
        userId: number,
        page: number = 1,
        size: number = 50,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/users/{user_id}/threads',
            path: {
                'user_id': userId,
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

}
