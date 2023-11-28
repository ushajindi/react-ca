#!/usr/bin/env node

const fs = require('fs-extra');
const { program } = require('commander');

class Create {
    constructor(
        componentName,
        flag = 'tsx',
        styleFlag = 'scss',
        styleModule = false
    ) {
        this.path = './src/Components';
        this.componentName = componentName;
        this.flag = flag;
        this.styleFlag = styleFlag;
        this.styleModules = styleModule;
    }

    PathExists() {
        const app = `${this.path}/${this.componentName}/${this.componentName}.${this.flag}`;
        const style = `${this.path}/${this.componentName}/${this.componentName}.${
            this.styleModules && 'module.'
        }${this.styleFlag}`;
        if (this.styleModules) {
            this.withStyleModules();
        } else {
            if (this.flag === 'jsx') {
                fs.ensureDir(`${this.path}/${this.componentName}`);
                fs.outputFile(
                    app,
                    this.JsTemplate(this.componentName, this.styleFlag, false)
                );
                fs.outputFile(style, ' ');
                return;
            }
            if (this.flag === 'tsx') {
                fs.ensureDir(`${this.path}/${this.componentName}`);
                fs.outputFile(
                    app,
                    this.TsTemplate(this.componentName, this.styleFlag, false)
                );
                fs.outputFile(style, ' ');
            }
        }
    }

    withStyleModules() {
        const app = `${this.path}/${this.componentName}/${this.componentName}.${this.flag}`;
        const style = `${this.path}/${this.componentName}/${this.componentName}.module.${this.styleFlag}`;
        if (this.flag === 'tsx') {
            fs.ensureDir(`${this.path}/${this.componentName}`);
            fs.outputFile(
                app,
                this.TsTemplate(this.componentName, this.styleFlag, true)
            );
            fs.outputFile(style, ' ');
        }
        if (this.styleFlag === 'jsx') {
            fs.ensureDir(`${this.path}/${this.componentName}`);
            fs.outputFile(
                app,
                this.JsTemplate(this.componentName, this.styleFlag, true)
            );
            fs.outputFile(style, ' ');
        }
    }

    TsTemplate(componentName, styleFlag, sm) {
        return `
import React from "react";
import "./${componentName}.${sm && 'module'}.${styleFlag}";

type PropsType={
  
}
const ${componentName}:React.FC<PropsType> = () => {
  return (
          <div>${componentName}</div>
  );
};

export default ${componentName};`;
    }

    JsTemplate(componentName, styleFlag, sm) {
        return `
import React from "react";
import "./${componentName}.${sm && 'module'}.${styleFlag}"


const ${componentName} = () => {
    return (
        <div>${componentName}</div>
    )
}

export default ${componentName}
`;
    }
}

program
    .version('1.0.0')
    .description('CLI для быстрого создания React Components')
    .option('-c, --component <component>', 'Имя компонента')
    .option(
        '-f, --flag <flag>',
        'Флаг для выбора TypeScript (ts) или JavaScript (js)'
    )
    .option('-s, --style <style>', 'Флаг для выбора стилей (scss, css)')
    .option(
        '-sm, --styleModule <styleModule>',
        'Флаг для выбора стилей (style module) укажите <yes> или <у>'
    );

program.parse(process.argv);

const options = program.opts();

if (!options.component || !options.flag || !options.style) {
    console.error(
        'Необходимо указать все аргументы: --component, --flag, --style'
    );
    process.exit(1);
}

const creator = new Create(
    options.component,
    `${options.flag}x`,
    options.style,
    options.styleModule
);
creator.PathExists();
