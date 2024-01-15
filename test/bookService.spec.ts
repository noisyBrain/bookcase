import { expect, test } from "bun:test";

import { BookAPIAgent } from '../src/agents/bookAPIAgent';
import { BookService } from '../src/services/bookService';

test('BookService should be defined', () => {
  const bookService = new BookService(new BookAPIAgent());

  expect(bookService).toBeDefined();
})

test('BookService should has findBook method defined', () => {
  const bookService = new BookService(new BookAPIAgent());

  expect(bookService.findBook).toBeDefined()
})

test('BookService should return a book', () => {
  const bookService = new BookService(new BookAPIAgent());

  expect(bookService.findBook('tdd')).toEqual({ name: "Test Driven Development" })
})

test('BookAPIAgent should be defined', () => {
  const bookAPIAgent = new BookAPIAgent();

  expect(bookAPIAgent).toBeDefined();
})

test('BookAPIAgent should has getBook method', () => {
  const bookAPIAgent = new BookAPIAgent();

  expect(bookAPIAgent.getBook).toBeDefined();
})

test('BookAPIAgent should return a book', () => {
  const bookAPIAgent = new BookAPIAgent();
  const foundBook = bookAPIAgent.getBook('tdd');

  expect(foundBook).toEqual({ name: 'Test Driven Development' });
})
