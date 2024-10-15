import { existsSync, lstatSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import type { suffix } from './config';

export interface ObjectKey {
    [key: string]: any;
}

export type GetFiles = Array<{
    fileName: string;
    filePath: string;
}>;

export const isDir = (path: string): boolean => {
    return existsSync(path) && lstatSync(path).isDirectory();
};

/**
 * @description 是否是文件
 * @param path
 * @returns boolean
 */
export const isFile = (path: string): boolean => {
    return lstatSync(path).isFile();
};

/**
 * @description 是否存在文件
 * @param path
 * @return boolean
 */
export const hasFile = (path: string) => {
    return existsSync(path);
};

/**
 * @description 获取所有文件夹
 * @param path
 * @returns GetFiles
 */
export const getFiles = (path: string): GetFiles => {
    const dirs = readdirSync(path);
    return dirs.reduce<GetFiles>((result, name) => {
        const fullPath = join(path, name);
        isFile(fullPath) && result.push({ fileName: name, filePath: fullPath });
        return result;
    }, []);
};

/**
 * @description 是否是对象
 * @param data object
 * @returns boolean
 */
export const isObject = (data: object): boolean => {
    return Object.prototype.toString.call(data) === '[object Object]';
};

/**
 * @description 对象是否存在key
 * @param data object
 * @param key string
 * @returns boolean
 */
export const hasKey = (data: object, key: string): boolean => {
    return isObject(data) && Reflect.has(data, key);
};

/**
 * @description 合并配置
 * @param source object
 * @param target object
 * @returns object
 */
export function mergeConfig<T extends ObjectKey>(source: ObjectKey, target: T): T {
    const isObject = (data: any) => Object.prototype.toString.call(data) === '[object Object]';
    const hasKey = (data: any, key: string) => isObject(data) && Reflect.has(data, key);
    for (const key in target) {
        if (!hasKey(source, key)) {
            source[key] = target[key];
            isObject(target[key]) && mergeConfig(source[key], target[key]);
        } else {
            isObject(target[key]) && mergeConfig(source[key], target[key]);
        }
    }

    return source as T;
}

/**
 * @description 分离样式
 * @param files GetFiles
 * @param suffixs Array<string>
 */
export function extract(files: GetFiles, suffixs: suffix[]) {
    return suffixs.reduce(
        (result, suffix) => {
            result[suffix] = files.filter(item => item.fileName.endsWith(`.${suffix}`));
            return result;
        },
        {} as { [key in suffix]: GetFiles }
    );
}
