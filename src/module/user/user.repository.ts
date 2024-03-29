import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { User, CreateUserDto } from './index';


@Injectable()
export class UserRepository extends Repository<User> {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {
    super(repo.target, repo.manager, repo.queryRunner);
  }

  async findOneByEmail(email: string): Promise<User> {
    console.log(`findOne > ${email}`)
    return this.repo.findOneBy({ email });
  }

  async createUser(dto: CreateUserDto, hashedPassword: string): Promise<User> {
    console.log(`repo 실행 ${dto}`)
    const user = new User();
    user.name = dto.name;
    user.email = dto.email;
    user.password = hashedPassword;
    user.phone = dto.phone;
    return this.repo.save(user);
  }
}
