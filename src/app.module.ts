import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';
import { PostsController } from './entityModules/posts/posts.controller';
import { PostsService } from './entityModules/posts/posts.service';
import { HttpModule } from './common/http/http.module';
import { CommentsController } from './entityModules/comments/comments.controller';
import { CommentsService } from './entityModules/comments/comments.service';

import { EntityModules } from './entityModules/entities.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [appConfig] }),
    HttpModule,
    EntityModules,
  ],
})
export class AppModule {}
