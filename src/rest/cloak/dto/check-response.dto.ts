import { ApiProperty } from '@nestjs/swagger'

export class CheckResponseDto {
	@ApiProperty({ description: 'The status of checking' })
	readonly isBot: boolean

	@ApiProperty({ description: 'The reason of canceling' })
	readonly reason: string
}
