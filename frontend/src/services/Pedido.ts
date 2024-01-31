/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AxiosInstance, AxiosResponse } from 'axios'
import { httpClient } from './httpClient'

class ApiPedido {
  httpClient: AxiosInstance

  constructor() {
    this.httpClient = httpClient
  }

  pedido(producto:number): Promise<AxiosResponse<any>> {
    return this.httpClient.post(`/api/pedido/${producto}/`)
  }
}

const Api_Pedido = new ApiPedido()

export { Api_Pedido }
