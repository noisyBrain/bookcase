import { expect, test } from "bun:test";

import { BookAPIAgent } from '../src/agents/bookAPIAgent';
import { BookService } from '../src/services/bookService';
import { FakeBookAPIAgent } from "./agents/fakeBookAPIAgent";
import { BookFactory } from "./factory/BookFactory";

/*
 * BookAPIAgent tests
 *
*/
test('BookService should be defined', () => {
  const bookService = new BookService(new FakeBookAPIAgent());

  expect(bookService).toBeDefined();
});

test('BookService should has findBook method defined', () => {
  const bookService = new BookService(new FakeBookAPIAgent());

  expect(bookService.findBook).toBeDefined()
});

test('BookService should return a book', () => {
  const bookService = new BookService(new BookAPIAgent());

  expect(bookService.findBook('tdd')).toEqual({ name: "Test Driven Development" })
});

/*
 * BookAPIAgent tests
 *
*/
test('BookAPIAgent should be defined', () => {
  const bookAPIAgent = new BookAPIAgent();

  expect(bookAPIAgent).toBeDefined();
});

test('BookAPIAgent should has getBook method', () => {
  const bookAPIAgent = new BookAPIAgent();

  expect(bookAPIAgent.getBook).toBeDefined();
});

test('BookAPIAgent should return a book', () => {
  const bookAPIAgent = new BookAPIAgent();
  const foundBook = bookAPIAgent.getBook('tdd');

  expect(foundBook).toEqual({ name: 'Test Driven Development' });
});

test('BookAPI agent should be replaced for FakeBookAPIAgent to false API respond', () => {
  const falseBookAPIAgent = new FakeBookAPIAgent()
  const bookAPIAgent = new BookAPIAgent();

  expect(falseBookAPIAgent).toEqual(bookAPIAgent)
});

test('BookService should inyect FakeBookAPIAgent instead BookAPIAgent', () => {
  const bookService = new BookService(new FakeBookAPIAgent());
  const foundBook = bookService.findBook('TDD')

  expect(foundBook).toEqual({ name: "Test Driven Development"} )
});

test('BookFactory should be defined', () => {
  const bookFactory = new BookFactory(new FakeBookAPIAgent());

  expect(bookFactory).toBeDefined();
});
