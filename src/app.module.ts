import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroModule } from './hero/hero.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hero } from './hero/entities/hero.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'api',
    entities: [Hero],
    synchronize: true

  }),HeroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
