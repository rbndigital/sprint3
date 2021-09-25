var voto = new Array(6);
voto[0] = 0;
voto[1] = 0;
voto[2] = 0;
voto[3] = 0;
voto[4] = 0;
voto[5] = 0;
voto[6] = 0;
function votar(opcion)
{
    switch (opcion)
    {
        case 0:
        {
            let total = voto[0]+voto[1]+voto[2]+voto[3]+voto[4]+voto[5]+voto[6];
            estCand1 = (voto[0]/total)*100;
            estCand2 = (voto[1]/total)*100;
            estCand3 = (voto[2]/total)*100;
            estCand4 = (voto[3]/total)*100;
            estCand5 = (voto[4]/total)*100;
            estCand6 = (voto[5]/total)*100;
            alert("El candidato 1 obtuvo "+voto[0]+"("+estCand1+"%) votos\nEl candidato 2 obtuvo "+voto[1]+"("+estCand2+"%) votos\nEl candidato 3 obtuvo "+voto[2]+"("+estCand3+"%) votos\nEl candidato 4 obtuvo "+voto[3]+"("+estCand4+"%) votos\nEl candidato 5 obtuvo "+voto[4]+"("+estCand5+"%) votos\nEl candidato 6 obtuvo "+voto[5]+"("+estCand6+"%) votos");
            break;
        }
        case 1:
        {
            voto[0] = voto[0] + 1;
            break;
        }
        case 2:
        {
            voto[1] = voto[1] + 1;
            break;
        }
        case 3:
        {
            voto[2] = voto[2] + 1;
            break;
        }
        case 4:
        {
            voto[3] = voto[3] + 1;
            break;
        }  
        case 5:
        {
            voto[4] = voto[4] + 1;
            break;
        }
        case 6:
        {
            voto[5] = voto[5] + 1;
            break;
        } 
        case 7:
        {
            voto[6] = voto[6] + 1;
            break;
        }                   
    }
}