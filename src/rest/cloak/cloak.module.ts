import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CloakService } from './cloak.service'
import { CloakController } from './cloak.controller'
import { SeedService } from 'src/domain/seeders/seed.service'
import { BlockedIpSchema } from 'src/domain/schemas/blocked-ip.schema'

@Module({
	imports: [MongooseModule.forFeature([{ name: 'BlockedIp', schema: BlockedIpSchema }])],
	providers: [CloakService, SeedService],
	controllers: [CloakController],
	exports: [CloakService, MongooseModule],
})
export class CloakModule {}
