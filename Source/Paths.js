
import { fromFileUrl , dirname , join } from 'Path';


const { env } = Deno;

const home = env
    .get('HOME');


const directory = 
    dirname(fromFileUrl(import.meta.url));


export const Options =
    join(directory,'Options.yaml');
    
export const Mozilla =
    join(home,'.mozilla');
    
export const Profiles =
    join(Mozilla,'profiles.ini');
