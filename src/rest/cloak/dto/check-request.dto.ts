import { ApiProperty } from '@nestjs/swagger'

export class CheckRequestDto {
	@ApiProperty({ description: 'The IP to check' })
	readonly ip: string

	@ApiProperty({ description: 'The User-Agent data' })
	readonly userAgent: string
}
