const fs = require('fs');
const path = require('path');
const os = require('os');

const picFolder = process.argv[2]
const picDir = '/Users/jeonghun/Documents/projects/node/' + picFolder

function video(file) {
    const videoDir = picDir + '/video';
    if (!fs.existsSync(videoDir))
        fs.mkdirSync(videoDir);

    fs.rename(picDir + '/' + file, videoDir+ '/' + file, (err) => {
        if (err) throw err;
        console.log('Video file moved!');
    });
}

function captured(file) {
    const capturedDir = picDir + '/captured';
    if (!fs.existsSync(capturedDir))
        fs.mkdirSync(capturedDir);

    fs.rename(picDir + '/' + file, capturedDir+ '/' + file, (err) => {
        if (err) throw err;
        console.log('Captured file moved!');
    });
}

function duplicated(file) {
    const duplicatedDir = picDir + '/duplicated';
    if (!fs.existsSync(duplicatedDir))
        fs.mkdirSync(duplicatedDir);
    const findOg = file.split('E');
    const ogFile = findOg.join('');
    fs.rename(picDir + '/' + ogFile, duplicatedDir+ '/' + ogFile, (err) => {
        if (err) throw err;
        console.log('duplicated file moved!');
    });
}

fs.readdir(picDir, function(error, filelist){
    const filename = filelist;
    filename.forEach((file) => {
        const extName = path.extname(file);
        if (extName === '.mp4' || extName === '.mov') {
            video(file);
        } else if(extName === '.png' || extName === '.aae') {
            captured(file);
        } else if(file.match('E')) {
            duplicated(file);
        }
    }
)});
