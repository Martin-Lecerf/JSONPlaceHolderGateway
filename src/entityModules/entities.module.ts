import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AlbumModule } from './album/album.module';
import { CommentsModule } from './comments/comments.module';
import { PostsModule } from './posts/posts.module';
import { PhotosModule } from './photos/photos.module';

@Module({
  imports: [
    UsersModule,
    AlbumModule,
    CommentsModule,
    PostsModule,
    PhotosModule,
  ],
})
export class EntityModules {}
