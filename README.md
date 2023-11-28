**CLI tool for quickly creating React components.**

## Installation

To install `react-ac` globally in your project, run the following command:

```bash
npm install -g react-ac
```
## Usage
After installation, you can use react-ac to create new React components. The tool supports parameters to customize the created component.
```bash
npm react-ac -c MyComponent -f ts -s scss
```

## Parameters 
-c, --component <component>: Name of the component to create (required).
-f, --flag <flag>: Flag to choose TypeScript (ts) or JavaScript (js) (required).
-s, --style <style>: Flag to choose styles (scss, css) (required).
-sm, --styleModule <styleModule>: Flag to choose styles in module mode (specify <yes> or <у>)
```bash
react-ac -c Header -f js -s css -sm yes
```
```bash
react-ac -c Header -f js -s css -sm yes
```
## Example
Suppose you want to create a TypeScript component named MyComponent with SCSS styles. Run the following command:
```bash
react-ac -c MyComponent -f ts -s scss
```
This will create the component structure in the ./src/Components/MyComponent folder, including the MyComponent.tsx and MyComponent.scss files.


**Инструмент командной строки для быстрого создания компонентов React.**

## Установка

Для установки `react-ac` глобально в вашем проекте выполните следующую команду:

```bash
npm install -g react-ac
```
## Использование
После установки вы можете использовать react-ac для создания новых компонентов React. Инструмент поддерживает параметры для настройки создаваемого компонента.

```bash
react-ac -c MyComponent -f ts -s scss
```
## Параметры:
-c, --component <component>: Имя создаваемого компонента (обязательно).
-f, --flag <flag>: Флаг для выбора TypeScript (ts) или JavaScript (js) (обязательно).
-s, --style <style>: Флаг для выбора стилей (scss, css) (обязательно).
-sm, --styleModule <styleModule>: Флаг для выбора стилей в режиме модуля (указывайте <yes> или <у>).
Примеры использования:
```bash
react-ac -c MyComponent -f ts -s scss
react-ac -c Header -f js -s css -sm yes
```
## Пример
Предположим, вы хотите создать TypeScript-компонент с именем MyComponent и стилями SCSS. Выполните следующую команду:
```bash
react-ac -c MyComponent -f ts -s scss
```
Это создаст структуру компонента в папке ./src/Components/MyComponent, включая файлы MyComponent.tsx и MyComponent.scss.

