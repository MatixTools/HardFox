
import { fromFileUrl , dirname , join } from 'Path';


const { env } = Deno;

const home = env
    .get('HOME');


const directory = 
    dirname(fromFileUrl(import.meta.url));


export const Options =
    join(directory,'Options.yaml');
    
export const Firefox =
    join(home,'.mozilla','firefox');
    
export const Profiles =
    join(Firefox,'profiles.ini');
