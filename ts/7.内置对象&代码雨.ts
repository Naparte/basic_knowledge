// 1.ecma Number Date  RegExp Error XMLHttpRequest
// 2.dom querySelect MouseEvent
// 3.bom promise localstorage location cookie


// 1.ecma Number Date  RegExp Error XMLHttpRequest
let num: Number = new Number();
let date: Date = new Date();
let reg: RegExp = new RegExp(/\w/);
let error: Error = new Error('error');
let xhr: XMLHttpRequest = new XMLHttpRequest();

// HTML(元素名称)Element HTMLElemnet Element
let div: HTMLDivElement | null = document.querySelector('div');
let input: HTMLInputElement | null = document.querySelector('input');
let div3: HTMLElement | null = document.querySelector('footer'); // 不知道的元素都会归到 HTMLElement 
let div4: Element | null = document.querySelector('footer') as Element; // 可以直接定义为Element

// 元素集合
let divList: NodeList = document.querySelectorAll('div footer');
let divList2: NodeListOf<HTMLDivElement | HTMLElement> = document.querySelectorAll('div footer'); // 类型固定用NodeListOf传入类型

// bom API
let local: Storage = localStorage;
let loc: Location = location;
let promise: Promise<number> = new Promise((r) => { r(222) })
let cookie:string = document.cookie;