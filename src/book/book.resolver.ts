import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './entities/book.entity';
import { BookService } from './book.service';
import { CreateBookInput } from './dto/create.book';
import { Public } from 'src/decorators/public_decorator';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}


  @Mutation(() => Book)
  createBook(@Args('data') data: CreateBookInput) {
    return this.bookService.create(data);
  }
  @Public()
  @Query(() => [Book])
  findAllBooks() {
    return this.bookService.findAll();
  }
  @Query(() => Book, { nullable: true })
  findOneBook(@Args('id') id: number) {
    return this.bookService.findOne(id);
  }
  @Mutation(() => Book)
  updateBook(@Args('id') id: number, @Args('data') data: CreateBookInput) {
    return this.bookService.updateBook(id, data);
  }
  @Mutation(() => Boolean)
  deleteBook(@Args('id') id: number) {
    return this.bookService.deleteBook(id);
  }
  @Mutation(() => Boolean)
  deleteAllBooks() {
    return this.bookService.deleteAllBooks();
  }
}
