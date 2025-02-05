import { render, screen } from "@testing-library/react";
import { BookStoreThemeProvider } from "../../context/themeContext";
import { Book } from "../../models/book.model";
import BooksItem from "./BooksItem";
const dummyBook: Book = {
  id: 1,
  title: "리액트를 다루는 기술",
  img: 101,
  category_id: 1,
  form: "Paperback",
  isbn: "9788968488908",
  summary: "리액트를 깊이 있게 배우기 위한 필수 가이드",
  detail: "리액트의 기본 개념부터 고급 기법까지 다루는 실전 가이드.",
  author: "김민준",
  pages: 800,
  contents: "1장: 리액트 기초\n2장: 컴포넌트 활용\n3장: 상태 관리...",
  price: 35000,
  likes: 120,
  pubDate: "2023-06-15",
};

describe("Book 컴포넌트 테스트", () => {
  it("렌더 확인", () => {
    render(
      <BookStoreThemeProvider>
        <BooksItem book={dummyBook} />
      </BookStoreThemeProvider>
    );

    expect(screen.getByText(dummyBook.title)).toBeInTheDocument();
    expect(screen.getByText(dummyBook.summary)).toBeInTheDocument();
    expect(screen.getByText(dummyBook.author)).toBeInTheDocument();
    expect(screen.getByText("35,000원")).toBeInTheDocument();
    expect(screen.getByAltText(dummyBook.title)).toHaveAttribute(
      "src",
      `https://picsum.photos/id/${dummyBook.id}/600/600`
    );
  });
});
