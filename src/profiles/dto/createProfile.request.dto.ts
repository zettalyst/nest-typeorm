import { User } from '../users.entity';

export class CreateProfileRequest {
  id: number;
  gender: string;
  photo: string;
  user: User;
}
