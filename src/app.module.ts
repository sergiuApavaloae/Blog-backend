import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ArticleModule } from './article/article.module';
import { Article } from './article/article.entity';
import { Comment } from './comment/comment.entity';
import { CommentModule } from './comment/comment.module';
import { UsersModule } from './auth/users/users.module';
import { UsersService } from './auth/users/users.service';
import { AuthModule } from './auth/auth.module';
import {AuthController} from "./auth/auth.controller";
import {JwtModule} from "@nestjs/jwt";
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'test',
      schema: 'public',
      entities: [Article, Comment],
      synchronize: true,
    }),
    UsersModule,
    ArticleModule,
    CommentModule,
    AuthModule,
    JwtModule.register(
        {
          secret:'SECRET',
          signOptions:{expiresIn:'60s'},
        }
    )
  ],
  controllers: [AppController,AuthController],
  providers: [AppService, UsersService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
