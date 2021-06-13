import { Inject, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './posts.model';

@Injectable()
export class PostsService {
  constructor(@Inject(Post) private postRepository: typeof Post) {}

  async create(dto: CreatePostDto, image: any) {
    const fileName = 'test';
    const post = this.postRepository.create({
      ...dto,
      image: fileName,
    });

    return post;
  }
}
