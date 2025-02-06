import { Book, BookDetail } from "../models/book.model";
import { Pagination } from "../models/pageination.model";
import { httpClient } from "./http";

interface FetchBooksParams {
  category_id?: number;
  news?: boolean;
  currentPage?: number;
  limit: number;
}

interface FetchBooksResponse {
  books: Book[];
  pagination: Pagination;
}

export const fetchBooks = async (params: FetchBooksParams) => {
  try {
    const res = await httpClient.get<FetchBooksResponse>("/books", {
      params: params,
    });
    return res.data;
  } catch (error) {
    console.log(error);

    return {
      books: [],
      pagination: {
        totalCount: 0,
        currentPage: 1,
      },
    };
  }
};

export const fetchBook = async (bookId: string) => {
  const res = await httpClient.get<BookDetail>(`/books/${bookId}`);
  return res.data;
};

export const likeBook = async (bookId: number) => {
  const res = await httpClient.post<BookDetail>(`/likes/${bookId}`);
  return res.data;
};

export const likeRemoveBook = async (bookId: number) => {
  const res = await httpClient.delete<BookDetail>(`/likes/${bookId}`);
  return res.data;
};
