import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Article } from './article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articlesRepository: Repository<Article>,
  ) {}

  findAll(): Promise<Article[]> {
    return this.articlesRepository.find();
  }

  findOne(id: string): Promise<Article> {
    return this.articlesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.articlesRepository.delete(id);
  }

  async addArticle(article: Article) {
    article.createdAt = new Date().toUTCString().slice(5, 16);
    return await this.articlesRepository.save(article);
  }
  async updateArticle(article: Article) {
    const found: Article = await this.articlesRepository.findOne(article.id);
    if (found) {
      article.updatedAt = new Date().toUTCString().slice(5, 16);
      return await this.articlesRepository.save(article);
    } else return;
  }
}
