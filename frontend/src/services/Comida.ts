/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AxiosInstance, AxiosResponse } from 'axios'
import { httpClient } from './httpClient'

class ApiComida {
  httpClient: AxiosInstance

  constructor() {
    this.httpClient = httpClient
  }

  comida(): Promise<AxiosResponse<any>> {
    return this.httpClient.get(`/api/comida/`)
  }
}

const Api_Comida = new ApiComida()

export { Api_Comida }
