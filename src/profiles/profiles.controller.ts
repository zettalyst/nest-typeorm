import { Controller, Get } from '@nestjs/common';
import { ProfileService } from './profiles.service';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  async getAll() {
    return await this.profileService.getAllProfiles();
  }
}
