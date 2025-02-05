import { useEffect, useState } from "react";
import { Category } from "../models/category.model";
import { fetchCategory } from "../api/category.api";
import { useLocation } from "react-router-dom";

export const useCategory = () => {
  const location = useLocation();
  const [category, setCategory] = useState<Category[]>([]);

  const setActive = () => {
    const params = new URLSearchParams(location.search);
    if (params.get("category_id")) {
      setCategory((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            isActive: item.id === Number(params.get("category_id")),
          };
        });
      });
    } else {
      setCategory((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            isActive: false,
          };
        });
      });
    }
  };
  useEffect(() => {
    fetchCategory().then((category) => {
      if (!category) return;
      setCategory([{ id: null, category_name: "전체" }, ...category]);
      setActive();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setActive();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return { category };
};
