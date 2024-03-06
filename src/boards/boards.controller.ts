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

  @Post('post')
  @HttpCode(201)
  async create(@Body() createBoardRequestDto: CreateBoardRequestDto) {
    console.log('Call create method in BoardController');
    return await this.boardService.create(createBoardRequestDto);
  }

  @Get('post')
  async getAll() {
    console.log('Call getAll method in BoardController');
    return await this.boardService.getAllPosts();
  }

  @Get('post/:id')
  async getOne(@Param('id') id: number) {
    console.log('Call getOne method in BoardController');
    return await this.boardService.getOnePost(id);
  }

  @Put('post/:id')
  async updateOne(
    @Param('id') id: number,
    @Body() updateBoardRequestDto: CreateBoardRequestDto,
  ) {
    console.log('Call updateOne method in BoardController');
    return await this.boardService.updateOnePost(id, updateBoardRequestDto);
  }

  @Delete('post/:id')
  async deleteOne(@Param('id') id: number) {
    console.log('Call deleteOne method in BoardController');
    return await this.boardService.deleteOnePost(id);
  }

  @Get('search')
  async searchPostsWithKeyword(@Query('keyword') keyword: string) {
    console.log('Call searchPostsWithKeyword method in BoardController');
    return await this.boardService.searchPosts(keyword);
  }
}
