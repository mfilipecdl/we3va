let arraySenhas=new Array();
let arrayConTecla=new Array(1,1,1,1,1,1);
let arrayTecla=new Array("A","B","C","D","E","F");
let arrayTV=new Array();
let texto;
let compArray;
document.getElementById("lista").innerHTML="";
let listagem=document.getElementById("lista");

atualizar(1);

function funcaoSenhas(tipo){
	senha=arrayTecla[tipo]+arrayConTecla[tipo];
		arraySenhas.push(senha);
			compArray=arraySenhas.length;
			//document.getElementById("teste").innerHTML=compArray;
			atualizar(0);
				arrayConTecla[tipo]++;
}

function chamar(numeroBalcao){
		mem=new Array();		
		balcao=new Array("Balcão 1","Balcão 2","Balcão 3","Balcão 4");

			if(arraySenhas[0]!=undefined){
				let temp=arraySenhas[0]+"<span class='transparente'>.........................</span>"
				+balcao[numeroBalcao];
					arrayTV.unshift(temp);
			}
				if(arrayTV.length>0 && compArray>0){					
						listagem.innerHTML="";					
						tv(arrayTV);
				}
		
					arraySenhas.shift();
						compArray=arraySenhas.length;
							//document.getElementById("teste").innerHTML=compArray;

		if(compArray<1)
			atualizar(1);
		else
			atualizar(0);
}


function atualizar(x){
		if(x==0){
			texto="Próxima Senha: "+arraySenhas[0]+". "+arraySenhas.length+" em espera.";
			
		}
		else{
			texto="Sem senhas para atender";
		}

			document.getElementById("balcao1").innerHTML=texto;
			document.getElementById("balcao2").innerHTML=texto;
			document.getElementById("balcao3").innerHTML=texto;
			document.getElementById("balcao4").innerHTML=texto;	
}

function tv(mem){	
	
	arrayTV.reverse();

		for(i=arrayTV.length-1;i>=0;i--){
			listagem.innerHTML=listagem.innerHTML+"<li>"+mem[i]+"</li>";
		}

			if(arrayTV.length>=4){
				arrayTV.shift();
			}
	arrayTV.reverse();
}