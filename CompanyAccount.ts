import {DioAccount} from './DioAccount'

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumer: number) {
    super(name, accountNumer)
  }

  getLoan = (): void => {
    console.log('Você realizou um emprestimo')
  }

  deposit = (): void => {
    console.log('A empresa depositou')
  }

}