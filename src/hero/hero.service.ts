import { Injectable } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hero } from './entities/hero.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HeroService {
  constructor (@InjectRepository(Hero) private readonly heroRepository: Repository<Hero>){}
  create(createHeroDto: CreateHeroDto) {
    return 'This action adds a new hero';
  }

  async findAllHeroes() {
    return await this.heroRepository.find();
  }

 async findOne(id: number) {
   //return 'This actions returns #${id} hero'
    return await this.heroRepository.findOneBy({id});
  }

  update(id: number, updateHeroDto: UpdateHeroDto) {
    return `This action updates a #${id} hero`;
  }

  remove(id: number) {
    return `This action removes a #${id} hero`;
  }
}
