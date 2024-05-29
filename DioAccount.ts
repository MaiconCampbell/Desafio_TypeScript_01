export abstract class DioAccount {
  private name: string
  private readonly accountNumer: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumer: number) {
    this.name = name;
    this.accountNumer = accountNumer;
    this.balance
  }

  getName = (): string => {
    return this.name
  }

  setName(newName: string): void {
    this.name = newName;
    console.log('nome alterado com sucesso');
  }

  deposit = (valueDeposit: number): void => {
    if (this.validateStatus()) {
      this.balance += valueDeposit;
      console.log(`O deposito de ${valueDeposit} foi realizado com sucesso.
      Valor atual da conta com deposito é de: R$ ${this.balance.toFixed(2)}`)
    } else {
      console.log('Conta desativada, entre em contato com o seu gerente');
    }
  }

  withdraw = (valueSaque: number): void => {
    if (this.validateStatus()) {
      if (this.balance >= valueSaque) {
        this.balance -= valueSaque;
        console.log(`O Saque de ${valueSaque} foi realizado com sucesso.
      Valor atual da conta é de: R$ ${this.balance.toFixed(2)}`)
      } else {
        console.log(`Deposito não autorizado, pois seu saldo é de: ${this.balance}`)
      }
    } else {
      console.log('Conta desativada, entre em contato com o seu gerente');
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {

    if (this.status) {
      return this.status
    }

    throw new Error()
  }
}