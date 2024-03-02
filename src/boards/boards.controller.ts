import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateBoardRequestDto } from './dto/createBoard.request.dto';
import { BoardService } from './boards.service';

@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createBoardRequestDto: CreateBoardRequestDto) {
    return await this.boardService.create(createBoardRequestDto);
  }

  @Get()
  async getAll() {
    return await this.boardService.getAllPosts();
  }

  @Get('/:id')
  async getOne(@Param('id') id: number) {
    return await this.boardService.getOnePost(id);
  }

  @Put('/:id')
  async updateOne(
    @Param('id') id: number,
    @Body() updateBoardRequestDto: CreateBoardRequestDto,
  ) {
    return await this.boardService.updateOnePost(id, updateBoardRequestDto);
  }

  @Delete('/:id')
  async deleteOne(@Param('id') id: number) {
    return await this.boardService.deleteOnePost(id);
  }

  // Use Param
  // @Get('search/:keyword')
  // async searchPostsWithKeyword(@Param('keyword') keyword: string) {
  //   console.log('test');
  //   return await this.boardService.searchPosts(keyword);
  // }

  @Get('search')
  async searchPostsWithKeyword(@Query('keyword') keyword: string) {
    console.log('test');
    return await this.boardService.searchPosts(keyword);
  }
}
