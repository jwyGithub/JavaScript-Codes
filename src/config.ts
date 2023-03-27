import { join } from 'path';

/**
 * @description 插件名称
 */
export const PLUGIN_NAME = 'vue-cli-plugin-inject-style';

/**
 * @description 样式配置
 */
export const styleConfig = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: ''
            },
            less: {
                additionalData: ''
            }
        }
    }
};

export type suffix = 'scss' | 'less';

/**
 * @description 处理插件默认配置
 * @param root string
 */
export const getPluginConfig = (
    root: string
): {
    [PLUGIN_NAME]: {
        path: string;
        suffixs: suffix[];
    };
} => {
    return {
        [PLUGIN_NAME]: {
            path: join(root, 'src', 'style'),
            suffixs: ['scss', 'less']
        }
    };
};

