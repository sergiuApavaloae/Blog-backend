import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Article } from './article.entity';
import { ArticleController } from './article.controller';
import { ArticlesService } from './article.service';
@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [ArticlesService],
  controllers: [ArticleController],
})
export class ArticleModule {}
