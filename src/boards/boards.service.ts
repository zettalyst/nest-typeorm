import { Injectable } from '@nestjs/common';
import { Board } from './boards.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardRequestDto } from './dto/createBoard.request.dto';
import { CreateBoardResponseDto } from './dto/createBoard.response.dto';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}

  async create(createBoardRequestDto: CreateBoardRequestDto) {
    const { title, content } = createBoardRequestDto;
    const board = new Board();
    board.title = title;
    board.content = content;
    const savedBoard = await this.boardRepository.save(board);
    return new CreateBoardResponseDto(savedBoard);
  }

  async getAllPosts() {
    return await this.boardRepository.find();
  }

  async getOnePost(id: number) {
    return await this.boardRepository.findOne({ where: { id } });
  }

  async updateOnePost(
    id: number,
    createBoardRequestDto: CreateBoardRequestDto,
  ) {
    const { title, content } = createBoardRequestDto;
    await this.boardRepository.update({ id }, { title, content });
    return await this.boardRepository.findOne({ where: { id } });
  }

  async deleteOnePost(id: number) {
    if (id !== -1) {
      await this.boardRepository.delete({ id });
      return { message: '게시글이 삭제되었습니다.' };
    } else {
      return null;
    }
  }

  async searchPosts(keyword: string) {
    const searchResult = await this.boardRepository
      .createQueryBuilder('board')
      .where('board.title LIKE :keyword OR board.content LIKE :keyword', {
        keyword: `%${keyword}%`,
      })
      .getMany();
    return searchResult;
  }
}
