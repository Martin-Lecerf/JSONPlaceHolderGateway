import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from 'src/entityModules/posts/Post';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Get(':id')
  getPostById(@Param('id', ParseIntPipe) id: number): Promise<Post> {
    return this.postService.findById(id);
  }

  @Get()
  getAllPosts() {
    return this.postService.findAll();
  }
}
