import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      url: 'mysql://root:QSmXbIdscfpkzQvoNyLhmZfkLXNyKWPJ@autorack.proxy.rlwy.net:33664/railway',
      autoLoadEntities: true, 
      synchronize: true, 
    }),
    DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
