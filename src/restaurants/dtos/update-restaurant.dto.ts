import { ArgsType, Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateRestaurantDto } from './create-restaurant.dto';

@InputType() //inputType일결우 resolver등에 @Args에 이름이 들어가야한다.
class UpdateRestaurantInputType extends PartialType(CreateRestaurantDto) {}

@ArgsType() //@Args에 비워둬야 한다.
export class UpdateRestaurantDto {
  @Field(() => Number)
  id: number;

  @Field(() => UpdateRestaurantInputType)
  data: UpdateRestaurantInputType;
}
