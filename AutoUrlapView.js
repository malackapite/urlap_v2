class AutoUrlapView{
    constructor(tarolo, adat){
        this.tarolo=tarolo
        this.megJelenit(adat)
        
        $(tarolo).eq(0).append(`<input type="text" id="tipus"><input type="text" id="rendszam"><input type="button" id="kuld" value="küld">`)
        this.kuldElem=$("#kuld")
        this.kuldElem.on("click",event=>{
            event.preventDefault()
            this.kattintasTrigger()
        })
    }

    megJelenit(adat){
        console.log(adat);
    }

    kattintasTrigger(){
        window.dispatchEvent(new CustomEvent("hozzaAd", {detail:{tipus:$("#tipus").val(),rendszam:$("#rendszam").val()}}))
    }
}

export default AutoUrlapView