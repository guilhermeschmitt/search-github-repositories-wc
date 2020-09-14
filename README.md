### Rodando localmente
Para rodar o frontend localmente, você deve:

 - Clonar este repositório
- Node instalado, versão 10 ou superior
- npm instalado, versão 6.4 ou superior
- Vá para a pasta clonada e:
	- Execute o comando ``npm install`` para instalar todas as dependências requeridas do projeto
	- Abra o arquivo ``.env`` e altere as rotas do servidor backend
	- Execute o comando ``npm start`` para iniciar o servidor de desenvolvimento. (Este projeto usa o create-react-app)

O servidor será iniciado na porta 3000.

### Visão geral das funcionalidades
A aplicação é uma plataforma para consultas de repositórios do *GitHub*, as consultas são feitas utilizando a *API* pública do mesmo. É possível consultar e listar repositórios a partir de um determinado texto, consultar detalhadamente as informações do repositório escolhido e verificar outros repositórios do mesmo usuário, além de ter uma função de favoritos, onde é possível salvar os seus repositórios preferidos e depois consultá-los.

### Tecnologias e principais bibliotecas utilizadas

 - React
	 - React é uma biblioteca JavaScript para construir interfaces de usuário. Baseia-se no controle do estado para renderizar suas páginas.
 - Styled-components
	 - Biblioteca para estilização de componentes.
 - antd
	 - Um biblioteca de *design system bastante popular.

### Melhorias futuras

 - Utilizar ``react memo`` para aumentar performance da aplicação e não causar renderizações desnecessárias.
 - Opções de filtros e ordenação na busca de repositórios.
 - Criar outros contextos. Atualmente só está sendo utilizado um contexto comum.
 - Verificação do problema ao mudar de tema: Atualmente renderiza toda a página novamente, verificar se há uma forma de mudar de tema e não ocorrer isso.
 - Responsividade da aplicação
