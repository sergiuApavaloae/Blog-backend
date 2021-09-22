import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
import {CommentRepository} from "./comment.repository";

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: CommentRepository,
  ) {}

  findAll(postId): Promise<Comment[]> {
    return this.commentsRepository.find({ where: { postId: postId } });
  }

  findOne(id: string): Promise<Comment> {
    return this.commentsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.commentsRepository.delete(id);
  }

  async addComment(comment: Comment) {
    return await this.commentsRepository.save(comment);
  }

  async updateComment(comment: Comment) {
    const found: Comment = await this.commentsRepository.findOne(comment.id);
    if (found) {
      return await this.commentsRepository.save(comment);
    } else return;
  }
}
