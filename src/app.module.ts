import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';
import { UsersController } from './entityModules/users/users.controller';
import { UsersService } from './entityModules/users/users.service';
import { PostsController } from './entityModules/posts/posts.controller';
import { PostsService } from './entityModules/posts/posts.service';
import { HttpModule } from './common/http/http.module';
import { CommentsController } from './entityModules/comments/comments.controller';
import { CommentsService } from './entityModules/comments/comments.service';
import { AlbumsController } from './entityModules/album/album.controller';
import { AlbumService } from './entityModules/album/album.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [appConfig] }),
    HttpModule,
  ],
  controllers: [
    UsersController,
    PostsController,
    CommentsController,
    AlbumsController,
    PostsController,
  ],
  providers: [
    UsersService,
    PostsService,
    CommentsService,
    AlbumService,
    PostsService,
  ],
})
export class AppModule {}
