import { DioAccount} from './DioAccount'

export class PeopleAccount extends DioAccount {
  private readonly doc_id: number

  constructor(doc_id: number, name: string, accountNumer: number) {
    super(name, accountNumer)
    this.doc_id = doc_id
  }
}