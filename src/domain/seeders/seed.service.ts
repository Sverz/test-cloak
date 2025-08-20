import { Injectable, OnModuleInit } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { BlockedIp, BlockedIpDocument } from '../schemas/blocked-ip.schema'

@Injectable()
export class SeedService implements OnModuleInit {
	constructor(@InjectModel(BlockedIp.name) private blockedIpModel: Model<BlockedIpDocument>) {}

	async onModuleInit() {
		const defaultIps = ['192.168.0.1', '10.0.0.1', '127.0.0.1', '8.8.8.8']

		for (const ip of defaultIps) {
			const exists = await this.blockedIpModel.findOne({ ip }).exec()
			if (!exists) {
				await this.blockedIpModel.create({ ip })
			}
		}
	}
}
