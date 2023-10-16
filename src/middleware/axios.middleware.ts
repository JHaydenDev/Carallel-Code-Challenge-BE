// src/middleware/axios.middleware.ts

import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

@Injectable()
export class AxiosMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    // Make a request to the third-party API using Axios
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'us',
          apiKey: '2c1a20cd84484f30a8a8e0ff4c9e3471',
        },
      });
      const articles = response.data;
      // Attach the articles to the request for use in the route handler
      req['articles'] = articles;
      next();
    } catch (error) {
      // Handle API request errors, e.g., logging or returning an error response
      throw new HttpException(
        'Failed to fetch articles from the third-party API',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
