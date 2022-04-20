/**
 * @description 获取dom相对于document的偏移量
 * @param el { HTMLElement }
 * @returns { { top: number, left: number } }
 */
function getOffset<T extends HTMLElement>(el: T): { top: number; left: number } {
    const { top, left } = el.getBoundingClientRect();
    const { scrollTop, scrollLeft } = document.body;
    return {
        top: top + scrollTop,
        left: left + scrollLeft
    };
}

console.log(getOffset(document.body));
// {top: 0, left: 0}

String.prototype.split;
/**
 * @description 获取文件名后缀
 * @param fileName { string }
 * @returns
 */
function getFileExt(fileName: string): string {
    //获取最后一个.的位置
    var index = fileName.lastIndexOf('.');
    //获取后缀
    var ext = fileName.substr(index + 1);
    return ext;
}

console.log(getFileExt('a.ts'));
// ts

String.prototype.split;
/**
 * @description 获取链接中的文件名
 * @param url { string }
 * @returns { string }
 */
function getFileName(url: string): string {
    let num = url.lastIndexOf('/') + 1;
    let name = url.substring(num);
    return name;
}
console.log(getFileName('http://xxxx/xxx/xx/file.png'));
// file.png

String.prototype.split;
/**
 * @description 获取url中的query参数
 * @param url { string }
 * @returns {  }
 */
function urlQuery<T extends { [key: string]: any }>(url: string = window.location.href): T {
    const queryArray = url.split('?')[1].split('&');
    const queryMap: { [key: string]: any } = {};
    queryArray.forEach(item => {
        queryMap[item.split('=')[0]] = item.split('=')[1];
    });
    return queryMap as T;
}
// 查询所有参数
console.log(urlQuery<{ name: string; age: number }>('http://www/baidu.com?name=12&age=1000'));
// {name: "12", age: "1000"}

String.prototype.split;

/**
 * @description 加密手机号
 * @param phone 手机号
 * @param start 开始位置
 * @param num 加密位数
 * @returns
 */
function encryptionPhone(phone: string, start: number = 4, num: number = 3): string {
    // 判断传入的手机号码位数，不符合则返回提示
    if (String(phone).length > 11) {
        return '手机号码格式错误';
    } else {
        let newmobile = String(phone).slice(0, start - 1) + '*'.repeat(num) + String(phone).slice(start - 1 + num, String(phone).length);
        // 如果新的手机号位数过长，则返回固定11位手机号
        return newmobile.slice(0, 11);
    }
}
console.log(encryptionPhone('15212345678'));
// 152***45678

String.prototype.split;
String.prototype.split;
String.prototype.split;
String.prototype.split;
String.prototype.split;
String.prototype.split;
String.prototype.split;
String.prototype.split;
String.prototype.split;
String.prototype.split;
String.prototype.split;

