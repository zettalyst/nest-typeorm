import { User } from '../users.entity';

export class CreateProfileResponse {
  id: number;
  gender: string;
  photo: string;
  user: User;

  constructor(params: {
    id: number;
    gender: string;
    photo: string;
    user: User;
  }) {
    this.id = params.id;
    this.gender = params.gender;
    this.photo = params.photo;
    this.user = params.user;
  }
}
