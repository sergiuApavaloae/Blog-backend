import {Body, Controller, Delete, Get, Injectable, Param, Post, Put, Req} from '@nestjs/common';
import { Article } from './article.entity';
import { ArticlesService } from './article.service';
@Injectable()
@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticlesService) {}

  @Get()
  async getAll() {
    return await this.articleService.findAll();
  }
  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.articleService.findOne(id);
  }
  @Post()
  async addArticle(@Body() article: Article) {
    return await this.articleService.addArticle(article);
  }
  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    await this.articleService.remove(id);
  }

  @Put()
  async updateArticle(@Body() article: Article) {
    const updated = await this.articleService.updateArticle(article);
  }
}
