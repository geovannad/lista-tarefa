# 📋 Lista de Tarefas - Sistema de Gerenciamento com Node.js

> Aplicação web completa para gerenciamento de tarefas desenvolvida com Node.js, Express, Sequelize e MySQL. Projeto prático de programação assíncrona aplicando o padrão **MVC (Model-View-Controller)**.

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![Handlebars](https://img.shields.io/badge/Handlebars-E34F26?style=for-the-badge&logo=handlebarsdotjs&logoColor=white)

</div>

---

## 📑 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura MVC](#-arquitetura-mvc)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Como Usar](#-como-usar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Desafios Implementados](#-desafios-implementados)
- [Capturas de Tela](#-capturas-de-tela)
- [Autores](#-autores)

---

## 🎯 Sobre o Projeto

Este projeto é uma aplicação web de **gerenciamento de tarefas (To-Do List)** desenvolvida como atividade de programação assíncrona. A aplicação permite criar, visualizar, editar e excluir tarefas, com recursos avançados como:

- ✨ **Sistema de Prioridades** (Baixa, Média, Alta)
- 📅 **Datas de Entrega** com alertas para tarefas atrasadas
- 🔍 **Filtros Inteligentes** (Todas, Pendentes, Concluídas)
- 🎨 **Interface Moderna** com cores dinâmicas por prioridade
- 📱 **Design Responsivo** para mobile e desktop

---

## ⚡ Funcionalidades

### Funcionalidades Básicas

- ✅ **Criar Tarefa**: Adicione novas tarefas com título, descrição, prioridade e data
- ✏️ **Editar Tarefa**: Modifique informações de tarefas existentes
- 🗑️ **Excluir Tarefa**: Remova tarefas concluídas ou não desejadas
- ✔️ **Marcar como Concluída**: Checkbox para controlar o status

### Funcionalidades Avançadas

- 🎨 **Estilização por Prioridade**:
  - 🟢 Verde para prioridade baixa
  - 🟠 Laranja para prioridade média
  - 🔴 Vermelho para prioridade alta
- 📅 **Gerenciamento de Datas**:

  - Campo opcional de data de entrega
  - Destaque visual para tarefas atrasadas
  - Formatação de datas em português (dd/mm/aaaa)

- 🔍 **Sistema de Filtros**:
  - Visualizar todas as tarefas
  - Filtrar apenas tarefas pendentes
  - Filtrar apenas tarefas concluídas

---

## 🛠️ Tecnologias Utilizadas

### Backend

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web minimalista
- **Sequelize** - ORM para banco de dados
- **MySQL** - Banco de dados relacional
- **dotenv** - Gerenciamento de variáveis de ambiente

### Frontend

- **Handlebars** - Template engine
- **CSS3** - Estilização moderna e responsiva
- **HTML5** - Estrutura semântica

### Desenvolvimento

- **Nodemon** - Auto-reload durante desenvolvimento
- **Express-Handlebars** - Integração Handlebars com Express

---

## 🏗️ Arquitetura MVC

O projeto segue rigorosamente o padrão **MVC (Model-View-Controller)**:

```
📁 lista-tarefa/
│
├── 📂 models/              # MODEL - Estrutura de dados
│   └── Task.js            # Define a estrutura da tabela Task
│
├── 📂 views/               # VIEW - Interface do usuário
│   ├── main.handlebars    # Layout principal
│   ├── all.handlebars     # Lista de tarefas
│   ├── create.handlebars  # Formulário de criação
│   └── edit.handlebars    # Formulário de edição
│
├── 📂 controllers/         # CONTROLLER - Lógica de negócio
│   └── taskController.js  # Funções de manipulação de tarefas
│
├── 📂 routes/              # Rotas da aplicação
│   └── taskRoutes.js      # Define as rotas HTTP
│
├── 📂 db/                  # Conexão com banco de dados
│   └── conn.js            # Configuração Sequelize
│
└── 📂 public/              # Arquivos estáticos
    └── css/
        └── styles.css     # Estilização da aplicação
```

### 🔄 Fluxo MVC

1. **Requisição HTTP** → O usuário acessa uma rota (ex: `/tasks`)
2. **Router** → Direciona para o Controller correspondente
3. **Controller** → Processa a lógica e interage com o Model
4. **Model** → Busca/salva dados no banco de dados MySQL
5. **Controller** → Envia dados para a View
6. **View** → Renderiza HTML com Handlebars
7. **Resposta HTTP** → Página HTML é enviada ao navegador

---

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado:

- **Node.js** (v14 ou superior) - [Download](https://nodejs.org/)
- **MySQL** (v5.7 ou superior) - [Download](https://www.mysql.com/)
- **Git** - [Download](https://git-scm.com/)
- Um editor de código (recomendado: **VS Code**)

---

## 🚀 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/geovannad/lista-tarefa.git
cd lista-tarefa
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o banco de dados

Crie um arquivo `.env` na raiz do projeto com suas credenciais MySQL:

```env
DB_HOST=seu-host-mysql
DB_PORT=3306
DB_USER=seu-usuario
DB_PASSWORD=sua-senha
DB_NAME=nodesequelize
```

### 4. Inicie a aplicação

```bash
npm start
```

A aplicação estará rodando em: **http://localhost:3000**

---

## ⚙️ Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` com as seguintes variáveis:

```env
# Configurações do Banco de Dados MySQL
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=suasenha
DB_NAME=nodesequelize
```

### Scripts Disponíveis

```json
{
  "start": "nodemon ./index.js", // Inicia com auto-reload
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

---

## 💻 Como Usar

### 1️⃣ Acessar a Aplicação

Abra seu navegador e acesse: `http://localhost:3000`

### 2️⃣ Criar uma Tarefa

- Clique em **"Criar Nova"** no menu
- Preencha o título (obrigatório)
- Adicione descrição (opcional)
- Escolha a prioridade (Baixa, Média ou Alta)
- Defina data de entrega (opcional)
- Clique em **"Criar Tarefa"**

### 3️⃣ Visualizar Tarefas

- Use os filtros: **Todas**, **Pendentes** ou **Concluídas**
- Tarefas são exibidas com cores baseadas na prioridade
- Tarefas atrasadas aparecem com destaque vermelho ⚠️

### 4️⃣ Editar uma Tarefa

- Clique no botão **"✏️ Editar"**
- Modifique os campos desejados
- Marque/desmarque a checkbox **"Concluída"**
- Clique em **"Salvar Alterações"**

### 5️⃣ Excluir uma Tarefa

- Clique no botão **"🗑️ Excluir"**
- A tarefa será removida permanentemente

---

## 📂 Estrutura do Projeto

```
lista-tarefa/
│
├── 📂 controllers/
│   └── taskController.js          # Lógica de negócio das tarefas
│
├── 📂 db/
│   └── conn.js                    # Conexão Sequelize com MySQL
│
├── 📂 models/
│   └── Task.js                    # Model da tabela Tasks
│
├── 📂 public/
│   └── 📂 css/
│       └── styles.css             # Estilos da aplicação
│
├── 📂 routes/
│   └── taskRoutes.js              # Definição de rotas
│
├── 📂 views/
│   ├── main.handlebars            # Layout principal
│   ├── all.handlebars             # Lista de tarefas
│   ├── create.handlebars          # Formulário de criação
│   └── edit.handlebars            # Formulário de edição
│
├── .env                           # Variáveis de ambiente (não versionado)
├── .gitignore                     # Arquivos ignorados pelo Git
├── index.js                       # Arquivo principal da aplicação
├── package.json                   # Dependências e scripts
├── package-lock.json              # Lock de versões
└── README.md                      # Documentação do projeto
```

---

## 🏆 Desafios Implementados

### ✅ Desafio 1: Sistema de Prioridades

- Campo `priority` no Model com ENUM ('Baixa', 'Média', 'Alta')
- Select dropdown nos formulários
- Badges coloridos na listagem
- Cores de fundo dinâmicas por prioridade

### ✅ Desafio 2: Estilização por Prioridade

- Arquivo CSS completo com design moderno
- Cartões com bordas laterais coloridas
- Responsividade para mobile
- Animações e transições suaves

### ✅ Desafio 3: Data de Entrega

- Campo `dueDate` no Model (DATEONLY)
- Input type="date" nos formulários
- Formatação de datas em pt-BR
- Detecção automática de tarefas atrasadas
- Destaque visual para tarefas vencidas

### ✅ Desafio 4: Filtro de Tarefas

- Sistema de filtros com query params
- Botões de filtro com estado ativo
- Lógica de WHERE condition dinâmica no Controller
- Ordenação por data de criação

---

## 📸 Capturas de Tela

### Tela Principal - Lista de Tarefas

```
┌─────────────────────────────────────────┐
│  📋 Lista de Tarefas                    │
│  [Ver Todas] | [Criar Nova]            │
├─────────────────────────────────────────┤
│  [📋 Todas] [🕗 Pendentes] [✅ Concluídas]
│                                          │
│  ┌────────────────────────────────┐    │
│  │ 🔴 ALTA | Entregar Projeto      │    │
│  │ Finalizar documentação          │    │
│  │ 📅 Entrega: 15/10/2025 ⚠️       │    │
│  │ 🕗 Pendente                     │    │
│  │ [✏️ Editar] [🗑️ Excluir]        │    │
│  └────────────────────────────────┘    │
└─────────────────────────────────────────┘
```

---

## 👥 Autores

Desenvolvido como atividade de programação assíncrona em dupla:

- **Instituto Germinare** - 3E Tech
- **Curso**: Programação Assíncrona
- **Ano**: 2025

---

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais no Instituto Germinare.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

---

## 📞 Suporte

Se encontrar algum problema ou tiver sugestões:

- Abra uma [Issue](https://github.com/geovannad/lista-tarefa/issues)
- Entre em contato com os desenvolvedores

---

<div align="center">

### ⭐ Se este projeto foi útil, considere dar uma estrela!

**Desenvolvido com ❤️ por estudantes do Instituto Germinare**

</div>
