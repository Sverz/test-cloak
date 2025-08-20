import { Controller, Post, Body } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger'
import { CloakService } from './cloak.service'
import { CheckRequestDto } from './dto/check-request.dto'
import { CheckResponseDto } from './dto/check-response.dto'

@ApiTags('Cloak')
@Controller('check')
export class CloakController {
	constructor(private readonly cloakService: CloakService) {}

	@Post()
	@ApiOperation({ summary: 'Check if request is from bot or not' })
	@ApiBody({ type: CheckRequestDto })
	@ApiResponse({ status: 200, description: 'Result of bot detection', type: CheckResponseDto })
	async check(@Body() body: CheckRequestDto) {
		return this.cloakService.check(body.ip, body.userAgent)
	}
}
