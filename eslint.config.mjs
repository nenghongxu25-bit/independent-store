import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    rules: {
      // 关闭未转义实体检查，解决引号报错问题
      'react/no-unescaped-entities': 'off',
    },
  },
  // 覆盖默认忽略配置
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
])

export default eslintConfig