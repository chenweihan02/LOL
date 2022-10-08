# LOL 网页

## banner部分
![](./readme_asset/banner.png)

3种实现方式（原生JS）
1. 将 `ul` 的 `li` 排成一整行 `img left[0, -100%, -200%...]`
2. **(当前使用)** `li` 有3个位置，当前展示的图片`(index)`  `left: 0`， `(index < current) left: -100%` `(index > current) left: 100%`
3. 无限轮播

