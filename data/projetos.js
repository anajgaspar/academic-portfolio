const projetos = [
    {
        id: 1,
        titulo: "Desempenho de Vereadores",
        semestre: "1° Semestre - 2024-2",
        imagem: "/img/spoiler-projetos/spoiler-api1.png",
        problema: "O projeto foi proposto pelo Professor Fernando Masanori, o problema citado por ele foi que os moradores de São José dos Campos tinham dificuldade para encontrar informações claras sobre o trabalho dos vereadores. As informações até existiam, mas estavam espalhadas ou pouco acessíveis, o que tornava difícil acompanhar quem realmente estava atuando de forma efetiva na cidade.",
        solucao: "Criamos uma plataforma web que disponibiliza informações sobre o desempenho dos vereadores da cidade de São José dos Campos durante o atual mandato. O objetivo é oferecer aos eleitores dados claros e acessíveis que ajudem a tomar decisões informadas nas eleições municipais.",
        contribuicao: "No início, fiquei responsável por montar os wireframes no Figma, usados pra apresentar o protótipo ao cliente. Depois, desenvolvi a estrutura em HTML e fiz a estilização em CSS das telas de gráficos e da área de comentários. Também programei a barra de pesquisa em JavaScript, que permite filtrar informações dentro da página.",
        papel: "Dev Team",
        softSkills: ["Comunicação", "Trabalho em equipe", "Pensamento crítico"],
        hardSkills: ["Criação de wireframes", "HTML e CSS", "JavaScript"],
        tecnologias: ["HTML5", "CSS3", "JavaScript", "Flask", "MySQL"],
        github: "https://github.com/Draco-Imperium/API_FATEC1",
        deploy: ""
    },
    {
        id: 2,
        titulo: "Dashboard de Indicadores",
        semestre: "2° Semestre - 2025-1",
        imagem: "/img/spoiler-projetos/spoiler-api2.png",
        problema: "A Helpnei precisava de um jeito melhor de mostrar para as empresas parceiras o impacto e os resultados obtidos dentro da plataforma. Até então, esses dados eram pouco organizados e difíceis de visualizar.",
        solucao: "Desenvolvemos um dashboard de indicadores para monitorar o impacto da plataforma e acompanhar o crescimento das empresas cadastradas no Helpnei, exibindo dados estratégicos para patrocinadores e investidores. E um sistema de captação de usuários interessados em patrocínio.",
        contribuicao: "Fiquei responsável por montar a estrutura das páginas em HTML e fazer toda a parte visual com CSS. Também desenvolvi um mapa interativo, que mostra a distribuição geográfica dos usuários.",
        papel: "Dev Team",
        softSkills: ["Colaboração", "Resolução de problemas", "Organização e planejamento"],
        hardSkills: ["HTML e CSS", "Noções de UX design", "Visualização de dados"],
        tecnologias: ["HTML5", "CSS3", "JavaScript", "React", "Sass", "TypeScript", "NodeJS"],
        github: "https://github.com/GeneSys-fatec/API-2DSM",
        deploy: ""
    },
    {
        id: 3,
        titulo: "Gerenciamento de Tarefas (To-do)",
        semestre: "3° Semestre - 2025-2",
        imagem: "/img/spoiler-projetos/spoiler-api3.png",
        problema: "A GSW enfrentava problemas no controle das tarefas, comunicação falha, atividades que se perdiam no meio do caminho e atrasos nas entregas. Faltava uma ferramenta simples que centralizasse tudo.",
        solucao: "Criamos um gerenciador de tarefas que ajuda as equipes a se organizarem de forma prática. A ideia é facilitar o acompanhamento das atividades, melhorar a comunicação e evitar esquecimentos no dia a dia.",
        contribuicao: "Fiquei responsável por cuidar da documentação (DoR, DoD e Manual do Usuário), dos wireframes e da distribuição das tarefas entre os integrantes. Também participei minimamente como desenvolvedora, ajudando em ajustes visuais, melhorias na responsividade e na lógica da seção de comentários.",
        papel: "Product Owner",
        softSkills: ["Comunicação clara", "Gestão de tempo", "Empatia e escuta ativa", "Adaptabilidade"],
        hardSkills: ["Product Ownership", "Criação de wireframes", "Gestão de backlog", "Metodologias Ágeis"],
        tecnologias: ["HTML5", "CSS3", "JavaScript", "React", "TailwindCSS", "TypeScript", "Java", "Sprint Boot", "MongoDB", "AWS"],
        github: "https://github.com/GeneSys-fatec/API-3DSM",
        deploy: ""
    },
    {
        id: 4,
        titulo: "Telegram Bibliobot",
        imagem: "/img/spoiler-projetos/spoiler-chatbot.png",
        solucao: "Desenvolvimento de um chatbot para Telegram para ajudar usuários a encontrar livros de forma rápida e fácil. É possível pesquisar por título, autor ou gênero, receber recomendações personalizadas e descobrir novos títulos de interesse em pouquíssimo tempo ",
        contribuicao: "Atuei na personalização do modelo de linguagem e na integração do chatbot com o Telegram, garantindo que as respostas fossem adequadas ao contexto e que o funcionamento dentro da plataforma fosse fluido.",
        hardSkills: ["LLMs", "Ollama", "IA", "Google Colab"],
        tecnologias: ["Python", "Ollama", "SQLite", "Fast MCP", "Fast API"],
        github: "https://github.com/anajgaspar/chatbot-IHC",
        deploy: ""
    }
];

module.exports = projetos;