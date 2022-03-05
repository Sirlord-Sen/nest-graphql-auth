import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsResolver } from './items.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsSchema } from './items.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemsSchema }])],
  providers: [ItemsService, ItemsResolver]
})
export class ItemsModule {}
