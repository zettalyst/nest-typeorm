export class CreateBoardResponseDto {
  id: number;
  title: string;
  content: string;

  constructor(params: { id: number; title: string; content: string }) {
    this.id = params.id;
    this.title = params.title;
    this.content = params.content;
  }
}
