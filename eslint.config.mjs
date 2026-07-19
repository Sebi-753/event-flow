// import { defineConfig, globalIgnores } from "eslint/config";
// import nextVitals from "eslint-config-next/core-web-vitals";

// const eslintConfig = defineConfig([
//   ...nextVitals,
//   // Override default ignores of eslint-config-next.
//   globalIgnores([
//     // Default ignores of eslint-config-next:
//     ".next/**",
//     "out/**",
//     "build/**",
//     "next-env.d.ts",
//   ]),
// ]);

// export default eslintConfig;
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import unusedImports from "eslint-plugin-unused-imports";

export default defineConfig([
  ...nextVitals,

  {
    plugins: {
      "unused-imports": unusedImports,
    },

    rules: {
      // Yellow warning for unused imports
      "unused-imports/no-unused-imports": "warn",

      // Yellow warning for unused variables
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      // Disable the default rule
      "no-unused-vars": "off",
    },
  },

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
