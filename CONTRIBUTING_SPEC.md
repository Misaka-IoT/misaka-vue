# Contributing Spec | 贡献规范

## Commits & Pull Request

完成代码的修改后，请先运行 `pnpm lint` 来检测你的代码中的问题并格式化。修改并确认代码无误且符合规范后提交。

不论你是否拥有直接修改代码仓库的权限，除非你已与大多数开发者沟通或你确定你的提交正确且不具有破坏性（不会影响到他人的正常开发，如内容的增删修改），否则请尽量使用 Pull Request 来避免破坏性提交。

## Code Styles | 代码样式

*你可以通过运行 `pnpm lint` 来处理这些问题，但我们仍建议你在编写时就按照标准。

0. 代码可读性（空格、换行）

```typescript
// e.g.
const add = (a: number, b: number): number => (a + b) * (a - b);
const fetchToJSONAndPrint = (target: string): void => {
  fetch(target)
    .then((response) => response.json())
    .then((data) => console.log(data));
};
// 错误示范
const add=(a:number,b:number):number=>{
  return (a+b)*(a-b);
};
const fetchToJSONAndPrint=(target:string):void=>{
  fetch(target).then((response)=>response.json())
  .then((data)=>console.log(data));
};
```

1. 两空格缩进

```typescript
// e.g.
const fun = (param) => {
  return (param + 1);
};
```

2. 单引号

```typescript
// e.g.
const str = 'str content';
```
