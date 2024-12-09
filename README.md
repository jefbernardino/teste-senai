# teste-senai
Projeto teste do Apagão da Web 2024.
Base do projeto feita com Vite, Vue3 e Pinia.

## Objetivo:
- Criar um projeto simples, com uma tela de um e-commerce.
  - O layout de exemplo está na pasta `public/images/layout/exemplo.png`
  - Devemos ter um cabeçalho, barra de navegação, banner e uma lista de produtos, com um botão simulando inserir o produto em um carrinho;
  - Deve haver um contador de itens inseridos do carrinho;
  - Simular um login de usuário (email e senha), buscando os dados da api que está em: `https://67463750512ddbd807fb36af.mockapi.io/api/users`;
    - Assim como dos componentes, as `stores` devem estar em sua respectiva pasta;

### Pontos a serem observados:
- Trabalhar corretamente a aplicação de tags HTML5;
  - As tags principais (header, nav, etc) devem estar separadas em componentes, em sua respectiva pasta;
- Utilizar os gerenciamentos de estados do Vue com o Pinia para a questão do carrinho e do "login";
- Usar o SASS para o CSS, cujo arquivo inicial está em `src/assets/sass/style.scss`. Procurar fazer as estruturas de pastas e arquivos como feito nas aulas.
- Lembrem-se da responsividade `:)`
