"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
class AuthService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Register
     * Register a new user
     * :param auth_service:
     * :param user_data:
     * :param redis:
     * :return UserOut:
     * @param requestBody
     * @returns User_HSN Successful Response
     * @throws ApiError
     */
    register(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/auth/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Login User
     * Login user
     * :param auth_service:
     * :param refresh_token_service:
     * :param access_token_service:
     * :param form_data:
     * :return TokenSchema:
     * @param formData
     * @returns TokenSchema Successful Response
     * @throws ApiError
     */
    loginUser(formData) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/auth/token',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Access Token From Refresh Token
     * Get access token from refresh token
     * :param auth_service:
     * :param refresh_token_service:
     * :param access_token_service:
     * :param token_data:
     * :return TokenSchema:
     * @param requestBody
     * @returns TokenSchema Successful Response
     * @throws ApiError
     */
    getAccessTokenFromRefreshToken(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/auth/token/refresh',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Logout User
     * Logout user
     * :param auth_service:
     * :param user:
     * :return:
     * @returns User_HSN Successful Response
     * @throws ApiError
     */
    logoutUser() {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/auth/logout',
        });
    }
    /**
     * Activate User
     * Activate user
     * :param auth_service:
     * :param activate_code_data:
     * :param redis:
     * :return bool:
     * @param requestBody
     * @returns UserActivatedSchema Successful Response
     * @throws ApiError
     */
    activateUser(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/auth/activate',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Resend Activate Code
     * Resend activate code
     * :param auth_service:
     * :param data:
     * :param redis:
     * :return bool:
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    resendActivateCode(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/auth/activate/resend',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Connect Steam Profile
     * @returns any Successful Response
     * @throws ApiError
     */
    connectSteamProfile() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/auth/connect/steam',
        });
    }
    /**
     * Steam Profile Callback
     * @returns any Successful Response
     * @throws ApiError
     */
    steamProfileCallback() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/auth/callback/steam',
        });
    }
    /**
     * Get App Token
     * Get app token
     * :param auth_service:
     * :param access_token_service:
     * :param form_data:
     * :return TokenSchema:
     * @param formData
     * @returns TokenSchema Successful Response
     * @throws ApiError
     */
    getAppToken(formData) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/auth/apps/token',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
exports.AuthService = AuthService;
