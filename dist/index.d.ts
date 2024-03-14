import { PluginAPI, ProjectOptions } from '@vue/cli-service';

declare function injectStyle(api: PluginAPI, options: ProjectOptions): void;

export = injectStyle;
