import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentDTOOut } from './DTO/commentsDTOOut';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Get(':id')
  getCommentById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CommentDTOOut> {
    return this.commentsService.findById(id);
  }

  @Get()
  getAllComments(): Promise<CommentDTOOut[]> {
    return this.commentsService.findAll();
  }
}
