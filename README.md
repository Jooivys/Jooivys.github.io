# João Ivys - GitHub Pages

Bem-vindo ao repositório do meu site pessoal hospedado com [GitHub Pages](https://pages.github.com/)! 🚀

## Sobre

Este projeto é um site simples feito com HTML, CSS e JavaScript, com um visual moderno e responsivo. Ele serve como uma página inicial pessoal, apresentando projetos e incluindo um minigame interativo de pular obstáculos.

O objetivo é demonstrar a criação e hospedagem de um site estático no GitHub Pages, com um toque de interatividade.

## Demonstração

Você pode acessar o site [clicando aqui](https://Jooivys.github.io/).

## Recursos

- HTML5, CSS3 e JavaScript puro
- Layout responsivo
- Seção de projetos pessoais
- Minigame interativo de pular obstáculos
- Estrutura de projeto organizada com CI/CD para lint e deploy

## Estrutura do Projeto

```
├── .github/                 # Configurações do GitHub (workflows de CI/CD)
│   └── workflows/
│       └── static.yml       # Workflow para lint e deploy no GitHub Pages
├── css/                     # Arquivos CSS
│   ├── style.css            # Estilos gerais do site
│   └── minigame.css         # Estilos específicos do minijogo
├── js/                      # Arquivos JavaScript
│   └── script.js            # Lógica do minijogo
├── .stylelintrc.json        # Configuração do Stylelint para lint de CSS
├── .eslintrc.json           # Configuração do ESLint para lint de JS
├── index.html               # Página principal do site
└── README.md                # Este arquivo
```

## Como editar

Basta modificar o arquivo `index.html` para alterar o conteúdo do site. O GitHub Pages atualizará automaticamente após o commit.

## Como publicar seu site no GitHub Pages

1. Crie um repositório público chamado `seu-usuario.github.io`.
2. Adicione seu arquivo `index.html`.
3. Faça o push do arquivo para o repositório.
4. Pronto! O site estará disponível em `https://seu-usuario.github.io/`.

Para mais informações, veja a [documentação oficial do GitHub Pages](https://pages.github.com/).

Feito por [Jooivys](https://github.com/Jooivys).
