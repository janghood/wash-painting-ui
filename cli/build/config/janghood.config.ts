/**
 * @description 极客江湖插件配置文件
 * @author 阿怪
 * @date 2022/4/6 4:55 PM
 * @version v1.0.0
 *
 * 公司的业务千篇一律，复杂的代码好几百行。
 */
import { defineJhConfig } from '@janghood/config';

const firstUpperCase = (str: string) => {
  return `${str[0].toUpperCase()}${str.slice(1, str.length)}`;
};

const sourceSymbolTranslator = (dirList: string[]) => {
  const lastDir = firstUpperCase(dirList[dirList.length - 1]);
  return `M${lastDir}`;
};

export default defineJhConfig({
  apiExtractor: {
    include: ['../../lib/components/**/**/*.d.ts', '../../core/components/**/**/*.d.ts'],
    exclude: ['../../lib/components/types/*.d.ts', '../../core/components/types/*.d.ts'],
    document: {
      webTypes: {
        packageUrl: '../../lib/package.json',
        active: true,
        webTypesInfo: {
          framework: 'vue',
          'default-icon': './icons/logo.svg'
        },
        sourceSymbolTranslator
      },
      vscode: {
        active: true,
        packageUrl: '../../lib/package.json'
      }
    },
    annotate: {
      vue: {
        type: 'block',
        onInit: (param) => {
          if (param.name === 'value') {
            param.name = 'modelValue';
          }
          return param;
        }
      }
    }
  }
});
