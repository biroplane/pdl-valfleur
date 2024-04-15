import antfu from "@antfu/eslint-config"
import withNuxt from "./nuxt/eslint.config.mjs"
export default withNuxt(
  antfu({
    // Enable stylistic formatting rules
    // stylistic: true,
    
    // Or customize the stylistic rules
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: "double", // or 'double'
    },
    
    // TypeScript and Vue are auto-detected, you can also explicitly enable them:
    typescript: true,
    vue: true,
    
    rules: {
      "no-console": "off",
      "ts/no-use-before-define": "off",
    },
    
    // Disable jsonc and yaml support
    jsonc: false,
    yaml: false,
    
    // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
    ignores: [
      "**/fixtures",
      // ...globs
    ],
  })
  
)