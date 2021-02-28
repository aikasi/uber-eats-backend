import { Field, ObjectType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field(() => Number)
  @IsNumber()
  id: number;

  @Field(() => String)
  @Column()
  @IsString()
  @Length(5)
  name: string;

  @Field(() => Boolean, { nullable: true, defaultValue: true }) //graphql
  @Column({ default: true }) //database
  @IsOptional() //dto
  @IsBoolean()
  isVegan: boolean;

  @Field(() => String, { defaultValue: 'Null' })
  @Column()
  @IsString()
  address: string;

  @Field(() => String, { defaultValue: 'Null' })
  @Column()
  @IsString()
  ownerName: string;

  @Field(() => String, { defaultValue: 'Null' })
  @Column()
  @IsString()
  categoryName: string;
}
