class AutoUrlapModel{
    
    #list

    constructor(){
        this.#list=[]    
    }

    get lista(){
        return this.#list
    }

    listaAd(obj){
        this.#list.push(obj)
    }
}

export default AutoUrlapModel