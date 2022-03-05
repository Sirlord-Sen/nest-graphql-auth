import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type UserDocument = Items & Document;
@Schema()
export class Items {
    @Prop({required:true, unique:true})
    title: string;
    @Prop({required:true})
    price: Number;
    @Prop({required:true})
    description: string
}
export const ItemsSchema = SchemaFactory.createForClass(Items)