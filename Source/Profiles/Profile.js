
import { Firefox } from '../Paths.js'
import { join } from 'Path'


export default class Profile {
    
    #name;
    #path;
    
    constructor ( data ){
        
        let { IsRelative , Path } = data;

        if(IsRelative)
            Path = join(Firefox,Path);
            
        const { Name } = data;
        
        this.#name = Name;
        this.#path = Path;
    }
    
    
    get name (){
        return this.#name; }
        
    get path (){
        return this.#path }    
    
}
