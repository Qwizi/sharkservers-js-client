"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
class ChatService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get Chat Messages
     * Get chats
     * :param params:
     * :return AbstractPage:
     * @param page
     * @param size
     * @returns Page_Chat_FLW_ Successful Response
     * @throws ApiError
     */
    getChatMessages(page = 1, size = 50) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/chat',
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
     * Create Chat Message
     * Create chat message
     * :param chat:
     * :param user:
     * :return ChatOut:
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    createChatMessage(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/chat',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
exports.ChatService = ChatService;
