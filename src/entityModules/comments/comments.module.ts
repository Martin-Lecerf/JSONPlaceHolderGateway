import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { CommentsMapper } from './commentsMapper';

@Module({
  providers: [CommentsService, CommentsMapper],
  controllers: [CommentsController],
})
export class CommentsModule {}
