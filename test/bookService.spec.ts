import { describe, expect, test } from "bun:test";

import { BookService } from '../src/services/bookService';


test('BookService should be defined', () => {
  const bookService = new BookService();

  expect(bookService).toBeDefined();
})

test('BookService should has findBook method defined', () => {
  const bookService = new BookService()

  expect(bookService.findBook).toBeDefined()
})

test('BookService should return a book', () => {
  const bookService = new BookService()

  expect(bookService.findBook('tdd')).toEqual({ name: "Test Driven Development" })
})
