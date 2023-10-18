const prompt = require("prompt-sync")();
var state = 'x'



var matriz = [
    ['+','+','+'],
    ['+','+','+'],
    ['+','+','+']
    ]
    const tamanho = 3;
    var ganhou = '';
    
    function print(){
        for (let i = 0; i < tamanho; i++) {
      let linha = '';
      for (let j = 0; j < tamanho; j++) {
        linha += matriz[i][j] + ' ';
      }
      console.log(linha);
      }
    }
    
    
    function checkh(){
        for(i in matriz){
            let checkho=0;
            let checkhx=0;
            for(a in matriz[i]){
                switch(matriz[i][a]){
                
                    case 'x':
                     checkhx +=1 
                     break;
                    
                    case 'o':
                     checkho +=1
                     break;
                }
            }
            
            if(checkho == 3){
             return  ganhou = 'o'
      } else if(checkhx == 3){
        return ganhou = 'x'
      }
      
        }
    }
    
    
    function checkv(){
            for(i in matriz){
            checkvo=0;
            checkvx=0;
            for(a in matriz[i]){
                switch(matriz[a][i]){
                
                    case 'x':
                     checkvx +=1 
                     break;
                    
                    case 'o':
                     checkvo +=1
                     break;
                }
            }
            
            if(checkvo == 3){
            ganhou = 'o'
      } else if(checkvx == 3){
          ganhou = 'x'
      }
      
        }
    
    }
    
    function checkd(){
        checkdo=0;
        checkdx=0;
            
        for (let i = 0; i < 3; i++) {
          if (matriz[i][i] === 'o') {
            checkdo += 1;
          } else if (matriz[i][i] === 'x') {
            checkdx += 1;
          }
        }
      
        if (checkdo === 3) {
          ganhou = 'o';
        } else if (checkdx === 3) {
          ganhou = 'x';
        }
      
        // Resetando os contadores
        checkdo = 0;
        checkdx = 0;
      
        // Verificando a diagonal da direita (top-right para bottom-left)
        for (let i = 0; i < 3; i++) {
          if (matriz[i][2 - i] === 'o') {
            checkdo += 1;
          } else if (matriz[i][2 - i] === 'x') {
            checkdx += 1;
          }
        }
      
        if (checkdo === 3) {
          ganhou = 'o';
        } else if (checkdx === 3) {
          ganhou = 'x';
        }
      
        return ganhou;
      }
    
    
    function check(){
        checkd();
        checkh();
        checkv();

    }
    function xatk(){
      print();
        console.log('Você é o X')
        const linha = prompt(`escolha a linha.`);
        const coluna = prompt(`escolha a coluna.`);
        matriz[linha-1][coluna-1] = 'x'
        
      }
    
    function oatk(){
      print();
        console.log('Você é o O')
        const linha = prompt(`escolha a linha.`);
        const coluna = prompt(`escolha a coluna.`);
        matriz[linha-1][coluna-1] = 'o'
        
    }

    function chooser(){
      if(state == 'x'){
        xatk();
        state = 'o'
      }
        else if(state == 'o'){            
        oatk();
        state = 'x'

      }
    }

    function jogo(){
        while(ganhou == ''){
          check();
          if(ganhou ==''){
          chooser();
          }
        }
        
        
       


      switch(ganhou){
           case 'x':
            print();
            console.log('x foi o ganhador')
            break;
           case 'o':
            print();
            console.log('O foi ganhador ')
      }
    }
  jogo();
