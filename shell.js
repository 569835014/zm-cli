const shell = require('shelljs')
module.exports = {
    removePath(path) {
        try {
            return shell.rm('-rf', path);
        } catch (e) {
            console.log(e)
        }

    }
}