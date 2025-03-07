import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [BookService, BookResolver, PrismaService],
})
export class BookModule {}
