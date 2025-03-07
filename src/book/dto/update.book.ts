import { ObjectType, PartialType } from '@nestjs/graphql';
import { CreateBookInput } from './create.book';

@ObjectType()
export class UpdateBookInput extends PartialType(CreateBookInput) {}
