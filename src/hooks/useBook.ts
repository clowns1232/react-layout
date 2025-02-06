import { useEffect, useState } from "react";
import { BookDetail } from "../models/book.model";
import { fetchBook, likeBook, likeRemoveBook } from "../api/books.api";
import { useAuthStore } from "../\bstore/authStore";
import { useAlert } from "./useAlert";
import { addCart } from "../api/cart.api";

export const useBook = (bookId: string | undefined) => {
  const [book, setBook] = useState<BookDetail | null>(null);
  const [cartAdded, setCartAdded] = useState(false);

  const { isLoggedIn } = useAuthStore();
  const showAlert = useAlert();

  const likeToggle = () => {
    if (!isLoggedIn) {
      showAlert("로그인이 필요합니다.");
      return;
    }
    if (!book) return;

    if (book.liked) {
      likeRemoveBook(book.id).then(() => {
        setBook({
          ...book,
          liked: false,
          likes: book.likes - 1,
        });
      });
    } else {
      likeBook(book.id).then(() => {
        setBook({
          ...book,
          liked: true,
          likes: book.likes + 1,
        });
      });
    }
  };
  useEffect(() => {
    if (!bookId) return;
    fetchBook(bookId).then((book) => {
      setBook(book);
    });
  }, [bookId]);

  const addToCart = (quantity: number) => {
    if (!book) return;
    addCart({
      book_id: book.id,
      quantity: quantity,
    }).then(() => {
      setCartAdded(true);
      setTimeout(() => {
        setCartAdded(false);
      }, 3000);
    });
  };

  return { book, likeToggle, addToCart, cartAdded };
};
