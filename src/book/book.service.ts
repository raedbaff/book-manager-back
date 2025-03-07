import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookInput } from './dto/create.book';
import { UpdateBookInput } from './dto/update.book';

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateBookInput) {
    return await this.prisma.book.create({ data });
  }

  async findAll() {
    return await this.prisma.book.findMany();
  }
  async findOne(id: number) {
    return await this.prisma.book.findUnique({ where: { id } });
  }
  async deleteBook(id: number) {
    const book = await this.prisma.book.delete({ where: { id } });
    return !!book;
  }
  async deleteAllBooks() {
    const books = await this.prisma.book.deleteMany();
    return !!books;
  }
  async updateBook(id, data: UpdateBookInput) {
    return await this.prisma.book.update({ where: { id }, data });
  }
}
