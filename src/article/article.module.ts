import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Article } from './article.entity';
import { ArticleController } from './article.controller';
import { ArticlesService } from './article.service';
import {CommentModule} from "../comment/comment.module";
import {CommentsService} from "../comment/comments.service";

@Module({
  imports: [TypeOrmModule.forFeature([Article]),CommentModule],
  providers: [ArticlesService],
  controllers: [ArticleController],
})
export class ArticleModule {}
