# HexSchool Week3-眼鏡形象網站

[設計稿](https://xd.adobe.com/view/d3d1119a-affd-4f48-8188-f070932224af-8682/screen/9030f53b-bb49-44c3-8d71-9901ad0d5206/specs/)

---

## 共同設定

- container

```css
container{
	max-width: 1110px;
	margin: 0 auto;
}
section{
	padding-top: 60px;
	padding-bottom: 80px;
}
```

- color

```scss
$text-primary: #650300;
$text-secondary: #AA0601; 
$text-light: #fff;
$text-dark: #000;
$text-l-dark: #212529;
$text-date: #707070;

$bg-primary: #AA0601; 
$bg-secondary: #FBF2F2;

$border-light: #fff;
$list-active: blue;
$btn-active: #650300;
```

- font-size: 14, 16, 20, 24, 36, 48, 64, 72

```scss
h1 -> logo

.slogan{
	font-size: 64px;
	span{
		font-size: 32px;
	}
}

.title{
	font-size: 48px;
}

```

- line-height

```scss
body{
	line-height: 1.5;
}
```

- margin, padding

    padding: 60, 80, 88

    margin: 16, 24, 32, 40, 48, 64

- module/list

---

## 檢討

1. h1.logo>a：圖片取代文字，logo圖放在a連結，要下`display: block`，要下圖片`寬高`

```scss
.logo a{
	display: block;
	background: url() no-reapt;
	width: ...;
	height: ...;
	text-indent: 101%;
  overflow: hidden;
  white-space: nowrap;
}
```

header + footer 1.5hr

page/index 2.5hr