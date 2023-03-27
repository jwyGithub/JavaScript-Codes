import type { PluginAPI, ProjectOptions } from '@vue/cli-service';
import { extract, getFiles, mergeConfig } from './shared';
import type { suffix } from './config';
import { PLUGIN_NAME, getPluginConfig, styleConfig } from './config';

function injectStyle(api: PluginAPI, options: ProjectOptions) {
    const { css = {}, pluginOptions = {} } = options;
    const root = api.getCwd();

    // 插件配置
    const pluginConfig = mergeConfig(pluginOptions, getPluginConfig(root))[PLUGIN_NAME];

    // 所有的样式文件路径
    const files = getFiles(pluginConfig.path);

    const extractStyle = extract(files, pluginConfig.suffixs);
    const cssOptions = mergeConfig(css, styleConfig.css);

    Object.keys(extractStyle).forEach(suffix => {
        const additionalData = cssOptions.loaderOptions[suffix as suffix].additionalData ?? '';
        cssOptions.loaderOptions[suffix as suffix].additionalData =
            extractStyle[suffix as suffix].map(item => `@import "${item.filePath}";`).join('') + `${additionalData}`;
    });

    options.css = cssOptions;
}

export default injectStyle;

