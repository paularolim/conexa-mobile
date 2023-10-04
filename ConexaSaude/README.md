# Conexa Saúde

Projeto desenvolvido durante teste técnico de acordo com as regras propostas no README da raíz deste repositório.

## Detalhes sobre o projeto

- React Native (0.72.5)
- TypeScript
- Arquitetura MVVM
- React Navigation para navegação
- Zustand para gerenciamento de estado global
- Async Storage para persistência de estado
- React Hook Form e Yup para validação de formulários
- Axios para requisições HTTP
- Styled Components para estilização
- Jest para testes automatizados

## Requisitos para executar o projeto

- Node - 19.5.0
- Yarn - 1.22.19
- Android Studio Dolphin
- XCode - 14.0.1 (se estiver em um computador com MacOS)

## Como executar o projeto

Primeiro este repositório deve ser clonado no computador utilizando o [Git](https://git-scm.com/).
No terminal, execute o comando `git clone https://github.com/paularolim/conexa-mobile.git`

Acesse a pasta do repositório criada no computador.
No terminal, execute o comando `cd conexa-mobile`.

Depois é necessário acessar a branch em que foi desenvolvido o desafio.
No terminal, execute o comando `git checkout challenge`.

Acesse a pasta do projeto.
No terminal, execute o comando `cd ConexaSaude`.

Instale as dependências do projeto.
No terminal, execute o comando `yarn`.

Instale as dependências nativas do iOS (se estiver em um computador com MacOS).
No terminal, execute o comando `npx pod-install ios`.

Inicie o bundle do projeto React Native.
No terminal, execute o comando `yarn start`.

Inicie o aplicativo no Android.
Em uma nova aba do terminal, execute o comando `yarn run android`.

Inicie o aplicativo no iOS (se estiver em um computador com MacOS).
Em uma nova aba do terminal, execute o comando `yarn run ios`.

## Como checar a qualidade do projeto

Para checar se existem erros de lint no projeto (estilo de código), no terminal, execute o código:
`yarn lint`

Para checar se existem erros de typescript, no terminal, execute o código:
`yarn types`

Para rodar os testes, no terminal, execute o comando:
`yarn test`

Para checar a cobertura de testes execute o comando:
`yarn test:coverage`

## Melhorias possíveis para o projeto

- Adicionar husky para garantir commits semânticos
- Adicionar husky para garantir a subida apenas códigos com qualidade
- Melhorar os testes
- Adicionar mais features
- Melhorar o código
- Melhorar detalhes da arquitetura
- CI/CD
