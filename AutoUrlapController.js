import AutoUrlapView from "./AutoUrlapView.js";
import AutoUrlapModel from "./AutorlapModel.js";

class AutoUrlapController{
    constructor(){
        let autoUrlapModel = new AutoUrlapModel()
        let autoUrlapView = new AutoUrlapView(".tarolo",autoUrlapModel.lista)
        $(window).on("hozzaAd",event=>{
            autoUrlapModel.listaAd(event.detail)
            $(".tarolo").empty()
            autoUrlapView = new AutoUrlapView(".tarolo",autoUrlapModel.lista)
        })
    }
}

export default AutoUrlapController;