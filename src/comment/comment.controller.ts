import {
  Body,
  Controller,
  Delete,
  Get,
  Injectable,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';

import { CommentsService } from './comments.service';
import { Comment } from './comment.entity';

@Injectable()
@Controller('comments/:postId')
export class CommentController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.commentsService.findOne(id);
  }

  @Get()
  async getAll(@Param('postId') postId: string) {
    return await this.commentsService.findAll(postId);
  }

  @Post()
  async addArticle(@Body() comment: Comment) {
    return await this.commentsService.addComment(comment);
  }

  @Delete('/:id')
  async deleteComment(@Param('id') id: string) {
    await this.commentsService.remove(id);
  }

  @Put()
  async updateComment(@Body() comment: Comment) {
    const updated = await this.commentsService.updateComment(comment);
  }
}
