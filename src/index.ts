import { join } from 'path';
import type { PluginAPI, ProjectOptions } from '@vue/cli-service';
import type { ObjectKey } from './shared';
import { getFiles, mergeConfig } from './shared';
const PLUGIN_NAME = 'vue-cli-plugin-inject-style';

type suffix = 'scss' | 'less';

interface StyleConfig {
    path: string;
    suffixs: Array<suffix>;
}

const getDefaultConfig = (root: string) => {
    return {
        [PLUGIN_NAME]: {
            path: join(root, 'src', 'style'),
            suffixs: ['scss', 'less']
        }
    };
};

const target = {
    css: {
        loaderOptions: {
            scss: {},
            less: {}
        }
    }
};

function injectStyle(api: PluginAPI, options: ProjectOptions) {
    const root = api.getCwd();
    const defaultConfig = getDefaultConfig(root);
    const pluginOption: ObjectKey<{ [key: string]: any }> = mergeConfig(options.pluginOptions ?? defaultConfig, defaultConfig);
    const pluginConfig: StyleConfig = pluginOption[PLUGIN_NAME];
    pluginConfig.path = pluginConfig.path ?? defaultConfig[PLUGIN_NAME].path;
    pluginConfig.suffixs = pluginConfig.suffixs ?? defaultConfig[PLUGIN_NAME].suffixs;
    options.css = options.css ?? {};
    const template = mergeConfig<{ [key: string]: any }>(options.css, target.css);
    const files = getFiles(pluginConfig.path);
    const additionalData = template.loaderOptions.scss.additionalData ?? '';
    template.loaderOptions!.scss = {
        additionalData: files.map(item => `@import "${item.dirPath}";${additionalData}`).join(';')
    };
}

export default injectStyle;

