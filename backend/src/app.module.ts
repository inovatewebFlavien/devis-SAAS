/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';
import { QuotesModule } from './quotes/quotes.module';
import { UserModule } from './user/user.module';
import { typeOrmModuleOptions } from './ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmModuleOptions),
    AuthModule,
    ClientModule,
    QuotesModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
