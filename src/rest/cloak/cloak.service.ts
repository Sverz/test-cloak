import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { BlockedIp, BlockedIpDocument } from 'src/domain/schemas/blocked-ip.schema'

@Injectable()
export class CloakService {
	constructor(@InjectModel(BlockedIp.name) private blockedIpModel: Model<BlockedIpDocument>) {}

	async check(ip: string, userAgent: string) {
		const ipBlocked = await this.blockedIpModel.findOne({ ip }).exec()
		if (ipBlocked) {
			return { isBot: true, reason: 'IP found in local blacklist' }
		}

		const suspiciousPatterns = [/bot/i, /spider/i, /crawl/i]
		if (suspiciousPatterns.some(pattern => pattern.test(userAgent))) {
			return { isBot: true, reason: 'Suspicious User-Agent' }
		}

		return { isBot: false, reason: 'Looks like a human' }
	}
}
