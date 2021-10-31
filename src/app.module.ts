import { getMongoConfig } from './configs/mongo.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ReviewModule } from './review/review.module';
import { TypegooseModule } from 'nestjs-typegoose';


@Module({
  imports: [
    AuthModule, 
    ConfigModule.forRoot(),
    ProductModule, 
    ReviewModule, 
    TopPageModule,
    TypegooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMongoConfig
		}),
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
