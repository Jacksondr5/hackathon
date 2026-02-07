import eslintConfigNext from "eslint-config-next";
import eslintConfigNextCoreWebVitals from "eslint-config-next/core-web-vitals";
import eslintConfigNextTypeScript from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { ignores: [".next/**", "next-env.d.ts", "convex/_generated/**"] },
  ...eslintConfigNext,
  ...eslintConfigNextCoreWebVitals,
  ...eslintConfigNextTypeScript,
  eslintConfigPrettier,
];
