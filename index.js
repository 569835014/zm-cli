#!/usr/bin/env node
const commander = require('commander')
const inquirer = require('inquirer')
const package = require('./package')
const cloneTemlate = require('./cloneTemlate')
const initCommander = commander.command('init <name> [path]')
const path = require('path')
const fs = require('fs')
let prompt = require('./promptList.js')
let _shell = require('./shell')
let workPath = process.cwd()
commander.version(package.version, '-v,--version')
initCommander.action((name, _path) => {
    prompt[0].default = name
    inquirer.prompt(prompt)
        .then(async (answers) => {
            let repo = _path ? _path : 'https://github.com/569835014/base.git'
            let project = path.join(workPath, `./${name}`)
            try {
                let projectStat = fs.statSync(project)
                if (projectStat.isDirectory()) {
                    inquirer.prompt([
                        {
                            type: 'confirm',
                            message: `${name}文件夹已存在是否覆盖?`,
                            name: 'confirm',
                            default: true
                        }
                    ]).then(async (answer) => {
                        try {
                            if (answer.confirm) {
                                _shell.removePath(project)
                                cloneTemlate.clone(repo, project, answers)
                            }else{
                                console.log('已取消')
                            }
                        } catch (e) {
                            console.log(e)
                        }


                    })
                }
            } catch (e) {
                cloneTemlate.clone(repo, project, answers)
            }
        })
})
commander.parse(process.argv)


