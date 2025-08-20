// blocked-ip.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type BlockedIpDocument = HydratedDocument<BlockedIp>

@Schema({ collection: 'BlockedIp', timestamps: true })
export class BlockedIp {
	@Prop({ required: true })
	ip: string

	@Prop({ default: Date.now })
	createdAt: Date
}

export const BlockedIpSchema = SchemaFactory.createForClass(BlockedIp)
BlockedIpSchema.index({ createdAt: 1 })
