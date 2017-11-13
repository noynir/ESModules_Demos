const http2 = require('http2');
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const depTree = require('dependency-tree');
//console.log(JSON.parse(stats));
const { HTTP2_HEADER_PATH } = http2.constants;

//console.log(stats);

// Create a plain-text HTTP/2 server
const server = http2.createSecureServer({
    cert: fs.readFileSync(path.join(__dirname, '/server.crt')),
    key: fs.readFileSync(path.join(__dirname, '/server.key'))

},onRequest);
const base = path.join(__dirname,'..');
const root = base.split(path.sep).slice(-1)[0];
const homePath = '/index.html';

const deplist =depTree.toList({
    filename:path.join(base,'/js/index.js'),
    directory:path.join(base,'/js')
    // filter: path => path.indexOf('lodash') === -1, // optional
});
const deplistLodash =depTree.toList({
    filename:path.join(base,'/js/lodash/lodash.js'),
    directory:path.join(base,'/js/lodash'),
});

console.log(base);
function onRequest (req, res) {
    const reqPath = req.url ? (req.url === '/' ? homePath : req.url) : homePath ;
    const fpath = path.join(base,reqPath);
    console.log(fpath);
    fs.open(fpath,'r',(err,file)=>{
        if (err) {
            res.statusCode = 404
            res.end();
            return
        }

        // Push with index.html
        if (reqPath === '/js/index.js') {
            deplist.forEach((item)=> push(res.stream, item));
        }
        if (reqPath === '/js/lodash/lodash.js') {
            deplistLodash.forEach((item)=> push(res.stream, item));
        }

        // Serve file
        res.stream.respondWithFD(file, {
            'content-type': mime.getType(fpath),
            ':status': 200
        })
    });
    //
    // File not found


    // res.stream.respond({
    //     'content-type': 'text/html',
    //     ':status': 200
    // });
    // res.stream.end('<h1>Hello World</h1>');
}

function push (stream, _path) {

    const fileName = path.parse(_path).base;
    const relPath = buildUrl(_path);
    const mimeType = mime.getType(_path);
    console.log(relPath);
    const file = fs.openSync(_path,'r');

    if (!file) {
        console.log(`nofile ${path}`);
        return;
    }

    stream.pushStream({ [HTTP2_HEADER_PATH]: relPath }, (pushStream) => {
        pushStream.respondWithFD(file,{
            'content-type': mimeType,
            ':status': 200
        })
    })
}

function buildUrl(filePath){
    const pathSplit  = filePath.split(path.sep);
    const rootIndex = pathSplit.indexOf(root);

    const urlPath = pathSplit.slice(rootIndex+1);


    return `/${urlPath.join('/')}`;
}

// server.on('stream', (stream, headers) => {
//     // stream is a Duplex
//     stream.respond({
//         'content-type': 'text/html',
//         ':status': 200
//     });
//     stream.end('<h1>Hello World</h1>');
// });

server.listen(8082);
