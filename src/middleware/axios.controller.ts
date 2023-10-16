import { Get, Controller, Request } from '@nestjs/common';

@Controller('api/articles')
export class ArticlesController {
  @Get()
  getArticles(@Request() req) {
    const articles = req['articles'];
    return articles;
  }
}
