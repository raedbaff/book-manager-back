import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BookModule } from './book/book.module';
import { PrismaService } from './prisma/prisma.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategyService } from './jwt/jwt-strategy';
import { AuthenticatedGuard } from './auth/auth.guard';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      global: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, JwtStrategyService, {
    provide: 'APP_GUARD',
    useClass: AuthenticatedGuard,
  }],
})
export class AppModule {}
