import { BookAPIAgent } from '../agents/bookAPIAgent';

export class BookService {
  constructor(private readonly _agent: BookAPIAgent) {
    this._agent = _agent
  }

  findBook(name: string) {
    return this._agent.getBook(name)
  }
}
