
import { Profiles } from '../Paths.js'
import { parse } from 'INI'
import Profile from './Profile.js'


const 
    { readTextFile } = Deno ,
    { entries } = Object ,
    { warn } = console ;


export default async function loadProfiles (){
    
    const text = await 
        readTextFile(Profiles);
        
    const data = parse(text);
    
    return entries(data)
        .filter(isProfile)
        .filter(isValidData)
        .map(toProfile)
}


function isProfile ([ name ]){
    return name.startsWith('Profile')
}


function isValidData ([ name , data ]){
    
    const { IsRelative , Path , Name } = data;
    
    if(typeof Path === 'string')
        return true;
        
    warn(
        `Profile data contains an invalid path!\n` +
        `IsRelative : ${ IsRelative }\n` +
        `      Name : ${ Name }\n` +
        `      Path : ${ Path }`
    )
}


function toProfile ([ _ , data ]){
    return new Profile(data);
}
