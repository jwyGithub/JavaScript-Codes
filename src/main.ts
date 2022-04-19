import hljs from 'highlight.js';
import './assets/github-dark-dimmed.min.css';
import './scss/main.scss';

import { createElement } from './utils/index';

import '../public/code';

/**
 * @description 通知
 */
function notify() {
    const notify = document.querySelector('.notify') as HTMLElement;
    notify.textContent = '复制成功';
    notify.style.bottom = '90%';
    setTimeout(() => {
        notify.style.bottom = '9999px';
    }, 3000);
}

/**
 * @description 拷贝代码
 * @param code
 */
function copyCode(code: string) {
    const textarea = createElement<HTMLTextAreaElement>('textarea', ['copy-textarea']);
    document.getElementById('root')?.appendChild(textarea);
    textarea.value = code;
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    notify();
}

/**
 * @description 创建代码块
 * @param code
 */
function createBlock(code: string, i: number = 0) {
    if (code.trim()) {
        const notes = code.match(/(?:^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/g);
        let codeTitle;
        if (notes) {
            let description = notes[0].match(/(?<=@description)(.*)\n/);
            if (description) {
                codeTitle = description[0];
            }
        }
        const container = createElement<HTMLElement>('div', ['code-container']);
        const preEle = createElement<HTMLPreElement>('pre');
        const codeEle = createElement<HTMLElement>('code', ['typescript']);
        const copyButton = createElement<HTMLButtonElement>('a', ['copy-button']);
        const title = createElement<HTMLElement>('h4', ['code-title']);
        title.textContent = `${i + 1}.${codeTitle}`;
        copyButton.addEventListener('click', () => copyCode(code));
        codeEle.textContent = code.trim();
        container.appendChild(title);
        preEle.appendChild(codeEle);
        preEle.appendChild(copyButton);
        container.appendChild(preEle);

        document.getElementById('root')?.appendChild(container);
    }
}

/**
 * @description 获取源码
 */
function getSourceCode() {
    fetch('code.ts')
        .then(res => res.text())
        .then(code => {
            code.split(`String.prototype.split;`).forEach(createBlock);
        })
        .finally(() => {
            hljs.highlightAll();
        });
}

getSourceCode();

