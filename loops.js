const lugaresQueVisitei = ["ooooooItajái","Guarujá","Osasco" ];
for (let posicao = 0; posicao < lugaresQueVisitei.length; posicao++){
    console.log( "Eu já visitei " + lugaresQueVisitei[posicao]);
}

const lugaresAmiguinhos = ["San Francisco", "Osasco", "Holywood"];
const lugaresEmComum = [];
    for (let posicao = 0; posicao < lugaresQueVisitei.length; posicao++){
        for (let posicao1 = 0; posicao1 < lugaresAmiguinhos.length; posicao1++){
            if (lugaresAmiguinhos[posicao1] === lugaresQueVisitei[posicao]){
                lugaresEmComum.push(lugaresQueVisitei[posicao])
            }
        }
    }

   
console.log(lugaresEmComum);

const amigosDoFace = ["Maria", "Julia", "Giovanna"];
const amigosDoFaceKaian = ["Luis", "Lucas", "André"];
const amigosEmComum = [];

for (let amg = 0; amg < amigosDoFace.length; amg++){
    for (let amg1 = 0; amg1 < amigosDoFaceKaian.length; amg1++){
        if (amigosDoFaceKaian[amg1] === amigosDoFace[amg]){
            amigosEmComum.push(amigosDoFaceKaian[amg])
        }
    }
}
console.log(amigosEmComum);
