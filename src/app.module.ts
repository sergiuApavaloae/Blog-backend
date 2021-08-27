import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UsersModule } from './user/users.module';
import { Connection } from 'typeorm';
import { ArticleModule } from './article/article.module';
import { Article } from './article/article.entity';
import {Comment} from "./comment/comment.entity";
import {CommentModule} from "./comment/comment.module";
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.39.76',
      port: 5432,
      username: 'culturalia',
      password: 'culturalia',
      database: 'culturalia',
      schema: 'sergiu',
      entities: [User, Article,Comment],
      synchronize: true,
    }),
    UsersModule,
    ArticleModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
