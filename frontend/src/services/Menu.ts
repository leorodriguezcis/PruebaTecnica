/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AxiosInstance, AxiosResponse } from 'axios'
import { httpClient } from './httpClient'

class ApiMenu {
  httpClient: AxiosInstance

  constructor() {
    this.httpClient = httpClient
  }

  menu(almuerzo:string, comida:string): Promise<AxiosResponse<any>> {
    return this.httpClient.get(`/api/menu/${almuerzo}/${comida}/`)
  }
}

const Api_Menu = new ApiMenu()

export { Api_Menu }
