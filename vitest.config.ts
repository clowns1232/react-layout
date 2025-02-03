// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // 전역 expect, test 등 사용
    environment: "jsdom", // DOM 테스트를 위한 jsdom 환경
    setupFiles: ["./setupTests.ts"], // jest-dom 확장 매처를 등록하는 설정 파일
  },
});
