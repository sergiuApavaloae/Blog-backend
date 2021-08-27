import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
import { CommentController } from './comment.controller';
import { CommentsService } from './comments.service';
@Module({
    imports: [TypeOrmModule.forFeature([Comment])],
    providers: [CommentsService],
    controllers: [CommentController],
})
export class CommentModule{}