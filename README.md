# 🐾 Au Saúde - Carteira Animal Digital

Uma aplicação web responsiva e interativa para que tutores possam gerenciar as informações e o histórico de vacinação de seus animais de estimação. 

Este projeto foi desenvolvido como requisito avaliativo (OAT1) para a disciplina de **Desenvolvimento de API's**, demonstrando a implementação de um sistema CRUD (Create, Read, Update, Delete) em memória.

## 🚀 Funcionalidades (O CRUD)

O projeto atende aos requisitos de manipulação de dados utilizando Arrays, persistidos via `localStorage` para simular o comportamento de um banco de dados real em um ambiente de páginas estáticas (GitHub Pages):

* **C - Create (Criar):** Cadastro de novos Pets (com informações de espécie, raça, cor e gênero) e registro de Vacinas vinculadas aos pets.
* **R - Read (Ler):** Renderização dinâmica dos dados cadastrados através de cards interativos na interface.
* **U - Update (Atualizar):** Reaproveitamento inteligente dos formulários para edição de registros já existentes.
* **D - Delete (Apagar):** Remoção de pets e vacinas do sistema, com alertas de confirmação de segurança.

## 🏗️ Arquitetura e Estrutura do Código

Para demonstrar os conceitos de API e separação de responsabilidades, a lógica de negócio foi dividida em duas camadas:

* **Back-end Simulado :** Atua como a "API" do sistema. Gerencia estritamente o Array de dados (`bancoDePets`) e possui funções isoladas e reutilizáveis para manipulação.
* **Front-end :** Consome as funções da camada de dados. É responsável por escutar eventos (cliques, submits), capturar os dados do DOM e atualizar o HTML dinamicamente.

## 🌐 Como Acessar

O projeto está hospedado no GitHub Pages e pode ser acessado diretamente pelo navegador, sem necessidade de instalação:
👉 **[Insira aqui o link do seu GitHub Pages gerado]**
