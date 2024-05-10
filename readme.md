## necessidades

- construção do backend para conexao com bd
- criação do login e validação do usuario

- (após a validacao:)
- armazenar o id internamente e checkar sempre que houver uma alteracao no get, para garantir que o usuario está na conta correta.


-- api obter projetos do bd
# falta fazer a api que entrega os dados para o sistema, pelo id do usuario



-- api exclusao de projeto
showprojectpage.js

      fetch(`-----------api-------------/?id=${idUsuario}&projetoId=${projetoId}`, {
          method: 'DELETE',
      })

      exemplo:

      http://127.0.0.1:5500/-----------api-------------/?id=pedromoura&projetoId=projeto1


-- api adicao de projeto
functions.js

        // Montar a URL da API
         var urlAPI = `http://-------api--------/?id=${idUsuario}&` + dados;

        exemplo:
        
        http://-------api--------/?id=pedromoura&uploadNameProject=1&hoursCount=0.0006 

# falta adicionar o link do git hub

-- api salvar value
functions.js

            let apiUrl = `https://------api--------/?id=${idUsuario}&valor=` + encodeURIComponent(valueToSend);

            exemplo:
            https://------api--------/?id=pedromoura&valor=50

