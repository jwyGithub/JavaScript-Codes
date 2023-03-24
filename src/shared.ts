import { existsSync, lstatSync, readdirSync } from 'fs';
import { join } from 'path';

export type ObjectKey<T = {}> = T extends { [key: string]: any } ? T : { [key: string]: any };

export type GetDirs = Array<{
    dirName: string;
    dirPath: string;
}>;

/**
 * @description 是否是文件夹
 * @param path
 * @returns
 */
export const isDir = (path: string): boolean => {
    return lstatSync(path).isDirectory();
};

/**
 * @description 是否是文件
 * @param path
 * @returns
 */
export const isFile = (path: string): boolean => {
    return lstatSync(path).isFile();
};

/**
 * @description 是否存在文件
 * @param path
 * @returns
 */
export const hasFile = (path: string) => {
    return existsSync(path);
};

/**
 * @description 获取所有文件夹
 * @param path
 * @returns
 */
export const getFiles = (path: string): GetDirs => {
    const dirs = readdirSync(path);
    return dirs.reduce<GetDirs>((result, name) => {
        const fullPath = join(path, name);
        isFile(fullPath) && result.push({ dirName: name, dirPath: fullPath });
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
export const mergeConfig = <T>(source: ObjectKey<T>, target: ObjectKey<T>): ObjectKey<T> => {
    if (isObject(target)) {
        for (const key in target) {
            if (!hasKey(source, key)) {
                source[key] = target[key];
                if (isObject(source[key])) {
                    mergeConfig(source[key], target[key]);
                }
            } else {
                mergeConfig(source[key], target[key]);
            }
        }
    }

    return source;
};

