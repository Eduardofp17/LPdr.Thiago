let alturaHome = document.getElementById("home").offsetTop - 100;

let alturaKnowledge = document.getElementById("knowledge").offsetTop - 100;

let alturaSkills = document.getElementById("skills").offsetTop - 100;

let alturaSobre = document.getElementById("about").offsetTop - 100;

let alturaDiferencas = document.getElementById("diferencas").offsetTop - 100;

let alturaContato = document.getElementById("contato").offsetTop - 100;

window.addEventListener("scroll", ()=>{
//    primeira açao
    const cabecalho = this.document.querySelector(".cabecalho");
    const logo = this.document.querySelector(".logo");
    const atalhos = this.document.querySelector(".atalhos");
    const contact = this.document.querySelector(".contactMe");
    const callToAction = this.document.querySelector(".cta");

    cabecalho.classList.toggle("novo-cabecalho", this.window.scrollY > 100);
    logo.classList.toggle("logo-new", this.window.scrollY > 100);
    atalhos.classList.toggle("atalhos-new", this.window.scrollY > 100);
    contact.classList.toggle("contactMe-new", this.window.scrollY > 100);
    callToAction.classList.toggle("cta-new", this.window.scrollY > 100)

    // acessibilidade
    const ini = document.querySelector('.ini');
    const conhe=document.querySelector('.conhe');
    const respon = document.querySelector('.respon');
    const sobreNos = document.querySelector('.we');
    const qualidades = document.querySelector('.qualidades')

    if(window.scrollY < alturaKnowledge){
        ini.classList.add('iniS');
        conhe.classList.remove('knowS');
        respon.classList.remove('skillSec');
        sobreNos.classList.remove('sobreSec');
        qualidades.classList.remove('diferencasSec');
    }
    if(window.scrollY > alturaKnowledge && window.scrollY < alturaSkills){
        ini.classList.remove('iniS');
        conhe.classList.add('knowS');
        respon.classList.remove('skillSec');
        sobreNos.classList.remove('sobreSec');
        qualidades.classList.remove('diferencasSec');
    }
    if(window.scrollY > alturaSkills && window.scrollY < alturaSobre){
        ini.classList.remove('iniS');
        conhe.classList.remove('knowS');
        respon.classList.add('skillSec');
        sobreNos.classList.remove('sobreSec');
        qualidades.classList.remove('diferencasSec');
    }
    if(window.scrollY > alturaSobre && window.scrollY < alturaDiferencas){
        ini.classList.remove('iniS');
        conhe.classList.remove('knowS');
        respon.classList.remove('skillSec');
        sobreNos.classList.add('sobreSec');
        qualidades.classList.remove('diferencasSec');
    }
    if(window.scrollY > alturaDiferencas && window.scrollY < alturaContato){
        ini.classList.remove('iniS');
        conhe.classList.remove('knowS');
        respon.classList.remove('skillSec');
        sobreNos.classList.remove('sobreSec');
        qualidades.classList.add('diferencasSec');
    }
})    