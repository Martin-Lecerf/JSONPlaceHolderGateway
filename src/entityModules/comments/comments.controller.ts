import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Get(':id')
  getCommentById(@Param('id', ParseIntPipe) id: number): Promise<Comment> {
    return this.commentsService.findById(id);
  }

  @Get()
  getAllComments() {
    return this.commentsService.findAll();
  }
}
