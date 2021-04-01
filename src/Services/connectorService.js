import { Injectable } from '@nestjs/common'

@Injectable()
export default class ConnectorService {
	constructor(usecase) {
		this.connectorUsecase = usecase;
	}


}
