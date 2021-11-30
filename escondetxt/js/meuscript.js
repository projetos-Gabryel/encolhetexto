var conteudo=document.getElementById('conteudo')
var botao=document.getElementById('mostre_mais')

//criar o evento do clickdo botao utilizando uma função anononima
botao.onclick=function(){

    if(conteudo.className=="open"){
        conteudo.className='conteudo',
        botao.innerHTML="mostre mais";
    }
else{
    conteudo.className="open";
    botao.innerHTML="mostre menos";
    
}


}