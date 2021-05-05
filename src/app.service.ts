import { Injectable } from '@nestjs/common';
import csv from 'csvtojson'

@Injectable()
export class AppService {
//constructor (private readonly csvParser:CsvParser){}

async parse()
{
  const csvFilePath='E:/Alpha/projects/cowin/src/data.csv';
  const csv=require('csvtojson')
  csv()
  .fromFile(csvFilePath)
  .then((jsonObj: any)=>{
    console.log(jsonObj);
   // console.log('hello');
  })
  const jsonArray=await csv().fromFile(csvFilePath);
  //console.log(jsonArray);
}
}
