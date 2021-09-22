import {Body, Controller, Delete, Get, Injectable, Param, Post, Put, Req} from '@nestjs/common';
import { Article } from './article.entity';
import { ArticlesService } from './article.service';
import {CommentsService} from "../comment/comments.service";
import {Comment} from "../comment/comment.entity";
@Injectable()
@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticlesService,
              private readonly commentsService:CommentsService) {}

  @Get()
  async getAll() {
    return await this.articleService.findAll();
  }
  @Post(':id/comments')
  async addComment(@Body() comment: Comment) {
    return await this.commentsService.addComment(comment);
  }
  @Get(':id/comments')
  async getComments(@Param('id') postId:number){
    return await this.commentsService.findAll(postId);
  }

  @Delete(':id/comments/:idComment')
  async deleteComment(@Param('idComment') idComm: string) {
    await this.commentsService.remove(idComm);
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.articleService.findOne(id);
  }
  @Post()
  async addArticle(@Body() article: Article) {
    return await this.articleService.addArticle(article);
  }
  @Delete(':id')
  async deleteArticle(@Param('id') id: string) {
    await this.articleService.remove(id);
  }

  @Put()
  async updateArticle(@Body() article: Article) {
    const updated = await this.articleService.updateArticle(article);
  }
}
