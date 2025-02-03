import { render, screen } from "@testing-library/react";
import { BookStoreThemeProvider } from "../../context/themeContext";
import InputText from "./InputText";
import React from "react";

describe("InputText 컴포넌트 테스트", () => {
  it("InputText 렌더링 되는지 확인", () => {
    render(
      <BookStoreThemeProvider>
        <InputText placeholder="인풋테스트" />
      </BookStoreThemeProvider>
    );

    expect(screen.getByPlaceholderText("인풋테스트")).toBeInTheDocument();
  });
  it("InputText ref 테스트", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(
      <BookStoreThemeProvider>
        <InputText placeholder="인풋테스트" ref={ref} />
      </BookStoreThemeProvider>
    );
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
