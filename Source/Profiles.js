
import { Profiles } from './Paths.js'
import { parse } from 'INI'


const { readTextFile } = Deno;


export default async function loadProfiles (){
    return parse(await readTextFile(Profiles));
}
