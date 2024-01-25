const fs = require('node:fs');

const dir = process.cwd();

fs.readFile(dir+'/file.md', 'utf-8', (err: any, fd: any) => {
    console.log(fd)
})