const gitClone = require('git-clone-promise')
const fs = require('fs')
const path = require('path')
module.exports = {
    clone(repo, _path, answers) {
        gitClone(repo, _path).then((res) => {
            let packagePath = path.join(_path, 'package.json')
            try {
                let package = JSON.parse(fs.readFileSync(packagePath, 'utf-8'))
                let newPackage = Object.assign({}, package, answers)
                fs.writeFileSync(packagePath, JSON.stringify(newPackage), 'utf-8')
            } catch (e) {
                console.log(e)
            }
            console.log('下载完成！')
        })
    }
}