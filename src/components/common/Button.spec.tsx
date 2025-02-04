import { render, screen } from "@testing-library/react";
import { BookStoreThemeProvider } from "../../context/themeContext";
import Button from "./Button";

describe("Button 컴포넌트 테스트", () => {
  it("버튼이 렌더링 되는지 확인", () => {
    render(
      <BookStoreThemeProvider>
        <Button size="large" disabled={false} scheme="normal">
          버튼
        </Button>
      </BookStoreThemeProvider>
    );

    expect(screen.getByText("버튼")).toBeInTheDocument();
  });
  it("size props 적용", () => {
    render(
      <BookStoreThemeProvider>
        <Button size="large" disabled={false} scheme="normal">
          버튼
        </Button>
      </BookStoreThemeProvider>
    );
    expect(screen.getByRole("button")).toHaveStyle({
      fontSize: "1.5rem",
    });
  });
});
