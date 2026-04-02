import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AlbumModule } from './album/album.module';
import { CommentsModule } from './comments/comments.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [UsersModule, AlbumModule, CommentsModule, PostsModule],
})
export class EntityModules {}
