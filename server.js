import fs from 'fs/promises'
import { diff } from './src/buffer-diff.js'

const readFiles = async (firstFileName, secondFileName)  => {
    const input =  await fs.readFile(firstFileName )
    const inputCompare = await fs.readFile(secondFileName )
    return {input, inputCompare}
}


const bufCompare = async () => {
    const {input, inputCompare} = await readFiles('input.txt','compare.txt')
    console.log(input,'\n', inputCompare);
    console.log(input.equals(inputCompare))
    const changes = diff(input, inputCompare)
    console.log('changes:', changes)
    const [{index, left, right}] = changes
    console.log('index: ',index)
    console.log('input left: ',left.toString('utf8'))
    console.log('compare right: ',right.toString('utf8'))
}
bufCompare()

//const app = express()
//import { Buffer } from 'node:buffer'
//import {createReadStream} from 'fs'
//import express from 'express'
//    input.should.eql(inputCompare)

//const createBuf = async (input) => {
//        const buf1 = Buffer.from(input)
//        const buf2 = Buffer.from(inputCompare)
//}

//const buf1 = Buffer.from(input);
//const buf2 = Buffer.from(inputCompare);
//        .then(()=>(console.log))
//        .then((inputCompare)=>(createBuf(inputCompare)))

//        .then((input)=>createBuf(input))

//        createBuf()
//        buf1.should.eql(buf2)
//return buf1.should.eql(buf2)
//readAndCompare()
//
//
////Для огромных файлов, картинок и тд
//const buf1Hash = crypto.createHash('sha256').update(buf1).digest();
//const buf2Hash = crypto.createHash('sha256').update(buf2).digest();
//buf1Hash.should.eql(buf2Hash);








//var diffStream = require('diff-stream');
//
//var fromArray = require('read-stream').array;
//var stream1 = fromArray([{id: 1, name: 'albert'}, {id: 2, name: 'bob'}, {id: 3, name: 'cathy'}]);
//var stream2 = fromArray([{id: 1, name: 'albert'}, {id: 2, name: 'joe'}, {id: 4, name: 'thomas'}, {id: 5, name: 'xavier'}]);
//
//diffStream(stream1, stream2).pipe(process.stdout);


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//for comparing large files e.g. images when asserting file uploads a comparison of buffers or strings with should.eql takes ages. i recommend asserting the buffer hash with the crypto module:
//
//const buf1Hash = crypto.createHash('sha256').update(buf1).digest();
//const buf2Hash = crypto.createHash('sha256').update(buf2).digest();
//buf1Hash.should.eql(buf2Hash);
//an easier approach is asserting the buffer length like so:
//
//buf1.length.should.eql(buf2.length)


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//app.get('/', (req,res) => {
//    const readStream = createReadStream(firstFileName)
//    readStream.on('data', (data) => {
//        res.write(data)
//    })
//    readStream.on('end', (data)=>{
//        res.status(200).send()
//    })
//})
//app.listen(3000)