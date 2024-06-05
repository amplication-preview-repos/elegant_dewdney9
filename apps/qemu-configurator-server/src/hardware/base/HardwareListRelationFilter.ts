/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HardwareWhereInput } from "./HardwareWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class HardwareListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => HardwareWhereInput,
  })
  @ValidateNested()
  @Type(() => HardwareWhereInput)
  @IsOptional()
  @Field(() => HardwareWhereInput, {
    nullable: true,
  })
  every?: HardwareWhereInput;

  @ApiProperty({
    required: false,
    type: () => HardwareWhereInput,
  })
  @ValidateNested()
  @Type(() => HardwareWhereInput)
  @IsOptional()
  @Field(() => HardwareWhereInput, {
    nullable: true,
  })
  some?: HardwareWhereInput;

  @ApiProperty({
    required: false,
    type: () => HardwareWhereInput,
  })
  @ValidateNested()
  @Type(() => HardwareWhereInput)
  @IsOptional()
  @Field(() => HardwareWhereInput, {
    nullable: true,
  })
  none?: HardwareWhereInput;
}
export { HardwareListRelationFilter as HardwareListRelationFilter };
