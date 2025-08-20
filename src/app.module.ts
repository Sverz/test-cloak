import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CloakModule } from './rest/cloak/cloak.module'

@Module({
	imports: [
		MongooseModule.forRoot(process.env.MONGO_URL || 'mongodb://localhost:27017/test-cloak'),
		CloakModule,
	],
})
export class AppModule { }
