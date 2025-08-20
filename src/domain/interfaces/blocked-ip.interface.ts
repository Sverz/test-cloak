import { ObjectId } from 'mongoose'

export interface BlockedIp {
	_id: ObjectId
	ip: string
	createdAt: Date
}
