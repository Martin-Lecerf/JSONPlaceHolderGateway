import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from 'src/entityModules/posts/Post';
import { PostDtoOut } from './DTO/postDTOOut';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Get(':id')
  getPostById(@Param('id', ParseIntPipe) id: number): Promise<PostDtoOut> {
    return this.postService.findById(id);
  }

  @Get()
  getAllPosts(): Promise<PostDtoOut[]> {
    return this.postService.findAll();
  }
}
