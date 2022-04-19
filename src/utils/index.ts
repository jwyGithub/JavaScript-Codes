export function createElement<T>(tag: keyof HTMLElementTagNameMap, classList?: string[]) {
    const element = document.createElement(tag);
    classList && element.classList.add(...classList);
    return element as unknown as T;
}

