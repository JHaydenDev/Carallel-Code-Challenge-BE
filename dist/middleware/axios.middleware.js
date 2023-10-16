"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosMiddleware = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let AxiosMiddleware = class AxiosMiddleware {
    async use(req, res, next) {
        try {
            const response = await axios_1.default.get('https://newsapi.org/v2/top-headlines', {
                params: {
                    country: 'us',
                    apiKey: '2c1a20cd84484f30a8a8e0ff4c9e3471',
                },
            });
            const articles = response.data;
            req['articles'] = articles;
            next();
        }
        catch (error) {
            throw new common_1.HttpException('Failed to fetch articles from the third-party API', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.AxiosMiddleware = AxiosMiddleware;
exports.AxiosMiddleware = AxiosMiddleware = __decorate([
    (0, common_1.Injectable)()
], AxiosMiddleware);
//# sourceMappingURL=axios.middleware.js.map