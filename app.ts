import { CompanyAccount } from "./class/CompanyAccount"
import { PeopleAccount } from "./class/PeopleAccount"

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Maicon', 123456)
console.log(peopleAccount)
peopleAccount.deposit(1000)

const companyAccount: CompanyAccount = new CompanyAccount('M&A Informatica', 12345789987456132)
console.log(companyAccount)
companyAccount.deposit()
