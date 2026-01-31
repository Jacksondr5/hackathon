import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

export default [
  { ignores: [".next/**", "next-env.d.ts", "convex/_generated/**"] },
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
];
