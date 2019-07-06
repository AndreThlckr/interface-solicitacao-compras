# interface-solicitacao-compras
Interface para aplicação de fluxo de aprovação de compras

### Como funciona o código

Projeto Angular que serve como interface para "sistema-solicitacao-compras" (disponível em https://github.com/AndreThlckr/sistema-solicitacao-compras), exibindo e acionando as funções do sistema no servidor através de métodos como GET/POST.

### Instalação
Use o comando `ng serve` no diretório do projeto, através do Angular CLI. O servidor abrirá na porta `http://localhost:4200/`.

* O projeto está definido, por padrão, para fazer requisições à API (vide "sistema-solicitacao-compras") localmente, através da porta 8080. Caso a API esteja rodando através de outra porta ou apartir de algum servidor, deve-se trocar o endereço no serviço data.service.ts, localizado em ".\src\app\shared\services\data.service.ts", substituindo-se a variável 'apiURL' definida na linha 12.

## Autor

* **André Theilacker** - [AndréThlckr](https://github.com/AndreThlckr)

## Reconhecimentos

* Billie Thompson - [PurpleBooth](https://github.com/PurpleBooth) - modelo para o arquivo README.md
