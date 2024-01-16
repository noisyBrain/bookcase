export class FakeBookAPIAgent {
  getBook(name: string) {
    return { name: 'Test Driven Development' }
  }
}
