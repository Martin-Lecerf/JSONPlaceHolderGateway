import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PostMapper } from './postMapper';

@Module({
  providers: [PostsService, PostMapper],
  controllers: [PostsController],
})
export class PostsModule {}
