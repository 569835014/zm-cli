function filter(val) {
    return val.toLowerCase()
}

module.exports = [
    {

        type: 'input',
        name: 'name',
        default: '',
        filter,
        message: '文件夹名称'
    },
    {
        type: 'input',
        name: 'description',
        default: 'A project',
        message: '项目描述'
    },
    {
        type: 'input',
        name: 'author',
        default: 'xxx',
        message: '作者'
    },
    {
        type: 'list',
        message: '版本',
        name: 'version',
        choices: [
            {

                name: "vue-cli2.X",
                value: "2"
            },
            {
                name: "vue-cli3.X",
                value: "3"
            }
        ]
    }
]