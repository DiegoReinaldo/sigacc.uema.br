// Constantes e configurações
const horasNecessarias = 225;
const cursoDeGraduacao = 'Engenharia de Produção Bacharelado UEMA, Campus São Luis';

const gruposAtividades = [ // Lista com os grupos temático dos tipos de atividades 
    'GRUPO I - Atividades de iniciação à pesquisa ou ensino ou atividades de extensão em áreas correlatas a Engenharia de Produção',
    'GRUPO II - Produção Técnica e/ou Científica em áreas correlatas',
    'GRUPO III - Atividades de participação e/ou organização de eventos em áreas correlatas',
    'GRUPO IV - Vivências de gestão',
    'GRUPO V - Experiências ligadas à formação profissional e/ou correlatas',
    'GRUPO VI - Outras atividades'
]

const maxHorasGruposAtividades = { // Traz limitações por grupo, caso haja. Caso não haja limitação por grupo, a instância number Infinity defini essa não limitação
    'GRUPO I - Atividades de iniciação à pesquisa ou ensino ou atividades de extensão em áreas correlatas a Engenharia de Produção': Infinity,
    'GRUPO II - Produção Técnica e/ou Científica em áreas correlatas': Infinity,
    'GRUPO III - Atividades de participação e/ou organização de eventos em áreas correlatas': Infinity,
    'GRUPO IV - Vivências de gestão': Infinity,
    'GRUPO V - Experiências ligadas à formação profissional e/ou correlatas': Infinity,
    'GRUPO VI - Outras atividades': Infinity
}

const AtividadesPorGrupo = { // Lista de Atividades por Grupos temáticos 
    'GRUPO I - Atividades de iniciação à pesquisa ou ensino ou atividades de extensão em áreas correlatas a Engenharia de Produção': [
        'Bolsista em projeto de pesquisa',
        'Voluntário em projeto de pesquisa',
        'Bolsista em projeto de extensão',
        'Voluntário em projeto de extensão',
        'Bolsista em monitoria',
        'Monitoria voluntária',
        'Disciplinas cursadas com aprovação',
        'Participação em projetos especiais e atléticas desportivas'
    ],

    'GRUPO II - Produção Técnica e/ou Científica em áreas correlatas': [
        'Publicação de artigo em revista Qualis A1, A2, B1, B2 e B3',
        'Publicação de artigo em revista Qualis B4, B5 e C',
        'Publicação de artigo completo em congresso internacional (autor principal)',
        'Publicação de artigo completo em congresso internacional (co-autoria)',
        'Publicação de artigo completo em congresso nacional',
        'Depósito de pedido de Patente'
    ],

    'GRUPO III - Atividades de participação e/ou organização de eventos em áreas correlatas': [
        'Participação em congressos internacionais',
        'Participação em congressos nacionais/Regionais',
        'Apresentação de artigo em congresso internacional',
        'Apresentação de artigo em congresso nacional',
        'Apresentação de trabalhos em seminários, encontros, jornadas, colóquios, workshops locais',
        'Participação como ouvinte em palestras, congressos, seminários, conferências, encontros, workshops',
        'Participação em audiências de defesas de monografias, dissertações e teses',
        'Organização de eventos: seminários, congressos, encontros, jornadas e colóquios'
    ],

    'GRUPO IV - Vivências de gestão': [
        'Participação na composição de empresa júnior do Curso',
        'Participação na diretoria do centro Acadêmico do Curso',
        'Participação na condição de representante estudantil no colegiado de curso, assembleia departamental ou conselho de centro'
    ],

    'GRUPO V - Experiências ligadas à formação profissional e/ou correlatas': [
        'Treinamento como participante',
        'Treinamento como ministrante',
        'Participação em CREA Jr e ABEPRO-JUNIOR',
        'Consultoria',
        'Estágio Não-Curricular'
    ],

    'GRUPO VI - Outras atividades': [
        'Participação em gincanas ou torneios de conhecimento',
        'Participação em atividades de voluntariado, campanhas beneficentes e beneméritas',
        'Visitas técnicas realizadas em atividades referentes ao Curso',
        'Participação em atividades desportivas representando o Curso de Engenharia de Produção ou a UEMA',
        'Participação em Cursos (áreas da ABEPRO)',
        'Participação de cursos via plataforma Eskada',
        'Facilitador de Cursos (ministrante)',
        'Curso de língua Estrangeira',
        'Intercâmbio',
        'Participação em startups ou incubadoras',
        'Registro de Software'
    ]
};

const opcoesAtividades = [ // Lista de atividades
    'Bolsista em projeto de pesquisa',
    'Voluntário em projeto de pesquisa',
    'Bolsista em projeto de extensão',
    'Voluntário em projeto de extensão',
    'Bolsista em monitoria',
    'Monitoria voluntária',
    'Disciplinas cursadas com aprovação',
    'Participação em projetos especiais e atléticas desportivas',
    'Publicação de artigo em revista Qualis A1, A2, B1, B2 e B3',
    'Publicação de artigo em revista Qualis B4, B5 e C',
    'Publicação de artigo completo em congresso internacional (autor principal)',
    'Publicação de artigo completo em congresso internacional (co-autoria)',
    'Publicação de artigo completo em congresso nacional',
    'Depósito de pedido de Patente',
    'Participação em congressos internacionais',
    'Participação em congressos nacionais/Regionais',
    'Apresentação de artigo em congresso internacional',
    'Apresentação de artigo em congresso nacional',
    'Apresentação de trabalhos em seminários, encontros, jornadas, colóquios, workshops locais',
    'Participação como ouvinte em palestras, congressos, seminários, conferências, encontros, workshops',
    'Participação em audiências de defesas de monografias, dissertações e teses',
    'Organização de eventos: seminários, congressos, encontros, jornadas e colóquios',
    'Participação na composição de empresa júnior do Curso',
    'Participação na diretoria do centro Acadêmico do Curso',
    'Participação na condição de representante estudantil no colegiado de curso, assembleia departamental ou conselho de centro',
    'Treinamento como participante',
    'Treinamento como ministrante',
    'Participação em CREA Jr e ABEPRO-JUNIOR',
    'Consultoria',
    'Estágio Não-Curricular',
    'Participação em gincanas ou torneios de conhecimento',
    'Participação em atividades de voluntariado, campanhas beneficentes e beneméritas',
    'Visitas técnicas realizadas em atividades referentes ao Curso',
    'Participação em atividades desportivas representando o Curso de Engenharia de Produção ou a UEMA',
    'Participação em Cursos (áreas da ABEPRO)',
    'Participação de cursos via plataforma Eskada',
    'Facilitador de Cursos (ministrante)',
    'Curso de língua Estrangeira',
    'Intercâmbio',
    'Participação em startups ou incubadoras',
    'Registro de Software'
];

const configAtividades = { // Traz todas as configurações necessárias para o cadastro de uma atividade e o calculo das horas validadas
    'Bolsista em projeto de pesquisa': {
        maxHorasValidadas: 20,
        maxHoras: 80,
        restricao: 'periodo'
    },
    'Voluntário em projeto de pesquisa': {
        maxHorasValidadas: 20,
        maxHoras: 80,
        restricao: 'periodo'
    },
    'Bolsista em projeto de extensão': {
        maxHorasValidadas: 20,
        maxHoras: 80,
        restricao: 'periodo'
    },
    'Voluntário em projeto de extensão': {
        maxHorasValidadas: 20,
        maxHoras: 80,
        restricao: 'periodo'
    },
    'Bolsista em monitoria': {
        maxHorasValidadas: 20,
        maxHoras: 80,
        restricao: 'periodo'
    },
    'Monitoria voluntária': {
        maxHorasValidadas: 20,
        maxHoras: 80,
        restricao: 'periodo'
    },
    'Disciplinas cursadas com aprovação': {
        maxHorasValidadas: 60,
        maxHoras: 90,
        restricao: 'registro'
    },
    'Participação em projetos especiais e atléticas desportivas': {
        maxHorasValidadas: 30,
        maxHoras: 90,
        restricao: 'periodo'
    },
    'Publicação de artigo em revista Qualis A1, A2, B1, B2 e B3': {
        maxHorasValidadas: 90,
        maxHoras: 180,
        restricao: 'registro'
    },
    'Publicação de artigo em revista Qualis B4, B5 e C': {
        maxHorasValidadas: 60,
        maxHoras: 120,
        restricao: 'registro'
    },
    'Publicação de artigo completo em congresso internacional (autor principal)': {
        maxHorasValidadas: 30,
        maxHoras: 60,
        restricao: 'registro'
    },
    'Publicação de artigo completo em congresso internacional (co-autoria)': {
        maxHorasValidadas: 15,
        maxHoras: 60,
        restricao: 'registro'
    },
    'Publicação de artigo completo em congresso nacional': {
        maxHorasValidadas: 20,
        maxHoras: 60,
        restricao: 'registro'
    },
    'Depósito de pedido de Patente': {
        maxHorasValidadas: 120,
        maxHoras: 120,
        restricao: 'registro'
    },
    'Participação em congressos internacionais': {
        maxHorasValidadas: 20,
        maxHoras: 60,
        restricao: 'registro'
    },
    'Participação em congressos nacionais/Regionais': {
        maxHorasValidadas: 10,
        maxHoras: 60,
        restricao: 'registro'
    },
    'Apresentação de artigo em congresso internacional': {
        maxHorasValidadas: 30,
        maxHoras: 60,
        restricao: 'registro'
    },
    'Apresentação de artigo em congresso nacional': {
        maxHorasValidadas: 20,
        maxHoras: 60,
        restricao: 'registro'
    },
    'Apresentação de trabalhos em seminários, encontros, jornadas, colóquios, workshops locais': {
        maxHorasValidadas: 15,
        maxHoras: 60,
        restricao: 'registro'
    },
    'Participação como ouvinte em palestras, congressos, seminários, conferências, encontros, workshops': {
        maxHorasValidadas: 7.5,
        maxHoras: 60,
        restricao: 'registro'
    },
    'Participação em audiências de defesas de monografias, dissertações e teses': {
        maxHorasValidadas: 5,
        maxHoras: 15,
        restricao: 'registro'
    },
    'Organização de eventos: seminários, congressos, encontros, jornadas e colóquios': {
        maxHorasValidadas: 20,
        maxHoras: 60,
        restricao: 'registro'
    },
    'Participação na composição de empresa júnior do Curso': {
        maxHorasValidadas: 30,
        maxHoras: 120,
        restricao: 'periodo'
    },
    'Participação na diretoria do centro Acadêmico do Curso': {
        maxHorasValidadas: 30,
        maxHoras: 120,
        restricao: 'periodo'
    },
    'Participação na condição de representante estudantil no colegiado de curso, assembleia departamental ou conselho de centro': {
        maxHorasValidadas: 5,
        maxHoras: 30,
        restricao: 'registro'
    },
    'Treinamento como participante': {
        maxHorasValidadas: 5,
        maxHoras: 30,
        restricao: 'registro'
    },
    'Treinamento como ministrante': {
        maxHorasValidadas: 10,
        maxHoras: 30,
        restricao: 'registro'
    },
    'Participação em CREA Jr e ABEPRO-JUNIOR': {
        maxHorasValidadas: 30,
        maxHoras: 60,
        restricao: 'periodo'
    },
    'Consultoria': {
        maxHorasValidadas: 15,
        maxHoras: 30,
        restricao: 'registro'
    },
    'Estágio Não-Curricular': {
        maxHorasValidadas: 30,
        maxHoras: 60,
        restricao: 'periodo'
    },
    'Participação em gincanas ou torneios de conhecimento': {
        maxHorasValidadas: 5,
        maxHoras: 15,
        restricao: 'registro'
    },
    'Participação em atividades de voluntariado, campanhas beneficentes e beneméritas': {
        maxHorasValidadas: 5,
        maxHoras: 30,
        restricao: 'registro'
    },
    'Visitas técnicas realizadas em atividades referentes ao Curso': {
        maxHorasValidadas: 5,
        maxHoras: 30,
        restricao: 'registro'
    },
    'Participação em atividades desportivas representando o Curso de Engenharia de Produção ou a UEMA': {
        maxHorasValidadas: 5,
        maxHoras: 30,
        restricao: 'registro'
    },
    'Participação em Cursos (áreas da ABEPRO)': {
        maxHorasValidadas: 10,
        maxHoras: 40,
        restricao: 'registro'
    },
    'Participação de cursos via plataforma Eskada': {
        maxHorasValidadas: 10,
        maxHoras: 50,
        restricao: 'registro'
    },
    'Facilitador de Cursos (ministrante)': {
        maxHorasValidadas: 15,
        maxHoras: 60,
        restricao: 'registro'
    },
    'Curso de língua Estrangeira': {
        maxHorasValidadas: 15,
        maxHoras: 30,
        restricao: 'periodo'
    },
    'Intercâmbio': {
        maxHorasValidadas: 15,
        maxHoras: 30,
        restricao: 'registro'
    },
    'Participação em startups ou incubadoras': {
        maxHorasValidadas: 20,
        maxHoras: 40,
        restricao: 'registro'
    },
    'Registro de Software': {
        maxHorasValidadas: 60,
        maxHoras: 120,
        restricao: 'registro'
    }
};

// Estado da aplicação
let db;
let currentUser = {
    username: null,
    nomeCompleto: null,
    matricula: null
};
let isDev = false;
let horasChart = null;

// Inicialização do IndexedDB
const request = indexedDB.open("SIGACC_DB", 15);

request.onupgradeneeded = function (event) {
    db = event.target.result;

    // Criar/atualizar object store de usuários
    if (!db.objectStoreNames.contains("usuarios")) {
        db.createObjectStore("usuarios", { keyPath: "username" });
    } else {
        // Atualizar a estrutura se necessário
        const transaction = event.target.transaction;
        const store = transaction.objectStore("usuarios");

        // Verificar se precisamos adicionar os novos campos aos usuários existentes
        store.openCursor().onsuccess = function (e) {
            const cursor = e.target.result;
            if (cursor) {
                const user = cursor.value;
                // Adicionar campos se não existirem
                if (user.nomeCompleto === undefined) {
                    user.nomeCompleto = "";
                }
                if (user.matricula === undefined) {
                    user.matricula = "";
                }
                cursor.update(user);
                cursor.continue();
            }
        };
    }

    // Criar/atualizar object store de atividades
    let atividadesStore;
    if (!db.objectStoreNames.contains("atividades")) {
        atividadesStore = db.createObjectStore("atividades", {
            keyPath: "id",
            autoIncrement: true
        });
    } else {
        atividadesStore = event.target.transaction.objectStore("atividades");
    }

    // Criar índices
    try {
        if (!atividadesStore.indexNames.contains("usuario")) {
            atividadesStore.createIndex("usuario", "usuario", { unique: false });
        }
        if (!atividadesStore.indexNames.contains("tipo")) {
            atividadesStore.createIndex("tipo", "tipo", { unique: false });
        }
        if (!atividadesStore.indexNames.contains("periodo")) {
            atividadesStore.createIndex("periodo", "periodo", { unique: false });
        }
    } catch (e) {
        console.error("Erro ao criar índices:", e);
    }
};

request.onsuccess = function (event) {
    db = event.target.result;
    popularSelects();
    initEventListeners();
};

request.onerror = function (event) {
    console.error("Erro no IndexedDB", event);
    mostrarErroMensagem("Erro ao inicializar o banco de dados. Tente recarregar a página.");
};

// Funções auxiliares
function popularSelects() {
    const selects = [
        document.getElementById("tipo"),
        document.getElementById("tipoEdicao")
    ];

    // Limpa os selects principais e adiciona opção com valor "padrao"
    selects.forEach(select => {
        select.innerHTML = '<option value="padrao">Selecione uma opção</option>';
    });

    // Popula com as opções reais
    opcoesAtividades.forEach(opt => {
        selects.forEach(select => {
            const option = document.createElement("option");
            option.value = opt;
            option.textContent = opt;
            select.appendChild(option);
        });
    });

    // Filtro de tipo
    const filtroSelect = document.getElementById("filtroTipo");
    filtroSelect.innerHTML = '<option value="Todos">Todos os tipos</option>';

    opcoesAtividades.forEach(opt => {
        const option = document.createElement("option");
        option.value = opt;
        option.textContent = opt;
        filtroSelect.appendChild(option);
    });

    // Filtro de grupo
    const filtroGrupo = document.getElementById("filtroGrupo");
    filtroGrupo.innerHTML = '<option value="Todos">Todos os grupos</option>';

    gruposAtividades.forEach(grupo => {
        const option = document.createElement("option");
        option.value = grupo;
        option.textContent = grupo;
        filtroGrupo.appendChild(option);
    });

    const grupoSelect = document.getElementById("filtroGrupo");
    const tipoSelect = document.getElementById("filtroTipo");

    // Adiciona o event listener para o filtro de grupo e para o filtro de tipo
    grupoSelect.removeEventListener("change", atualizarFiltroTipoPorGrupo);
    tipoSelect.removeEventListener("change", atualizarFiltroGrupoPorTipo);

    grupoSelect.addEventListener("change", atualizarFiltroTipoPorGrupo);
    tipoSelect.addEventListener("change", atualizarFiltroGrupoPorTipo);

    // Adicionar funcionalidade de pesquisa aos selects
    adicionarPesquisaIntegradaAosSelects();
}

function adicionarPesquisaIntegradaAosSelects() {
    const selectIds = ['tipo', 'tipoEdicao', 'filtroTipo', 'filtroGrupo'];

    selectIds.forEach(selectId => {
        const originalSelect = document.getElementById(selectId);
        if (!originalSelect) return;

        // Verificar se já foi convertido
        if (originalSelect.classList.contains('hidden-original')) {
            return;
        }

        // Criar container
        const container = document.createElement('div');
        container.className = 'searchable-select-wrapper';

        // Criar select personalizado
        let customSelect, selectText;

        if (selectId === 'tipoEdicao') {
            customSelect = document.createElement('div');
            customSelect.className = 'custom-select-edicao';

            // Texto do select - usa o texto da opção selecionada ou padrão
            selectText = document.createElement('span');
            selectText.className = 'select-text-edicao';
        } else {
            customSelect = document.createElement('div');
            customSelect.className = 'custom-select';

            // Texto do select - usa o texto da opção selecionada ou padrão
            selectText = document.createElement('span');
            selectText.className = 'select-text';
        }

        // Define o texto baseado no select atual
        const selectedOption = originalSelect.options[originalSelect.selectedIndex];
        selectText.textContent = selectedOption ? selectedOption.text : 'Selecione uma opção';

        // Ícone de lupa - MESMO POSICIONAMENTO DO ÍCONE DE INFORMAÇÃO
        const searchIcon = document.createElement('i');
        searchIcon.className = 'fas fa-search select-search-integrated-icon';

        // Dropdown com pesquisa
        const dropdown = document.createElement('div');
        dropdown.className = 'select-dropdown';

        // Input de pesquisa dentro do dropdown
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Pesquisar...';
        searchInput.className = 'dropdown-search-input';

        // Lista de opções
        const optionsList = document.createElement('div');
        optionsList.className = 'select-options';

        // Adicionar elementos ao DOM
        customSelect.appendChild(selectText);
        customSelect.appendChild(searchIcon);
        dropdown.appendChild(searchInput);
        dropdown.appendChild(optionsList);
        container.appendChild(customSelect);
        container.appendChild(dropdown);

        // Substituir o select original - inserir ANTES do select original
        originalSelect.parentNode.insertBefore(container, originalSelect);

        // Ocultar completamente o select original
        originalSelect.classList.add('hidden-original');

        // Popular opções
        function populateOptions(filter = '') {
            optionsList.innerHTML = '';
            const options = Array.from(originalSelect.options);
            const filteredOptions = options.filter(option =>
                option.text.toLowerCase().includes(filter.toLowerCase()) && option.value !== "padrao"
            );

            if (filteredOptions.length === 0) {
                const noResults = document.createElement('div');
                noResults.className = 'no-results';
                noResults.textContent = 'Nenhum resultado encontrado';
                optionsList.appendChild(noResults);
                return;
            }

            filteredOptions.forEach(option => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'select-option';
                optionDiv.textContent = option.text;

                optionDiv.addEventListener('mouseenter', function () {
                    this.style.backgroundColor = '#f5f5f5';
                });

                optionDiv.addEventListener('mouseleave', function () {
                    this.style.backgroundColor = '';
                });

                optionDiv.addEventListener('click', function () {
                    originalSelect.value = option.value;
                    selectText.textContent = option.text;
                    dropdown.style.display = 'none';
                    searchInput.value = '';
                    customSelect.classList.remove('active');

                    // Disparar evento change no select original
                    const event = new Event('change', { bubbles: true });
                    originalSelect.dispatchEvent(event);
                });

                optionsList.appendChild(optionDiv);
            });
        }

        // Event listeners
        customSelect.addEventListener('click', function (e) {
            e.stopPropagation();
            const isOpen = dropdown.style.display === 'block';
            dropdown.style.display = isOpen ? 'none' : 'block';

            if (!isOpen) {
                customSelect.classList.add('active');
                populateOptions();
                setTimeout(() => searchInput.focus(), 10);
            } else {
                customSelect.classList.remove('active');
            }
        });

        searchInput.addEventListener('input', function (e) {
            populateOptions(e.target.value);
        });

        searchInput.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                dropdown.style.display = 'none';
                customSelect.classList.remove('active');
            }
            if (e.key === 'Enter') {
                const firstOption = optionsList.querySelector('.select-option');
                if (firstOption) {
                    firstOption.click();
                }
            }
        });

        // Fechar dropdown ao clicar fora
        document.addEventListener('click', function () {
            dropdown.style.display = 'none';
            customSelect.classList.remove('active');
            searchInput.value = '';
            populateOptions();
        });

        // Prevenir fechamento quando clicar dentro do dropdown
        dropdown.addEventListener('click', function (e) {
            e.stopPropagation();
        });

        // Inicializar opções
        populateOptions();
    });
}

function atualizarFiltroTipoPorGrupo() {
    const grupoSelect = document.getElementById("filtroGrupo");
    const tipoSelect = document.getElementById("filtroTipo");
    const grupoSelecionado = grupoSelect.value;

    // Salva o tipo selecionado atual (se houver)
    const tipoSelecionado = tipoSelect.value;

    // Limpa o select de tipo
    tipoSelect.innerHTML = '<option value="Todos">Todos os tipos</option>';

    // Se um grupo específico foi selecionado, filtra os tipos
    if (grupoSelecionado !== "Todos") {
        // Obtém os tipos do grupo selecionado
        const tiposDoGrupo = AtividadesPorGrupo[grupoSelecionado] || [];

        // Adiciona cada tipo do grupo ao select
        tiposDoGrupo.forEach(tipo => {
            const option = document.createElement("option");
            option.value = tipo;
            option.textContent = tipo;
            tipoSelect.appendChild(option);
        });
    } else {
        // Se "Todos" foi selecionado, mostra todos os tipos
        opcoesAtividades.forEach(tipo => {
            const option = document.createElement("option");
            option.value = tipo;
            option.textContent = tipo;
            tipoSelect.appendChild(option);
        });
    }

    // Tenta restaurar a seleção anterior apenas se for compatível com o grupo selecionado
    if (tipoSelecionado && tipoSelecionado !== "Todos") {
        const tipoCompativel = Array.from(tipoSelect.options).some(opt =>
            opt.value === tipoSelecionado
        );

        if (tipoCompativel) {
            tipoSelect.value = tipoSelecionado;
        } else {
            // Se o tipo anterior não é compatível com o grupo, volta para "Todos"
            tipoSelect.value = "Todos";
        }
    }
}

function atualizarFiltroGrupoPorTipo() {
    const tipoSelect = document.getElementById("filtroTipo");
    const grupoSelect = document.getElementById("filtroGrupo");
    const tipoSelecionado = tipoSelect.value;

    // Salva o grupo selecionado atual (se houver)
    const grupoSelecionado = grupoSelect.value;

    // Limpa o select de grupo
    grupoSelect.innerHTML = '<option value="Todos">Todos os grupos</option>';

    // Se um tipo específico foi selecionado, encontra seu grupo
    if (tipoSelecionado !== "Todos") {
        let grupoDoTipo = null;

        // Procura em qual grupo o tipo selecionado está
        for (const grupo in AtividadesPorGrupo) {
            if (AtividadesPorGrupo[grupo].includes(tipoSelecionado)) {
                grupoDoTipo = grupo;
                break;
            }
        }

        // Se encontrou o grupo, mostra apenas esse grupo
        if (grupoDoTipo) {
            const option = document.createElement("option");
            option.value = grupoDoTipo;
            option.textContent = grupoDoTipo;
            grupoSelect.appendChild(option);
        } else {
            // Se não encontrou (teoricamente não deveria acontecer), mostra todos
            gruposAtividades.forEach(grupo => {
                const option = document.createElement("option");
                option.value = grupo;
                option.textContent = grupo;
                grupoSelect.appendChild(option);
            });
        }
    } else {
        // Se "Todos" foi selecionado, mostra todos os grupos
        gruposAtividades.forEach(grupo => {
            const option = document.createElement("option");
            option.value = grupo;
            option.textContent = grupo;
            grupoSelect.appendChild(option);
        });
    }

    // Tenta restaurar a seleção anterior apenas se for compatível com o tipo selecionado
    if (grupoSelecionado && grupoSelecionado !== "Todos") {
        const grupoCompativel = Array.from(grupoSelect.options).some(opt =>
            opt.value === grupoSelecionado
        );

        if (grupoCompativel) {
            grupoSelect.value = grupoSelecionado;
        } else {
            // Se o grupo anterior não é compatível com o tipo, volta para "Todos"
            grupoSelect.value = "Todos";
        }
    }
}

function initEventListeners() {
    document.getElementById("loginForm").addEventListener("submit", handleLoginSubmit);
    document.getElementById("togglePassword").addEventListener("click", togglePasswordVisibility);
    document.getElementById("toggleLink").addEventListener("click", toggleLoginMode);
    document.getElementById("aboutLink").addEventListener("click", mostrarSobre);

    document.getElementById("formCadastro").addEventListener("submit", handleCadastroSubmit);
    document.getElementById("formFiltro").addEventListener("submit", handleFiltroSubmit);
    document.getElementById("formEdicao").addEventListener("submit", handleEdicaoSubmit);
    document.getElementById("limparCadastroBtn").addEventListener("click", limparCadastro);
    document.getElementById("limparFiltrosBtn").addEventListener("click", limparFiltros);
    document.getElementById("imprimirBtn").addEventListener("click", handleImprimir);
    document.getElementById("cancelarEdicaoBtn").addEventListener("click", limparEdicao);
    document.getElementById("tabsContainer").addEventListener("click", lidarComCliqueNaAba);

    // Botões de exportação e importação
    document.getElementById("exportBtn").addEventListener("click", exportarDados);
    document.getElementById("importBtn").addEventListener("click", importarDados);

    // Botões de logout
    document.getElementById("logoutBtn").addEventListener("click", logout);

    // Administração
    document.getElementById("buscarUsuarioBtn").addEventListener("click", buscarUsuario);
    document.getElementById("salvarUsuarioBtn").addEventListener("click", salvarUsuario);
    document.getElementById("resetarUsuarioBtn").addEventListener("click", resetarUsuario);

    // O event listener para filtroGrupo já foi adicionado em popularSelects
    // então não precisamos adicioná-lo aqui novamente
}

function formatarTamanhoDoArquivo(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Sistema de login
function handleLoginSubmit(e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const isLoginMode = document.getElementById("loginTitle").textContent === "Login";

    if (!username || !password) {
        mostrarErroMensagem('Por favor, preencha todos os campos.');
        return;
    }

    // Validações específicas para registro
    if (!isLoginMode) {
        const nomeCompleto = document.getElementById("nomeCompleto").value.trim();
        const matricula = document.getElementById("matricula").value.trim();

        if (!nomeCompleto || !matricula) {
            mostrarErroMensagem('Por favor, preencha todos os campos.');
            return;
        }

        if (!validarMatricula(matricula)) {
            mostrarErroMensagem('Matrícula inválida');
            return;
        }
    }

    ocultarMensagens();
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';
    submitBtn.disabled = true;

    setTimeout(() => {
        let transaction = db.transaction("usuarios", "readonly");
        let store = transaction.objectStore("usuarios");
        let req = store.get(username);

        req.onsuccess = function (event) {
            const user = event.target.result;

            if (username === "admin" && password === "admin") {
                isDev = true;
                currentUser = {
                    username: "admin",
                    nomeCompleto: "Administrador do Sistema",
                    matricula: "20090000000"
                };
                iniciarApp();
            } else if (isLoginMode) {
                if (user && user.password === password) {
                    currentUser = user;
                    iniciarApp();
                } else {
                    mostrarErroMensagem("Usuário ou senha inválidos!");
                    submitBtn.innerHTML = 'Entrar';
                    submitBtn.disabled = false;
                }
            } else {
                // Modo de registro
                if (user) {
                    mostrarErroMensagem("Usuário já existe!");
                    submitBtn.innerHTML = 'Registrar';
                    submitBtn.disabled = false;
                } else {
                    let trans = db.transaction("usuarios", "readwrite");
                    let storeWrite = trans.objectStore("usuarios");

                    // Coletar dados adicionais do registro
                    const nomeCompleto = document.getElementById("nomeCompleto").value.trim();
                    const matricula = document.getElementById("matricula").value.trim();

                    storeWrite.add({
                        username,
                        password,
                        nomeCompleto,
                        matricula
                    });

                    setTimeout(() => {
                        toggleLoginMode();
                        submitBtn.innerHTML = 'Entrar';
                        submitBtn.disabled = false;
                    }, 2000);

                    mostrarSucessoMensagem("Registro realizado com sucesso! Faça login.");
                }
            }
        };

        req.onerror = function () {
            mostrarErroMensagem("Erro ao acessar o banco de dados");
            submitBtn.innerHTML = isLoginMode ? 'Entrar' : 'Registrar';
            submitBtn.disabled = false;
        };
    }, 1000);
}

// Função para validar matrícula
function validarMatricula(matricula) {
    // Deve ter exatamente 11 dígitos
    if (!/^\d{11}$/.test(matricula)) {
        return false;
    }

    // Verifica o ano atual
    const anoAtual = new Date().getFullYear()

    // Os 4 primeiros dígitos devem ser um ano entre 2000 e ano atual
    const ano = parseInt(matricula.substring(0, 4), 10);
    return ano >= 2000 && ano <= anoAtual;
}

function toggleLoginMode() {
    const loginTitle = document.getElementById("loginTitle");
    const submitBtn = document.getElementById("submitBtn");
    const toggleLink = document.getElementById("toggleLink");
    const registrationFields = document.getElementById("registrationFields");

    if (loginTitle.textContent === "Login") {
        // Mudar para modo de registro
        loginTitle.textContent = "Registro";
        submitBtn.textContent = "Registrar";
        toggleLink.innerHTML = '<i class="fas fa-sign-in-alt"></i> Voltar para login';
        registrationFields.style.display = "block";

        // Tornar campos de registro obrigatórios
        document.getElementById("nomeCompleto").setAttribute("required", "true");
        document.getElementById("matricula").setAttribute("required", "true");
    } else {
        // Mudar para modo de login
        loginTitle.textContent = "Login";
        submitBtn.textContent = "Entrar";
        toggleLink.innerHTML = '<i class="fas fa-user-plus"></i> Não tem conta? Registre-se';
        registrationFields.style.display = "none";

        // Remover obrigatoriedade dos campos de registro
        document.getElementById("nomeCompleto").removeAttribute("required");
        document.getElementById("matricula").removeAttribute("required");
    }
    ocultarMensagens();
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.getElementById("togglePassword");
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";

    passwordInput.setAttribute("type", type);
    toggleIcon.classList.toggle("fa-eye");
    toggleIcon.classList.toggle("fa-eye-slash");
}

function iniciarApp() {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("mainScreen").style.display = "block";
    document.getElementById("userName").textContent =
        currentUser.nomeCompleto || currentUser.username || currentUser;

    popularSelects();
    atualizarTabela();
    atualizarResumo();
    recalcularHorasGlobal();

    if (isDev) {
        adicionarAbaDesenvolvedor();
    }
}

function adicionarAbaDesenvolvedor() {
    const tabsContainer = document.getElementById("tabsContainer");

    if (document.querySelector('.tab[data-tab="desenvolvedor"]')) {
        return;
    }

    const devTab = document.createElement("div");
    devTab.className = "tab";
    devTab.dataset.tab = "desenvolvedor";
    devTab.innerHTML = '<i class="fas fa-cogs"></i> Admin';
    tabsContainer.appendChild(devTab);
}

function removerAbaDesenvolvedor() {
    const devTab = document.querySelector('.tab[data-tab="desenvolvedor"]');
    if (devTab) {
        devTab.remove();
    }

    const activeTab = document.querySelector(".tab.active");
    if (activeTab && activeTab.dataset.tab === "desenvolvedor") {
        document.querySelector('.tab[data-tab="cadastrar"]').click();
    }

    const devContent = document.getElementById("desenvolvedor");
    if (devContent) {
        devContent.classList.remove("active");
    }
}

function logout() {
    if (confirm("Tem certeza que deseja sair do sistema?")) {
        currentUser = null; // Isso já existe
        isDev = false;
        // Adicione também:
        document.getElementById("loginScreen").style.display = "block";
        document.getElementById("mainScreen").style.display = "none";

        // Limpe os formulários
        document.getElementById("loginForm").reset();
        document.getElementById("formCadastro").reset();

        ocultarMensagens();
        removerAbaDesenvolvedor(); // se estiver logado como desenvolvedor, fecha a aba admim

        submitBtn.innerHTML = 'Entrar';
        submitBtn.disabled = false;
    }
}

function mostrarSobre() {
    alert("SIGACC - Sistema Integrado de Gestão de Atividades Complementares Curriculares - Versão 1.0\n\nDesenvolvido por Diego Bezerra Reinaldo para auxiliar os estudantes do curso de Engenharia de Produção da UEMA no gerenciamento de atividades complementares.\n\nPara esclarecimentos de dúvidas ou recuperação de login e senhas, entrar em contato com os através dos contatos:\n\nEmail: diego.dbr811@gmail.com\nInstagram: @eaidih\nCentro de Ciências Tecnológicas - CCT/UEMA, Cidade Universitária Paulo VI.");
}

// Funções das Abas e Telas Usuário
function lidarComCliqueNaAba(e) { // Habilita os clicks nas abas permitindo acessar os conteúdos 
    if (e.target.classList.contains("tab")) {
        const tabs = document.querySelectorAll(".tab");
        const tabId = e.target.dataset.tab;

        tabs.forEach(tab => tab.classList.remove("active"));
        e.target.classList.add("active");

        document.querySelectorAll(".tab-content").forEach(content => {
            content.classList.remove("active");
        });

        document.getElementById(tabId).classList.add("active");

        if (tabId == "exibir") {
            handleFiltroSubmit(e);
        }

        if (tabId === "resumo") {
            atualizarGraficoResumo();
        }
    }
}

function arquivoParaArrayBuffer(file) { // Função para converter arquivo para ArrayBuffer
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
    });
}

async function handleCadastroSubmit(e) { // Cadastro de atividades
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const tipo = document.getElementById("tipo").value;
    const horas = parseFloat(document.getElementById("horas").value);
    const periodo = document.getElementById("periodo").value.trim();
    const comprovanteInput = document.getElementById("comprovante");
    const comprovanteFile = comprovanteInput.files[0];

    if (!nome || !tipo || isNaN(horas) || horas < 0 || !periodo) {
        mostrarMensagemDoSistema("Preencha todos os campos obrigatórios", "error");
        return;
    }

    if (tipo === 'padrao') {
        mostrarMensagemDoSistema("Selecione um tipo de atividade", "error");
        return;
    }

    // Verificar a atividade foi realizada durante o período do estudantes no curso
    if (!validarPeriodo(periodo, currentUser.matricula)) {
        const anoAtual = new Date().getFullYear();
        const anoIngresso = parseInt(currentUser.matricula.substring(0, 4), 10);
        mostrarMensagemDoSistema(`Período inválido. Formato esperado: AAAA.S (ex: 2025.1) com ano entre ${anoIngresso}-${anoAtual}`, "error");
        return;
    }

    try {
        let comprovanteArrayBuffer = null;
        if (comprovanteFile) {
            comprovanteArrayBuffer = await arquivoParaArrayBuffer(comprovanteFile);
        }

        // Sempre retorna 0 horas validadas se não houver comprovante
        const horasValidadasEfetivas = comprovanteArrayBuffer == null
            ? 0
            : await calcularHorasValidadas(tipo, horas, periodo, comprovanteArrayBuffer);

        // Define o status
        let status;
        if (comprovanteArrayBuffer == null) {
            status = 'Pendente'; // Status pendente quando sem comprovante
        } else {
            status = horasValidadasEfetivas > 0 ? 'Aprovado' : 'Rejeitado';
        }

        const novaAtividade = {
            usuario: currentUser.username,
            nome,
            tipo,
            horasRegistradas: horas,
            horasValidadas: horasValidadasEfetivas,
            periodo,
            status: status,
            comprovante: comprovanteArrayBuffer
        };

        const transaction = db.transaction("atividades", "readwrite");
        const store = transaction.objectStore("atividades");
        const request = store.add(novaAtividade);

        request.onsuccess = function () {
            if (comprovanteArrayBuffer == null) {
                // Mensagem específica para pendente
                mostrarMensagemDoSistema("Atividade cadastrada com sucesso, porém sem comprovante comprobatório anexado.", "pending");
            } else if (horasValidadasEfetivas < horas) {
                const motivo = horasValidadasEfetivas === 0
                    ? "limite global atingido para este tipo de atividade"
                    : "limites de horas atingidos";
                mostrarMensagemDoSistema(`Atividade cadastrada, mas apenas ${horasValidadasEfetivas}h validadas (${motivo}).`, "success");
            } else {
                mostrarMensagemDoSistema("Atividade cadastrada com sucesso!", "success");
            }

            limparCadastro();
            atualizarTabela();
            atualizarResumo();
        };
    } catch (error) {
        mostrarMensagemDoSistema("Erro ao cadastrar atividade: " + error, "error");
    }
}

function validarPeriodo(periodo, matricula) {
    // Função auxiliar para validar o formato do período
    const anoAtual = new Date().getFullYear();

    if (typeof periodo !== 'string') return false;

    if (!matricula || matricula.length < 4) return false;

    // Verifica formato AAAA.1 ou AAAA.2
    const regex = /^\d{4}\.[12]$/;
    if (!regex.test(periodo)) return false;

    // Extrai ano do período
    const ano = parseInt(periodo.split('.')[0], 10);

    // Extrai ano de ingresso do estudante a partir da matrícula (4 primeiros dígitos)
    const anoIngresso = parseInt(matricula.substring(0, 4), 10);

    // O período só é válido se estiver entre o ano de ingresso e o ano atual
    return ano >= anoIngresso && ano <= anoAtual;
}

async function calcularHorasValidadas(tipo, horas, periodo, comprovante, excludeId = null) { // Função calcularHorasValidadas atualizada
    if (comprovante == null) return 0;

    // Se horas = 0, retorne 0
    if (horas === 0) return 0;

    // Verificação de limite do grupo
    const grupo = obterGrupoPorTipo(tipo);
    if (grupo) {
        const horasCadastradasGrupo = await consultarHorasCadastradasGrupo(grupo, excludeId);
        const disponibilidadeGrupo = Math.max(0, maxHorasGruposAtividades[grupo] - horasCadastradasGrupo);
        if (disponibilidadeGrupo <= 0) return 0;
    }

    const horasCadastradasGlobal = await consultarHorasCadastradasGlobal(tipo, excludeId);
    const disponibilidadeGlobal = Math.max(0, configAtividades[tipo].maxHoras - horasCadastradasGlobal);
    if (disponibilidadeGlobal <= 0) return 0;

    let limiteEspecifico;
    if (configAtividades[tipo].restricao === 'periodo') {
        const horasPeriodo = await consultarHorasPorTipo(tipo, periodo, excludeId);
        const disponibilidadePeriodo = Math.max(0, configAtividades[tipo].maxHorasValidadas - horasPeriodo.totalValidadas);
        limiteEspecifico = disponibilidadePeriodo;
    } else {
        limiteEspecifico = configAtividades[tipo].maxHorasValidadas;
    }

    return Math.min(limiteEspecifico, disponibilidadeGlobal);
}

async function consultarHorasCadastradasGlobal(tipo, excludeId = null) { // Função para consultar horas cadastradas globalmente (para um tipo)
    return new Promise((resolve, reject) => {
        let totalHoras = 0;

        const transaction = db.transaction("atividades", "readonly");
        const store = transaction.objectStore("atividades");
        const request = store.openCursor();

        request.onsuccess = function (e) {
            const cursor = e.target.result;
            if (cursor) {
                const atividade = cursor.value;

                if (atividade.tipo === tipo &&
                    atividade.usuario === currentUser.username &&
                    (!excludeId || atividade.id !== excludeId)) {
                    totalHoras += atividade.horasValidadas;
                }
                cursor.continue();
            } else {
                resolve(totalHoras);
            }
        };

        request.onerror = function () {
            reject("Erro ao consultar horas cadastradas globalmente");
        };
    });
}

function obterGrupoPorTipo(tipo) { // Função pega um tipo e retorno o grupo temática referente ao tipo indicado
    for (const grupo in AtividadesPorGrupo) {
        if (AtividadesPorGrupo[grupo].includes(tipo)) {
            return grupo;
        }
    }
    return null;
}

async function consultarHorasCadastradasGrupo(grupo, excludeId = null) { //Função consulta as horas cadastradas em todas as atividades pertencentes ao grupo indicado 
    return new Promise((resolve, reject) => {
        let totalHoras = 0;

        const transaction = db.transaction("atividades", "readonly");
        const store = transaction.objectStore("atividades");
        const request = store.openCursor();

        request.onsuccess = function (e) {
            const cursor = e.target.result;
            if (cursor) {
                const atividade = cursor.value;
                const atividadeGrupo = obterGrupoPorTipo(atividade.tipo);

                if (atividadeGrupo === grupo &&
                    atividade.usuario === currentUser.username &&
                    (!excludeId || atividade.id !== excludeId)) {
                    totalHoras += atividade.horasValidadas;
                }
                cursor.continue();
            } else {
                resolve(totalHoras);
            }
        };

        request.onerror = function () {
            reject("Erro ao consultar horas cadastradas do grupo");
        };
    });
}

/**
 * As funções consultarHorasPorGrupo e verificarLimiteGrupo não estão mais sendo utilizadas na atual conjuntura do sitema
 */
async function consultarHorasPorGrupo(grupo, excludeId = null) { // Função para consultar horas validadas por grupo, isto é, a soma das horas validadas pra cada atividade do grupo temática
    return new Promise((resolve, reject) => {
        let totalHoras = 0;
        let totalValidadas = 0;

        const transaction = db.transaction("atividades", "readonly");
        const store = transaction.objectStore("atividades");
        const request = store.openCursor();

        request.onsuccess = function (e) {
            const cursor = e.target.result;
            if (cursor) {
                const atividade = cursor.value;

                // Verificar se a atividade pertence ao grupo especificado
                const grupoAtividade = obterGrupoPorTipo(atividade.tipo);
                const mesmoGrupo = grupoAtividade === grupo;
                const mesmoUsuario = atividade.usuario === currentUser.username;
                const naoExcluida = !excludeId || atividade.id !== excludeId;

                if (mesmoGrupo && mesmoUsuario && naoExcluida) {
                    totalHoras += atividade.horasRegistradas;
                    totalValidadas += atividade.horasValidadas;
                }
                cursor.continue();
            } else {
                resolve({ totalHoras, totalValidadas });
            }
        };

        request.onerror = function () {
            reject("Erro ao consultar horas por grupo");
        };
    });
}

async function verificarLimiteGrupo(tipo, horas, excludeId = null) { // Função auxiliar para verificar limites de grupo
    const grupo = obterGrupoPorTipo(tipo);
    if (!grupo || maxHorasGruposAtividades[grupo] === Infinity) {
        return horas; // Sem limite de grupo
    }

    const horasGrupo = await consultarHorasPorGrupo(grupo, excludeId);
    const disponivelGrupo = Math.max(0, maxHorasGruposAtividades[grupo] - horasGrupo.totalValidadas);

    return Math.min(horas, disponivelGrupo);
}

async function consultarHorasPorTipo(tipo, periodo = null, excludeId = null) { // Função para consultar horas por tipo e período
    return new Promise((resolve, reject) => {
        let totalHoras = 0;
        let totalValidadas = 0;

        const transaction = db.transaction("atividades", "readonly");
        const store = transaction.objectStore("atividades");
        const request = store.openCursor();

        request.onsuccess = function (e) {
            const cursor = e.target.result;
            if (cursor) {
                const atividade = cursor.value;

                const mesmoTipo = atividade.tipo === tipo;
                const mesmoPeriodo = periodo ? atividade.periodo === periodo : true;
                const mesmoUsuario = atividade.usuario === currentUser.username;
                const naoExcluida = !excludeId || atividade.id !== excludeId;

                if (mesmoTipo && mesmoPeriodo && mesmoUsuario && naoExcluida) {
                    totalHoras += atividade.horasRegistradas;
                    totalValidadas += atividade.horasValidadas;
                }
                cursor.continue();
            } else {
                resolve({ totalHoras, totalValidadas });
            }
        };

        request.onerror = function () {
            reject("Erro ao consultar horas por tipo");
        };
    });
}

function limparCadastro() {
    document.getElementById("formCadastro").reset();

    // Resetar os componentes personalizados dos selects
    const selects = ['tipo'];

    selects.forEach(selectId => {
        const originalSelect = document.getElementById(selectId);
        if (!originalSelect) return;

        // Resetar o select original
        originalSelect.value = "";

        // Atualizar o componente personalizado
        const wrapper = originalSelect.previousElementSibling;
        if (wrapper && wrapper.classList.contains('searchable-select-wrapper')) {
            const selectText = wrapper.querySelector('.select-text');
            if (selectText) {
                selectText.textContent = "Selecione uma opção";
            }

            // Fechar dropdown se estiver aberto
            const dropdown = wrapper.querySelector('.select-dropdown');
            if (dropdown) {
                dropdown.style.display = 'none';
            }

            // Limpar campo de pesquisa
            const searchInput = wrapper.querySelector('.dropdown-search-input');
            if (searchInput) {
                searchInput.value = '';
            }
        }
    });
}

function handleFiltroSubmit(e) { // Exibição de atividades
    e.preventDefault();
    atualizarTabela();
}

function limparFiltros() {
    document.getElementById("filtroGrupo").value = "Todos";
    document.getElementById("filtroTipo").value = "Todos";
    document.getElementById("filtroPeriodo").value = "";

    // Atualiza o select de tipos para mostrar todos
    atualizarFiltroTipoPorGrupo();

    // Resetar os componentes personalizados dos selects de filtro
    const selectsFiltro = ['filtroGrupo', 'filtroTipo'];

    selectsFiltro.forEach(selectId => {
        const originalSelect = document.getElementById(selectId);
        if (!originalSelect) return;

        // Encontrar o wrapper do componente personalizado
        const wrapper = originalSelect.previousElementSibling;
        if (wrapper && wrapper.classList.contains('searchable-select-wrapper')) {
            const selectText = wrapper.querySelector('.select-text');
            if (selectText) {
                // Definir o texto baseado no valor atual do select original
                const selectedOption = originalSelect.options[originalSelect.selectedIndex];
                selectText.textContent = selectedOption ? selectedOption.text :
                    (selectId === 'filtroGrupo' ? 'Todos os grupos' : 'Todos os tipos');
            }

            // Fechar dropdown se estiver aberto
            const dropdown = wrapper.querySelector('.select-dropdown');
            if (dropdown) {
                dropdown.style.display = 'none';
            }

            // Limpar campo de pesquisa
            const searchInput = wrapper.querySelector('.dropdown-search-input');
            if (searchInput) {
                searchInput.value = '';
            }
        }
    });


    popularSelects(); // Atualiza a exibição dos filtros para o grupo e tipo
    atualizarTabela();
}

function atualizarTabela() { // Função para atualizar a tabela de exibição das atividades cadastradas de acordo com os filtros indicados e também apóes alterações no banco de dados 
    const filtroTipo = document.getElementById("filtroTipo").value;
    const filtroPeriodo = document.getElementById("filtroPeriodo").value.trim().toLowerCase();
    const filtroGrupo = document.getElementById("filtroGrupo").value;
    const tbody = document.getElementById("tabelaAtividades");

    tbody.innerHTML = "";

    const transaction = db.transaction("atividades", "readonly");
    const store = transaction.objectStore("atividades");
    const request = store.openCursor();

    let index = 1;
    let totalHorasRegistradas = 0;
    let totalHorasValidadas = 0;

    request.onsuccess = function (e) {
        const cursor = e.target.result;
        if (cursor) {
            const atividade = cursor.value;

            // Verificar filtro de grupo
            let pertenceAoGrupo = true;
            if (filtroGrupo !== "Todos") {
                const tiposDoGrupo = AtividadesPorGrupo[filtroGrupo];
                pertenceAoGrupo = tiposDoGrupo && tiposDoGrupo.includes(atividade.tipo);
            }

            const aplicarFiltro =
                (filtroTipo === "Todos" || atividade.tipo === filtroTipo) &&
                (filtroPeriodo === "" || atividade.periodo.toLowerCase().includes(filtroPeriodo)) &&
                pertenceAoGrupo &&
                atividade.usuario === currentUser.username;

            if (aplicarFiltro) {
                const row = document.createElement("tr");

                let statusClass = "";
                let statusText = "";

                if (atividade.status === 'Aprovado') {
                    statusClass = "approved";
                    statusText = "Aprovado";
                } else if (atividade.status === 'Rejeitado') {
                    statusClass = "rejected";
                    statusText = "Rejeitado";
                } else if (atividade.status === 'Pendente') {
                    statusClass = "pending";
                    statusText = "Pendente";
                } else {
                    statusClass = "pending";
                    statusText = "Pendente";
                }

                row.innerHTML = `
                    <td>${atividade.nome}</td>
                    <td>${atividade.tipo}</td>
                    <td>${atividade.horasRegistradas}</td>
                    <td>${atividade.horasValidadas}</td>
                    <td>${atividade.periodo}</td>
                    <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                    <td style="text-align: center; vertical-align: middle;">
                        <button class="action-btn download" onclick="visualizarComprovante(${atividade.id})">
                            <i class="fas fa-download"></i>
                        </button>
                    </td>
                    <!-- Modal para Preview do Comprovante -->
                    <div id="previewComprovanteOverlay" class="modal-overlay" style="display: none;">
                        <div class="modal-content-preview">
                            <div class="modal-header">
                                <h2>Visualizar Comprovante</h2>
                                <span class="btn-close" onclick="fecharPreviewComprovante()">×</span>
                            </div>
                            <div class="modal-body">
                                <iframe id="previewComprovanteIframe" width="100%" height="800px"></iframe>
                            </div>
                            <div class="modal-footer">
                                <button class="form-btn secondary" onclick="fecharPreviewComprovante()">Fechar</button>
                                <button class="form-btn primary" onclick="baixarComprovanteAtual()">Baixar Comprovante</button>
                            </div>
                        </div>
                    </div>
                    <td style="vertical-align: middle;">
                        <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                            <button class="action-btn edit" onclick="carregarEdicao(${atividade.id})">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="action-btn delete" onclick="confirmarExclusao(${atividade.id})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </td>
                `;

                tbody.appendChild(row);
                index++;
                totalHorasRegistradas += atividade.horasRegistradas;
                totalHorasValidadas += atividade.horasValidadas;
            }

            cursor.continue();
        } else {
            document.getElementById("totalHorasRegistradas").textContent = totalHorasRegistradas;
            document.getElementById("totalHorasValidadas").textContent = totalHorasValidadas;
        }
    };

    request.onerror = function () {
        mostrarMensagemDoSistema("Erro ao carregar atividades", "error");
    };
}

document.querySelectorAll(".activities-table th").forEach(th => {
    const resizer = document.createElement("div");
    resizer.classList.add("resizer");
    th.appendChild(resizer);

    let x = 0;
    let w = 0;

    const mouseDownHandler = function (e) {
        x = e.clientX;
        w = th.offsetWidth;

        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        const dx = e.clientX - x;
        th.style.width = `${w + dx}px`;
    };

    const mouseUpHandler = function () {
        document.removeEventListener("mousemove", mouseMoveHandler);
        document.removeEventListener("mouseup", mouseUpHandler);
    };

    resizer.addEventListener("mousedown", mouseDownHandler);
});

// Variáveis globais para o preview do comprovante
let __CURRENT_COMPROVANTE_ID = null;
let __CURRENT_COMPROVANTE_BLOBURL = null;

/**
 * Abre o preview do comprovante
 */
async function visualizarComprovante(id) {
    __CURRENT_COMPROVANTE_ID = id;

    try {
        const atividade = await new Promise((resolve, reject) => {
            const transaction = db.transaction("atividades", "readonly");
            const store = transaction.objectStore("atividades");
            const request = store.get(id);

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject("Erro ao buscar atividade");
        });

        if (atividade && atividade.comprovante) {
            // Liberar URL anterior se houver
            if (__CURRENT_COMPROVANTE_BLOBURL) {
                URL.revokeObjectURL(__CURRENT_COMPROVANTE_BLOBURL);
            }

            const blob = new Blob([atividade.comprovante], { type: 'application/pdf' });
            const blobUrl = URL.createObjectURL(blob);
            __CURRENT_COMPROVANTE_BLOBURL = blobUrl;

            // Configurar o iframe
            const iframe = document.getElementById('previewComprovanteIframe');
            iframe.src = blobUrl;

            // Mostrar o modal
            document.getElementById('previewComprovanteOverlay').style.display = 'flex';
        } else {
            mostrarMensagemDoSistema("Nenhum comprovante disponível para esta atividade", "info");
        }
    } catch (error) {
        mostrarMensagemDoSistema("Erro ao carregar comprovante: " + error, "error");
    }
}

/**
 * Fecha o preview do comprovante
 */
function fecharPreviewComprovante() {
    const overlay = document.getElementById('previewComprovanteOverlay');
    const iframe = document.getElementById('previewComprovanteIframe');

    overlay.style.display = 'none';
    iframe.src = 'about:blank';

    // Liberar a URL do blob após um delay para garantir que o iframe foi limpo
    setTimeout(() => {
        if (__CURRENT_COMPROVANTE_BLOBURL) {
            URL.revokeObjectURL(__CURRENT_COMPROVANTE_BLOBURL);
            __CURRENT_COMPROVANTE_BLOBURL = null;
        }
    }, 100);
}

/**
 * Baixa o comprovante atual do preview
 */
function baixarComprovanteAtual() {
    if (!__CURRENT_COMPROVANTE_ID) {
        mostrarMensagemDoSistema("Nenhum comprovante selecionado", "error");
        return;
    }

    // Fechar o modal primeiro
    fecharPreviewComprovante();

    // Usar a função original para baixar
    setTimeout(() => {
        baixarComprovante(__CURRENT_COMPROVANTE_ID);
    }, 300);
}

// Mantenha a função baixarComprovante original para uso interno
async function baixarComprovante(id) {
    try {
        const atividade = await new Promise((resolve, reject) => {
            const transaction = db.transaction("atividades", "readonly");
            const store = transaction.objectStore("atividades");
            const request = store.get(id);

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject("Erro ao buscar atividade");
        });

        if (atividade && atividade.comprovante) {
            const blob = new Blob([atividade.comprovante], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `comprovante_${id}.pdf`;
            document.body.appendChild(a);
            a.click();

            setTimeout(() => {
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 100);
        } else {
            mostrarMensagemDoSistema("Nenhum comprovante disponível para esta atividade", "info");
        }
    } catch (error) {
        mostrarMensagemDoSistema("Erro ao baixar comprovante: " + error, "error");
    }
}

async function exportarDados() {
    try {
        const atividades = await new Promise((resolve) => {
            const atividadesDoUsuario = [];

            const transaction = db.transaction("atividades", "readonly");
            const store = transaction.objectStore("atividades");
            const index = store.index("usuario");
            const request = index.openCursor(IDBKeyRange.only(currentUser.username));

            request.onsuccess = (e) => {
                const cursor = e.target.result;
                if (cursor) {
                    atividadesDoUsuario.push(cursor.value);
                    cursor.continue();
                } else {
                    resolve(atividadesDoUsuario);
                }
            };
        });

        const zip = new JSZip();

        // 1. Criar arquivo CSV com proteção de curso e dados do usuário
        let csvContent = `Curso�${cursoDeGraduacao}\n`; // Linha de proteção
        // Adicionar linha com dados do usuário
        csvContent += `Dados do usuário�${currentUser.nomeCompleto}�${currentUser.username}�${currentUser.matricula}�${currentUser.password}\n`;
        csvContent += "ID�Nome�Tipo�Horas Registradas�Horas Validadas�Período�Status\n";
        atividades.forEach(atividade => {
            csvContent += `${atividade.id}�${atividade.nome}�${atividade.tipo}�${atividade.horasRegistradas}�${atividade.horasValidadas}�${atividade.periodo}�${atividade.status}\n`;
        });
        zip.file("atividades.csv", csvContent);

        // 2. Adicionar comprovantes PDF
        const comprovantesFolder = zip.folder("comprovantes");
        for (const atividade of atividades) {
            if (atividade.comprovante) {
                comprovantesFolder.file(`comprovante_${atividade.id}.pdf`, atividade.comprovante);
            }
        }

        // 3. Gerar e baixar ZIP
        const content = await zip.generateAsync({ type: "blob" });
        const url = URL.createObjectURL(content);
        const a = document.createElement("a");
        a.href = url;
        a.download = `atividades_${currentUser.username}_${new Date().toISOString().slice(0, 10)}.zip`;
        document.body.appendChild(a);
        a.click();

        // Limpeza
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 100);

        mostrarMensagemDoSistema("Dados exportados com sucesso!", "success");
    } catch (error) {
        mostrarMensagemDoSistema("Erro na exportação: " + error.message, "error");
    }
}

async function importarDados() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.zip';

    fileInput.onchange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            const zip = new JSZip();
            const content = await zip.loadAsync(file);

            // 1. Processar CSV e verificar compatibilidade do curso
            const csvFiles = Object.values(content.files).filter(f => f.name.endsWith('.csv'));
            if (csvFiles.length === 0) throw new Error("Arquivo CSV não encontrado no ZIP");

            const csvFile = csvFiles[0];
            const csvContent = await csvFile.async('string');
            const linhas = csvContent.split('\n').filter(linha => linha.trim() !== '');

            // Verificação de compatibilidade do curso
            if (linhas.length === 0) {
                throw new Error("Arquivo CSV vazio");
            }

            // Verifica a primeira linha (informação do curso)
            const primeiraLinha = linhas[0];
            if (!primeiraLinha.startsWith('Curso')) {
                throw new Error("Arquivo inválido: Formato não reconhecido");
            }

            const partesCurso = primeiraLinha.split('�');
            if (partesCurso.length < 2 || partesCurso[1] !== cursoDeGraduacao) {
                throw new Error(`Arquivo incompatível! Este arquivo pertence ao curso: ${partesCurso[1]}. O sistema atual é configurado para: ${cursoDeGraduacao}.`);
            }

            // 2. Mapear comprovantes
            const comprovantes = {};
            for (const relativePath in content.files) {
                if (relativePath.startsWith('comprovantes/') && relativePath.endsWith('.pdf')) {
                    const match = relativePath.match(/comprovante_(\d+)\.pdf$/);
                    if (match) {
                        const id = match[1];
                        comprovantes[id] = await content.files[relativePath].async('arraybuffer');
                    }
                }
            }

            // 3. Importar atividades (ignorando as três primeiras linhas: curso, dados do usuário e cabeçalho)
            let importadas = 0;
            let erros = 0;

            for (let i = 3; i < linhas.length; i++) {
                try {
                    const linha = linhas[i].trim();
                    if (!linha) continue; // Pula linhas vazias

                    const campos = linha.split('�');

                    // Verifica se é uma linha válida
                    if (campos.length < 7) {
                        console.warn(`Linha ${i} ignorada: número de campos insuficiente (${campos.length})`);
                        erros++;
                        continue;
                    }

                    // Converte valores numéricos, tratando possíveis vírgulas como separador decimal
                    const horasRegistradas = parseFloat(campos[3].replace(',', '.'));
                    const periodo = campos[5].trim();
                    const comprovante = comprovantes[campos[0]] || null;

                    // Calcular horas validadas e status (em vez de usar os valores importados)
                    let horasValidadas = 0;
                    let status = 'Pendente';

                    if (comprovante) {
                        // Se há comprovante, calcular horas validadas
                        horasValidadas = await calcularHorasValidadas(
                            campos[2].trim(),
                            horasRegistradas,
                            periodo,
                            comprovante
                        );
                        status = horasValidadas > 0 ? 'Aprovado' : 'Rejeitado';
                    }

                    const novaAtividade = {
                        usuario: currentUser.username,
                        nome: campos[1].trim(),
                        tipo: campos[2].trim(),
                        horasRegistradas: isNaN(horasRegistradas) ? 0 : horasRegistradas,
                        horasValidadas: horasValidadas,
                        periodo: periodo,
                        status: status,
                        comprovante: comprovante
                    };

                    await new Promise((resolve, reject) => {
                        const transaction = db.transaction("atividades", "readwrite");
                        const store = transaction.objectStore("atividades");
                        const request = store.add(novaAtividade);

                        request.onsuccess = resolve;
                        request.onerror = () => reject("Erro ao salvar atividade");
                    });

                    importadas++;
                } catch (error) {
                    console.error(`Erro na linha ${i}:`, error, linhas[i]);
                    erros++;
                }
            }

            // 4. Recalcular horas globais para garantir consistência
            await recalcularHorasGlobal();

            if (erros > 0) {
                mostrarMensagemDoSistema(`${importadas} atividades importadas com sucesso! ${erros} erros ocorreram. Verifique o console para detalhes.`, "warning");
            } else {
                mostrarMensagemDoSistema(`${importadas} atividades importadas com sucesso!`, "success");
            }

        } catch (error) {
            console.error("Erro na importação:", error);
            if (error.message.includes("incompatível")) {
                mostrarMensagemDoSistema(error.message, "error", 10000);
            } else {
                mostrarMensagemDoSistema("Erro na importação: " + error.message, "error");
            }
        }
    };

    fileInput.click();
}

function carregarEdicao(id) { // Função para Edição de atividades
    document.querySelector('[data-tab="editar"]').click();

    const transaction = db.transaction("atividades", "readonly");
    const store = transaction.objectStore("atividades");
    const request = store.get(id);

    request.onsuccess = function (e) {
        const atividade = e.target.result;

        if (atividade) {
            document.getElementById("idEdicao").value = atividade.id;
            document.getElementById("nomeEdicao").value = atividade.nome;
            document.getElementById("tipoEdicao").value = atividade.tipo;
            // Atualiza o select para exibir o tipo da atividade carregada
            document.querySelector('.custom-select-edicao .select-text-edicao').textContent = atividade.tipo;

            document.getElementById("horasEdicao").value = atividade.horasRegistradas;
            document.getElementById("periodoEdicao").value = atividade.periodo;

            // Mostrar info do comprovante atual
            const comprovanteInfo = document.getElementById("comprovanteAtualInfo");
            if (atividade.comprovante) {
                const size = atividade.comprovante.byteLength;
                comprovanteInfo.innerHTML = `
                    Comprovante atual: 
                    <a href="#" onclick="baixarComprovante(${atividade.id}); return false;">
                        comprovante_${atividade.id}.pdf
                    </a> 
                    (${formatarTamanhoDoArquivo(size)})
                `;
            } else {
                comprovanteInfo.textContent = "Nenhum comprovante cadastrado";
            }
        }
    };

    request.onerror = function () {
        mostrarMensagemDoSistema("Erro ao carregar atividade para edição", "error");
    };
}

function confirmarExclusao(id) { // Função auxiliar para confirmar exlusão, ela captura a resposta do usuário quanto a confirmação
    if (confirm("Tem certeza que deseja excluir esta atividade?")) {
        deletarAtividade(id);
    }
}

async function deletarAtividade(id) { // Função para deletar atividade através da coluna ações
    let idParaExcluir = id;

    if (!idParaExcluir && idParaExcluir !== 0) {
        const idInput = document.getElementById("idEdicao");
        if (idInput && idInput.value) {
            idParaExcluir = parseInt(idInput.value);
        }
    }

    if (idParaExcluir === undefined || idParaExcluir === null || isNaN(idParaExcluir)) {
        mostrarMensagemDoSistema("ID inválido para exclusão. Selecione uma atividade primeiro.", "error");
        return;
    }

    try {
        const atividade = await new Promise((resolve, reject) => {
            const transaction = db.transaction("atividades", "readonly");
            const store = transaction.objectStore("atividades");
            const request = store.get(idParaExcluir);

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject("Erro ao buscar atividade");
        });

        if (!atividade) {
            mostrarMensagemDoSistema("Atividade não encontrada no banco de dados", "error");
            return;
        }

        const tipo = atividade.tipo;

        await new Promise((resolve, reject) => {
            const transaction = db.transaction("atividades", "readwrite");
            const store = transaction.objectStore("atividades");
            const request = store.delete(idParaExcluir);

            request.onsuccess = resolve;
            request.onerror = (e) => {
                console.error("Erro na transação de exclusão:", e);
                reject("Erro ao excluir atividade");
            };
        });

        const grupo = obterGrupoPorTipo(tipo);
        if (grupo) {
            await recalcularHorasGrupo(grupo);
        }

        mostrarMensagemDoSistema("Atividade excluída com sucesso!", "success");
        document.getElementById("formEdicao").reset();
        atualizarTabela();
        atualizarResumo();

    } catch (error) {
        mostrarMensagemDoSistema(`Erro ao excluir atividade: ${error}`, "error");
    }
}

/**
 * Função para recalcular as horas validadas de todos as atividades dos tipos de um grupo especificado. Usada quando há alguma alteração em uma atividade (edição) podendo liberar horas para outras atividades
 */
async function recalcularHorasGrupo(grupo) {
    try {
        const atividades = await new Promise((resolve, reject) => {
            const atividadesDoGrupo = [];

            const transaction = db.transaction("atividades", "readonly");
            const store = transaction.objectStore("atividades");
            const request = store.openCursor();

            request.onsuccess = function (e) {
                const cursor = e.target.result;
                if (cursor) {
                    const atividade = cursor.value;
                    const atividadeGrupo = obterGrupoPorTipo(atividade.tipo);

                    if (atividadeGrupo === grupo && atividade.usuario === currentUser.username) {
                        atividadesDoGrupo.push(atividade);
                    }
                    cursor.continue();
                } else {
                    resolve(atividadesDoGrupo);
                }
            };

            request.onerror = (e) => {
                reject("Erro ao buscar atividades do grupo");
            };
        });

        atividades.sort((a, b) => a.id - b.id);

        const limiteGrupo = maxHorasGruposAtividades[grupo] || 0;
        let acumuladoGrupo = 0;
        const horasPorPeriodoPorTipo = {};

        const atualizacoes = [];

        for (const atividade of atividades) {
            if (atividade.comprovante != null) {
                const tipo = atividade.tipo;
                const configTipo = configAtividades[tipo];

                // Calcular disponibilidade do grupo
                const disponivelGrupo = Math.max(0, limiteGrupo - acumuladoGrupo);

                // Calcular disponibilidade global do tipo
                const horasCadastradasGlobalTipo = await consultarHorasCadastradasGlobal(tipo, atividade.id);
                const disponivelGlobalTipo = Math.max(0, configTipo.maxHoras - horasCadastradasGlobalTipo);

                // Calcular disponibilidade específica
                let disponivelEspecifico;
                if (configTipo.restricao === 'periodo') {
                    if (!horasPorPeriodoPorTipo[tipo]) {
                        horasPorPeriodoPorTipo[tipo] = {};
                    }
                    if (!horasPorPeriodoPorTipo[tipo][atividade.periodo]) {
                        horasPorPeriodoPorTipo[tipo][atividade.periodo] = 0;
                    }

                    disponivelEspecifico = Math.max(
                        0,
                        configTipo.maxHorasValidadas - horasPorPeriodoPorTipo[tipo][atividade.periodo]
                    );
                } else {
                    disponivelEspecifico = configTipo.maxHorasValidadas;
                }

                let novasHorasValidadas = 0;
                if (atividade.horasRegistradas > 0) {
                    novasHorasValidadas = Math.min(
                        disponivelGrupo,
                        disponivelGlobalTipo,
                        disponivelEspecifico
                    );
                }

                acumuladoGrupo += novasHorasValidadas;
                if (configTipo.restricao === 'periodo') {
                    horasPorPeriodoPorTipo[tipo][atividade.periodo] += novasHorasValidadas;
                }

                const novoStatus = novasHorasValidadas > 0 ? 'Aprovado' : 'Rejeitado';

                if (atividade.horasValidadas !== novasHorasValidadas || atividade.status !== novoStatus) {
                    const atividadeAtualizada = {
                        ...atividade,
                        horasValidadas: novasHorasValidadas,
                        status: novoStatus
                    };
                    atualizacoes.push(atividadeAtualizada);
                }
            } else {
                if (atividade.horasValidadas !== 0 || atividade.status !== 'Pendente') {
                    const atividadeAtualizada = {
                        ...atividade,
                        horasValidadas: 0,
                        status: 'Pendente'
                    };
                    atualizacoes.push(atividadeAtualizada);
                }
            }
        }

        if (atualizacoes.length > 0) {
            await new Promise((resolve, reject) => {
                const transaction = db.transaction("atividades", "readwrite");
                const store = transaction.objectStore("atividades");

                transaction.oncomplete = resolve;
                transaction.onerror = (e) => {
                    reject("Erro ao atualizar atividades do grupo");
                };

                for (const atividade of atualizacoes) {
                    store.put(atividade);
                }
            });
        }

        return true;

    } catch (error) {
        console.error("Erro no recálculo do grupo", grupo, ":", error);
        throw error;
    }
}

/**
 * Função auxiliar pra recalcular as horas validadas de todas as atividades cadastradas para um determinado usuário (currentUser) visando evitar inconsistência nos calculos de horas validas, visto que, no código fonte, pode haver alteração nas constantes. A cada login, a função é chamada
 */
async function recalcularHorasGlobal() {
    try {
        const tiposCadastrados = new Set();
        const atividades = await new Promise((resolve, reject) => {
            const todasAtividades = [];

            const transaction = db.transaction("atividades", "readonly");
            const store = transaction.objectStore("atividades");
            const request = store.openCursor();

            request.onsuccess = function (e) {
                const cursor = e.target.result;
                if (cursor) {
                    if (cursor.value.usuario === currentUser) {
                        tiposCadastrados.add(cursor.value.tipo);
                        todasAtividades.push(cursor.value);
                    }
                    cursor.continue();
                } else {
                    resolve(todasAtividades);
                }
            };

            request.onerror = () => reject("Erro ao coletar tipos de atividades");
        });

        for (const tipo of tiposCadastrados) {
            if (!opcoesAtividades.includes(tipo)) {
                for (const atividade of atividades.filter(a => a.tipo === tipo)) {
                    const atividadeAtualizada = {
                        ...atividade,
                        horasValidadas: 0,
                        status: 'Rejeitado'
                    };

                    await new Promise((resolve) => {
                        const transaction = db.transaction("atividades", "readwrite");
                        const store = transaction.objectStore("atividades");
                        store.put(atividadeAtualizada);
                        transaction.oncomplete = resolve;
                    });
                }
            }
        }

        for (const grupo of gruposAtividades) {
            await recalcularHorasGrupo(grupo);
        }

        atualizarTabela();
        atualizarResumo();
    } catch (error) {
        console.error("Erro no recálculo global:", error);
    }
}

/**
 * Função para Edição de atividades
 */
async function handleEdicaoSubmit(e) {
    e.preventDefault();

    // Obter o botão e configurar estado de carregamento
    const submitBtn = document.getElementById("submitEdicaoBtn");
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Salvando...';
    submitBtn.disabled = true;

    // Coletar dados do formulário
    const id = parseInt(document.getElementById("idEdicao").value);
    const nome = document.getElementById("nomeEdicao").value.trim();
    const tipoNovo = document.getElementById("tipoEdicao").value;
    const horasNovas = parseFloat(document.getElementById("horasEdicao").value);
    const periodoNovo = document.getElementById("periodoEdicao").value.trim();
    const comprovanteInput = document.getElementById("comprovanteEdicao");
    const comprovanteFile = comprovanteInput.files[0];

    // Validações iniciais
    if (!nome || !tipoNovo || isNaN(horasNovas) || horasNovas < 0 || !periodoNovo) {
        mostrarMensagemDoSistema("Preencha todos os campos obrigatórios", "error");
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        return;
    }

    if (!validarPeriodo(periodoNovo, currentUser.matricula)) {
        const anoAtual = new Date().getFullYear();
        const anoIngresso = parseInt(currentUser.matricula.substring(0, 4), 10);
        mostrarMensagemDoSistema(`Período inválido. Formato esperado: AAAA.S (ex: 2025.1) com ano entre ${anoIngresso}-${anoAtual}`, "error");
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        return;
    }

    try {
        const atividadeOriginal = await new Promise((resolve, reject) => {
            const transaction = db.transaction("atividades", "readonly");
            const store = transaction.objectStore("atividades");
            const request = store.get(id);

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject("Erro ao obter atividade");
        });

        if (!atividadeOriginal) {
            mostrarMensagemDoSistema("Atividade não encontrada", "error");
            return;
        }

        const tipoAntigo = atividadeOriginal.tipo;

        // PROCESSAR NOVO COMPROVANTE SE HOUVER
        let novoComprovante = atividadeOriginal.comprovante;
        if (comprovanteFile) {
            novoComprovante = await arquivoParaArrayBuffer(comprovanteFile);
        }

        // Calcular novas horas validadas e definir o status
        let novasHorasValidadas = 0;
        let novoStatus = 'Pendente'; // Por padrão, pendente se não houver comprovante

        // Se houver comprovante, calcula as horas validadas e define o status
        if (novoComprovante != null) {
            novasHorasValidadas = await calcularHorasValidadas(tipoNovo, horasNovas, periodoNovo, novoComprovante, id);
            novoStatus = novasHorasValidadas > 0 ? 'Aprovado' : 'Rejeitado';
        }

        const atividadeAtualizada = {
            ...atividadeOriginal,
            nome,
            tipo: tipoNovo,
            horasRegistradas: horasNovas,
            horasValidadas: novasHorasValidadas,
            periodo: periodoNovo,
            comprovante: novoComprovante,
            status: novoStatus
        };

        await new Promise((resolve, reject) => {
            const transaction = db.transaction("atividades", "readwrite");
            const store = transaction.objectStore("atividades");
            const request = store.put(atividadeAtualizada);

            request.onsuccess = resolve;
            request.onerror = () => reject("Erro ao atualizar atividade");
        });

        const tiposParaRecalcular = new Set();
        tiposParaRecalcular.add(tipoNovo);
        if (tipoNovo !== tipoAntigo) {
            tiposParaRecalcular.add(tipoAntigo);
        }

        const gruposParaRecalcular = new Set();
        const grupoNovo = obterGrupoPorTipo(tipoNovo);
        if (grupoNovo) gruposParaRecalcular.add(grupoNovo);
        if (tipoNovo !== tipoAntigo) {
            const grupoAntigo = obterGrupoPorTipo(tipoAntigo);
            if (grupoAntigo) gruposParaRecalcular.add(grupoAntigo);
        }
        for (const grupo of gruposParaRecalcular) {
            await recalcularHorasGrupo(grupo);
        }

        // Atualizar a atividade após o recálculo (pode ter mudado devido ao recálculo do tipo)
        const atividadeRecalculada = await new Promise((resolve, reject) => {
            const transaction = db.transaction("atividades", "readonly");
            const store = transaction.objectStore("atividades");
            const request = store.get(id);

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject("Erro ao obter atividade após recálculo");
        });

        // Exibir mensagem de sucesso com base no status
        if (atividadeRecalculada.comprovante == null) {
            mostrarMensagemDoSistema("Atividade atualizada com sucesso, porém sem comprovante comprobatório anexado.", "pending");
        } else if (atividadeRecalculada.horasValidadas < horasNovas) {
            const motivo = atividadeRecalculada.horasValidadas === 0 ?
                "limite global atingido para este tipo de atividade" :
                "limites de horas atingidos";
            mostrarMensagemDoSistema(`Atividade atualizada, mas apenas ${atividadeRecalculada.horasValidadas}h validadas (${motivo}).`, "success");
        } else {
            mostrarMensagemDoSistema("Atividade atualizada com sucesso!", "success");
        }

        document.getElementById("formEdicao").reset();
        // Limpar campo de arquivo após sucesso
        comprovanteInput.value = "";
        // Limpar info do comprovante atual
        document.getElementById("comprovanteAtualInfo").textContent = "";
        atualizarTabela();
        atualizarResumo();

        // Restaurar o botão após sucesso
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;

    } catch (error) {
        // Restaurar o botão em caso de erro
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        mostrarMensagemDoSistema("Erro ao atualizar atividade: " + error, "error");
    }
}

/**
 * Função para limpar os campos da aba edição
 */
function limparEdicao() {
    document.getElementById("formEdicao").reset();
    document.getElementById("comprovanteAtualInfo").textContent = "";

    // Resetar os componentes personalizados dos selects
    const selects = ['tipoEdicao'];

    selects.forEach(selectId => {
        const originalSelect = document.getElementById(selectId);
        if (!originalSelect) return;

        // Resetar o select original
        originalSelect.value = "";

        // Atualizar o componente personalizado
        const wrapper = originalSelect.previousElementSibling;
        if (wrapper && wrapper.classList.contains('searchable-select-wrapper')) {
            const selectText = wrapper.querySelector('.select-text-edicao');
            if (selectText) {
                selectText.textContent = "Selecione uma opção";
            }

            // Fechar dropdown se estiver aberto
            const dropdown = wrapper.querySelector('.select-dropdown');
            if (dropdown) {
                dropdown.style.display = 'none';
            }

            // Limpar campo de pesquisa
            const searchInput = wrapper.querySelector('.dropdown-search-input');
            if (searchInput) {
                searchInput.value = '';
            }
        }
    });
}

/**
 * Função para exibir Resumo e estatísticas
 */
async function atualizarResumo() {
    let totalHorasRegistradas = 0;
    let totalHorasValidadas = 0;

    const transaction = db.transaction("atividades", "readonly");
    const store = transaction.objectStore("atividades");
    const request = store.openCursor();

    request.onsuccess = function (e) {
        const cursor = e.target.result;
        if (cursor) {
            const atividade = cursor.value;
            if (atividade.usuario === currentUser.username) {
                totalHorasRegistradas += atividade.horasRegistradas;
                totalHorasValidadas += atividade.horasValidadas;
            }
            cursor.continue();
        } else {
            const progressoTotal = Math.min(100, Math.round((totalHorasValidadas / horasNecessarias) * 100));

            document.getElementById("resumoHorasRegistradas").textContent = totalHorasRegistradas;
            document.getElementById("resumoHorasValidadas").textContent = totalHorasValidadas;

            document.getElementById("totalHorasRegistradas").textContent = totalHorasRegistradas;
            document.getElementById("totalHorasValidadas").textContent = totalHorasValidadas;

            document.getElementById("progressoTotalPercent").textContent = `${progressoTotal}%`;
            document.getElementById("progressoTotalFill").style.width = `${progressoTotal}%`;

            document.getElementById("horasValidadasPercent").textContent = `${totalHorasValidadas}/${horasNecessarias}`;
            document.getElementById("horasValidadasFill").style.width = `${progressoTotal}%`;

            if (document.getElementById("resumo").classList.contains("active")) {
                atualizarGraficoResumo();
            }
        }
    };
}

/**
 * Função auxiliar para atualizar a exibição do Resumo e estatísticas
 */
async function atualizarGraficoResumo() {
    const ctx = document.getElementById('hoursChart').getContext('2d');

    if (horasChart) {
        horasChart.destroy();
    }

    // Inicializa horas por grupo
    const horasPorGrupo = {};
    gruposAtividades.forEach(grupo => {
        horasPorGrupo[grupo] = 0;
    });

    const transaction = db.transaction("atividades", "readonly");
    const store = transaction.objectStore("atividades");
    const request = store.openCursor();

    request.onsuccess = function (e) {
        const cursor = e.target.result;
        if (cursor) {
            const atividade = cursor.value;
            if (atividade.usuario === currentUser.username) {
                for (const grupo in AtividadesPorGrupo) {
                    if (AtividadesPorGrupo[grupo].includes(atividade.tipo)) {
                        horasPorGrupo[grupo] += Number(atividade.horasValidadas || 0);
                        break;
                    }
                }
            }
            cursor.continue();
        } else {
            const totalHorasValidadas = Object.values(horasPorGrupo).reduce((a, b) => a + b, 0);
            const horasRestantes = Math.max(0, horasNecessarias - totalHorasValidadas);

            const labels = [];
            const data = [];

            // Adiciona grupos com horas (>0)
            for (const grupo in horasPorGrupo) {
                if (horasPorGrupo[grupo] > 0) {
                    labels.push(grupo.split(' - ')[0]);
                    data.push(horasPorGrupo[grupo]);
                }
            }

            // Sempre inclui a fatia "Horas Restantes"
            if (horasRestantes > 0) {
                labels.push('Horas Restantes');
                data.push(horasRestantes);
            }

            // Cores base para os grupos; última cor será usada para "Horas Restantes"
            const baseColors = [
                '#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b', '#858796'
            ];
            const backgroundColors = [];
            for (let i = 0; i < data.length; i++) {
                if (i < baseColors.length) {
                    backgroundColors.push(baseColors[i]);
                } else {
                    backgroundColors.push('#d1d3e2');
                }
            }

            // Forçar cor cinza para 'Horas Restantes' (último elemento)
            if (horasRestantes > 0) {
                backgroundColors[backgroundColors.length - 1] = '#e9ecef';
            }

            horasChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: labels,
                    datasets: [{
                        data: data,
                        backgroundColor: backgroundColors,
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'bottom', labels: { font: { size: 10 } } },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    const label = context.label || '';
                                    const value = context.raw || 0;
                                    return `${label}: ${value} horas`;
                                }
                            }
                        }
                    }
                }
            });
        }
    };
}

/**
 * Variáveis globais para o preview do PDF
 */
let __CURRENT_DOC = null;
let __CURRENT_BLOBURL = null;

/**
 * Prepara e exibe o preview do relatório ABNT
 */
async function previewRelatorioABNT() {
    // Liberar URL anterior se houver
    if (__CURRENT_BLOBURL) {
        URL.revokeObjectURL(__CURRENT_BLOBURL);
        __CURRENT_BLOBURL = null;
    }

    const btn = document.getElementById("imprimirBtn");
    const originalText = '<i class="fas fa-print"></i> Visualizar Relatório';
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gerando Relatório...';
    btn.disabled = true;

    try {
        const pdfArrayBuffer = await gerarRelatorioCompleto();

        // VERIFICAR SE O PDF NÃO ESTÁ VAZIO
        if (!pdfArrayBuffer || pdfArrayBuffer.byteLength < 100) {
            throw new Error("PDF gerado está vazio ou corrompido");
        }

        const blob = new Blob([pdfArrayBuffer], { type: 'application/pdf' });
        const blobUrl = URL.createObjectURL(blob);
        __CURRENT_BLOBURL = blobUrl;

        // RESTAURAR BOTÃO IMEDIATAMENTE APÓS GERAR O PDF
        btn.innerHTML = originalText;
        btn.disabled = false;

        const overlay = document.getElementById('previewRelatorioOverlay');
        const iframe = document.getElementById('previewRelatorioIframe');
        if (overlay && iframe) {
            iframe.src = blobUrl;
            overlay.style.display = "flex";
        }

    } catch (error) {
        console.error('Erro ao gerar preview:', error);
        mostrarMensagemDoSistema("Erro ao gerar relatório: " + error.message, "error");
        // RESTAURAR O BOTÃO EM CASO DE ERRO
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

/**
 * Fecha o preview do relatório
 */
function fecharPreviewRelatorio() {
    const overlay = document.getElementById('previewRelatorioOverlay');
    const iframe = document.getElementById('previewRelatorioIframe');

    if (overlay) {
        overlay.style.display = 'none';
    }
    if (iframe) {
        iframe.src = 'about:blank';
    }

    // Garantir que o botão está no estado correto
    const btn = document.getElementById("imprimirBtn");
    btn.innerHTML = '<i class="fas fa-print"></i> Visualizar PDF';
    btn.disabled = false;
}

/**
 * Baixa o PDF atual do preview do relatório
 */
function baixarPdfAtual() {
    if (!__CURRENT_BLOBURL) {
        mostrarMensagemDoSistema("Nenhum relatório gerado para baixar", "error");
        return;
    }

    try {
        const nomeAluno = currentUser.nomeCompleto ?
            currentUser.nomeCompleto.replace(/\s+/g, '_') :
            currentUser.username;

        // Abrir a URL em uma nova aba para forçar o download
        const link = document.createElement('a');
        link.href = __CURRENT_BLOBURL;
        link.download = `Relatorio_Atividades_Complementares_${nomeAluno}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    } catch (error) {
        console.error('Erro ao baixar PDF:', error);
        mostrarMensagemDoSistema("Erro ao baixar o relatório", "error");
    }
}

/**
 * Atualize a função handleImprimir para usar o novo nome
 */
async function handleImprimir() {
    // Verificar se já está processando para evitar duplo clique
    const btn = document.getElementById("imprimirBtn");
    if (btn.innerHTML.includes('fa-spinner')) {
        return; // Já está processando, não fazer nada
    }

    await previewRelatorioABNT();
}

/**
 * Função para verificar e validar comprovantes
 */
async function verificarComprovantes() {
    const atividades = await obterAtividadesPorUsuario(currentUser.username);
    const comprovantesValidos = [];
    const comprovantesInvalidos = [];

    for (const atividade of atividades) {
        if (atividade.comprovante && atividade.comprovante.byteLength > 0) {
            try {
                const info = await obterInformacoesPDF(atividade.comprovante);
                if (info.isValid) {
                    comprovantesValidos.push({
                        id: atividade.id,
                        nome: atividade.nome,
                        paginas: info.pageCount
                    });
                } else {
                    comprovantesInvalidos.push({
                        id: atividade.id,
                        nome: atividade.nome,
                        erro: info.error
                    });
                }
            } catch (error) {
                comprovantesInvalidos.push({
                    id: atividade.id,
                    nome: atividade.nome,
                    erro: error.message
                });
            }
        }
    }

    console.log('Comprovantes válidos:', comprovantesValidos);
    console.log('Comprovantes inválidos:', comprovantesInvalidos);

    return {
        validos: comprovantesValidos,
        invalidos: comprovantesInvalidos
    };
}

/**
 * Converte ArrayBuffer para PDFDocument do pdf-lib (não está mais sendo usada)
 */
async function arrayBufferParaDocumentoPdf(arrayBuffer) {
    try {
        const { PDFDocument } = PDFLib;
        return await PDFDocument.load(arrayBuffer);
    } catch (error) {
        console.error('Erro ao carregar PDF:', error);
        throw new Error('Falha ao processar o arquivo PDF');
    }
}

/**
 * Cria uma página de identificação para o comprovante no padrão ABNT
 */
async function criarPaginaIdentificacaoComprovante(nomeComprovante, periodo) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: "mm", format: "a4" });

    // ---------- CONFIGURAÇÕES ABNT ----------
    const margemTopo = 30;
    const margemEsquerda = 30;
    const margemDireita = 20;
    const margemInferior = 20;

    const larguraPagina = doc.internal.pageSize.getWidth();
    const alturaPagina = doc.internal.pageSize.getHeight();
    const larguraUtil = larguraPagina - margemEsquerda - margemDireita;

    // ---------- FUNÇÕES AUXILIARES ----------
    const EspacamentoEntreLinhas = 0.3528 * 12 * 1.5;
    const EspacamentoEntreLinhasSimples = 0.3528 * 12 * 1.0;

    // Função para renderizar linha justificada (mantida do código original)
    function renderLine(wordsArr, xStart, y, maxWidth) {
        if (wordsArr.length === 0) return;
        if (wordsArr.length === 1) {
            doc.text(wordsArr[0], xStart, y, { align: 'left' });
            return;
        }
        const spaceCount = wordsArr.length - 1;
        const wordsWidth = wordsArr.map(w => doc.getTextWidth(w)).reduce((a, b) => a + b, 0);
        const totalSpacesWidth = maxWidth - wordsWidth;
        const spaceWidth = totalSpacesWidth / spaceCount;

        let x = xStart;
        for (let i = 0; i < wordsArr.length; i++) {
            doc.text(wordsArr[i], x, y, { align: 'left' });
            x += doc.getTextWidth(wordsArr[i]) + spaceWidth;
        }
    }

    // Função de justificação (mantida do código original)
    function TextoJustificadoSemEspacamentoPrimeiraLinha(docInstance, text, xStart, yStart, maxWidth, lineHeight, fontName = "times", fontStyle = "normal", fontSize = 12) {
        docInstance.setFont(fontName, fontStyle);
        docInstance.setFontSize(fontSize);
        const words = text.replace(/\s+/g, ' ').trim().split(' ');
        let lineWords = [];
        let y = yStart;

        function lineWidth(wordsArr) {
            if (wordsArr.length === 0) return 0;
            return wordsArr.map(w => docInstance.getTextWidth(w)).reduce((a, b) => a + b, 0) + (wordsArr.length - 1) * docInstance.getTextWidth(' ');
        }

        for (let i = 0; i < words.length; i++) {
            lineWords.push(words[i]);
            let lw = lineWidth(lineWords);
            if (lw > maxWidth) {
                const last = lineWords.pop();
                renderLine(lineWords, xStart, y, maxWidth);
                lineWords = [last];
                y += lineHeight;
            }
        }
        if (lineWords.length > 0) {
            docInstance.text(lineWords.join(' '), xStart, y, { align: 'left', maxWidth: maxWidth });
            y += lineHeight;
        }
        return y;
    }

    // ---------- CONTEÚDO DA PÁGINA ----------
    let cursorY = margemTopo;

    // Título principal
    doc.setFont("times", "bold");
    doc.setFontSize(16);
    doc.text("COMPROVANTE DE ATIVIDADE COMPLEMENTAR", margemEsquerda + (larguraUtil / 2), cursorY, { align: 'center' });
    cursorY += 3 * EspacamentoEntreLinhas;

    // Atividade com justificação
    doc.setFont("times", "bold");
    doc.setFontSize(12);
    doc.text("Atividade: ", margemEsquerda, cursorY);

    doc.setFont("times", "normal");
    const textoAtividade = nomeComprovante;
    cursorY = TextoJustificadoSemEspacamentoPrimeiraLinha(doc, textoAtividade, margemEsquerda, cursorY + EspacamentoEntreLinhas, larguraUtil, EspacamentoEntreLinhas, "times", "normal", 12);

    cursorY += EspacamentoEntreLinhas;

    // Período (se existir)
    if (periodo && periodo !== 'N/A') {
        doc.setFont("times", "bold");
        doc.setFontSize(12);
        doc.text("Período: ", margemEsquerda, cursorY);

        doc.setFont("times", "normal");
        doc.text(periodo, margemEsquerda + doc.getTextWidth("Período:_"), cursorY);
        cursorY += 2 * EspacamentoEntreLinhas;
    } else {
        cursorY += EspacamentoEntreLinhas;
    }

    // Texto informativo
    doc.setFont("times", "normal");
    doc.setFontSize(10);
    doc.setTextColor(128, 128, 128); // Cinza
    cursorY = TextoJustificadoSemEspacamentoPrimeiraLinha(doc, "Documento comprobatório anexado digitalmente.", margemEsquerda, cursorY, larguraUtil, EspacamentoEntreLinhas, "times", "normal", 10);

    cursorY += 2 * EspacamentoEntreLinhas;

    // Linha divisória
    doc.setDrawColor(200, 200, 200); // Cinza claro
    doc.setLineWidth(0.5);
    doc.line(margemEsquerda, cursorY, margemEsquerda + larguraUtil, cursorY);

    cursorY += EspacamentoEntreLinhas;

    // Texto de início do comprovante
    doc.setFont("times", "normal");
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100); // Cinza escuro
    doc.text("INÍCIO DO COMPROVANTE ORIGINAL", margemEsquerda + (larguraUtil / 2), cursorY, { align: 'center' });

    // Rodapé
    const rodapeY = alturaPagina - margemInferior;
    doc.setFont("times", "normal");
    doc.setFontSize(8);
    doc.setTextColor(180, 180, 180); // Cinza claro
    doc.text("Relatório gerado automaticamente pelo SIGACC - Sistema Integrado de Gestão de Atividades Complementares Curriculares",
        margemEsquerda + (larguraUtil / 2), rodapeY, { align: 'center' });

    // Retornar como ArrayBuffer para combinação
    return doc.output('arraybuffer');
}

/**
 * Função auxiliar para combinar PDFs
 */
async function combinarPDFs(pdfs) {
    const { PDFDocument } = PDFLib;
    const mergedPdf = await PDFDocument.create();

    for (const pdf of pdfs) {
        try {
            let pdfDoc;
            if (pdf instanceof ArrayBuffer || pdf instanceof Uint8Array) {
                pdfDoc = await PDFDocument.load(pdf);
            } else {
                console.warn('Tipo de PDF não suportado:', typeof pdf);
                continue;
            }

            const pages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
            pages.forEach(page => mergedPdf.addPage(page));

        } catch (error) {
            console.error('Erro ao combinar PDF:', error);
            const fallbackPdf = await criarPaginaIdentificacaoComprovante(
                'Comprovante com erro de processamento',
                'N/A'
            );
            const fallbackDoc = await PDFDocument.load(fallbackPdf);
            const fallbackPages = await mergedPdf.copyPages(fallbackDoc, fallbackDoc.getPageIndices());
            fallbackPages.forEach(page => mergedPdf.addPage(page));
        }
    }

    return await mergedPdf.save();
}

/**
 * Obtém informações básicas do PDF (número de páginas)
 */
async function obterInformacoesPDF(arrayBuffer) {
    try {
        const { PDFDocument } = PDFLib;
        const pdfDoc = await PDFDocument.load(arrayBuffer);
        return {
            pageCount: pdfDoc.getPageCount(),
            isValid: true
        };
    } catch (error) {
        return {
            pageCount: 0,
            isValid: false,
            error: error.message
        };
    }
}

/**
 * Função principal que combina relatório + comprovantes na ORDEM DA TABELA
 */
async function gerarRelatorioCompleto() {
    try {
        // 1. Gerar o relatório textual (ABNT) com numeração
        const relatorioArrayBuffer = await criarRelatorioCompletoABNT();

        // 2. Obter atividades ORDENADAS POR GRUPO (igual à tabela do relatório)
        const atividades = await obterAtividadesPorUsuario(currentUser.username);
        const atividadesAprovadas = atividades.filter(a => a.status === 'Aprovado');

        // 3. ORDENAR atividades na MESMA ORDEM da tabela do relatório (por grupo)
        const atividadesOrdenadas = [];

        // Percorrer os grupos na mesma ordem usada no relatório
        for (const grupo of gruposAtividades) {
            // Filtrar atividades deste grupo
            const atividadesDoGrupo = atividadesAprovadas.filter(atividade => {
                for (const grupoKey in AtividadesPorGrupo) {
                    if (AtividadesPorGrupo[grupoKey].includes(atividade.tipo)) {
                        return grupoKey === grupo;
                    }
                }
                return false;
            });

            // Adicionar atividades do grupo à lista ordenada
            atividadesOrdenadas.push(...atividadesDoGrupo);
        }

        // 4. Coletar comprovantes na MESMA ORDEM das atividades ordenadas
        const comprovantesProcessados = [];

        for (const atividade of atividadesOrdenadas) {
            try {
                if (atividade.comprovante && atividade.comprovante.byteLength > 0) {
                    // Criar página de identificação (sem numeração) - já retorna ArrayBuffer
                    const paginaIdArrayBuffer = await criarPaginaIdentificacaoComprovante(
                        atividade.nome,
                        atividade.periodo
                    );

                    // Adicionar página de identificação + comprovante real
                    comprovantesProcessados.push(paginaIdArrayBuffer);
                    comprovantesProcessados.push(atividade.comprovante);
                }
            } catch (error) {
                console.error(`Erro ao processar comprovante ${atividade.id}:`, error);

                // Fallback em caso de erro
                const fallbackArrayBuffer = await criarPaginaIdentificacaoComprovante(
                    atividade.nome,
                    'Erro no processamento do comprovante'
                );
                comprovantesProcessados.push(fallbackArrayBuffer);
            }
        }

        // 5. Combinar relatório (com numeração) + comprovantes (sem numeração) na ORDEM CORRETA
        const todosPdfs = [relatorioArrayBuffer, ...comprovantesProcessados];
        const pdfCombinado = await combinarPDFs(todosPdfs);

        return pdfCombinado;

    } catch (error) {
        console.error('Erro ao gerar relatório completo:', error);
        throw new Error('Falha ao gerar relatório completo');
    }
}

/**
 * Combina múltiplos PDFs em um único PDF
async function combinarPDFs(pdfs) {
    const { PDFDocument } = PDFLib;
    const mergedPdf = await PDFDocument.create();

    for (const pdf of pdfs) {
        try {
            // Se for um ArrayBuffer, carrega como PDF
            let pdfDoc;
            if (pdf instanceof ArrayBuffer || pdf instanceof Uint8Array) {
                pdfDoc = await PDFDocument.load(pdf);
            } else {
                console.warn('Tipo de PDF não suportado:', typeof pdf);
                continue;
            }

            // Copia todas as páginas
            const pages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
            pages.forEach(page => mergedPdf.addPage(page));

        } catch (error) {
            console.error('Erro ao combinar PDF:', error);
            // Em caso de erro, cria uma página de fallback
            const fallbackArrayBuffer = await criarPaginaIdentificacaoComprovante(
                'Comprovante com erro de processamento',
                'N/A'
            );
            const fallbackDoc = await PDFDocument.load(fallbackArrayBuffer);
            const fallbackPages = await mergedPdf.copyPages(fallbackDoc, fallbackDoc.getPageIndices());
            fallbackPages.forEach(page => mergedPdf.addPage(page));
        }
    }

    return await mergedPdf.save();
}
 */

/**
 * Cria o relatório completo no formato ABNT com numeração apenas na parte textual
 */
async function criarRelatorioCompletoABNT() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: "mm", format: "a4" });

    // Obter dados do estudante e atividades
    const estudante = currentUser;
    const atividades = await obterAtividadesPorUsuario(currentUser.username);
    const atividadesAprovadas = atividades.filter(a => a.status === 'Aprovado');

    // Agrupar atividades aprovadas por grupo
    const atividadesPorGrupo = {};
    gruposAtividades.forEach(grupo => {
        atividadesPorGrupo[grupo] = atividadesAprovadas.filter(atividade => {
            for (const grupoKey in AtividadesPorGrupo) {
                if (AtividadesPorGrupo[grupoKey].includes(atividade.tipo)) {
                    return grupoKey === grupo;
                }
            }
            return false;
        });
    });

    // ---------- CONFIGURAÇÕES ----------
    const instituicao = "UNIVERSIDADE ESTADUAL DO MARANHÃO";
    const centro = "CENTRO DE CIÊNCIAS TECNOLÓGICAS";
    const curso = "CURSO DE GRADUAÇÃO EM ENGENHARIA DE PRODUÇÃO";
    const nomeAluno = estudante.nomeCompleto || estudante.username;
    const matriculaAluno = estudante.matricula || "-----";
    const tituloRelatorio = "Relatório de Atividades Complementares";

    const descricaoAprovacao = "Relatório de Atividades Complementares apresentado na Universidade Estadual do Maranhão, em cumprimento às exigências da disciplina de Atividades Complementares, do Curso Bacharelado em Engenharia de Produção, com o objetivo de comprovar o cumprimento da carga horária determinada de 225h.";

    const introducao_p1 = "De acordo com o disposto no Regulamento das Atividades Complementares do Curso de Engenharia de Produção da Universidade Estadual do Maranhão – 3ª atualização, é obrigatório ao discente do curso o cumprimento de 225 (duzentas e vinte e cinco) horas de Atividades Complementares (ACs). Este requisito, essencial para a obtenção do grau de Bacharel em Engenharia de Produção, está em consonância com as Resoluções CNE No. 02, de 24 de abril de 2019, e CONSUN/UEMA No. 1.369/2019, de 21 de março de 2019.";

    const introducao_p2 = "Conforme estabelecido no Art. 1º do referido regulamento, as Atividades Complementares visam proporcionar flexibilização curricular e o desenvolvimento da autonomia do discente, incentivando sua participação em atividades de caráter científico, acadêmico, cultural ou social que contribuam para o enriquecimento de sua formação profissional.";

    const introducao_p3 = "Para a integralização desta carga horária, o Art. 5º determina que as 225 horas devem ser distribuídas em, no mínimo, 3 (três) dos 6 (seis) grupos de atividades descritos no Anexo A do regulamento, respeitando os limites máximos de pontuação por atividade e por grupo.";

    const objetivo_p1 = "Com o intuito de cumprir este requisito obrigatório para a graduação, o presente relatório tem como objetivo detalhar e comprovar as atividades realizadas pelo discente " + nomeAluno + " ao longo de sua trajetória acadêmica.";

    const objetivo_p2 = "Em atendimento ao Art. 1º, § 2º, este documento serve como base para o requerimento de avaliação das atividades perante a Diretoria do Curso, apresentando de forma organizada:";

    const objetivo_itemA = "a) A relação das atividades realizadas, enquadradas nos grupos previstos no Anexo A.";
    const objetivo_itemB = "b) A carga horária pleiteada para cada atividade.";
    const objetivo_itemC = "c) Os documentos comprobatórios que atestam a realização das mesmas (em anexo).";

    const metodologia_p1 = "As atividades desenvolvidas pelo discente foram catalogadas e classificadas conforme os grupos estabelecidos no Anexo A do regulamento. A seguir, é apresentada uma tabela-resumo que consolida todas as atividades realizadas, permitindo uma visão clara do atendimento aos critérios de distribuição e carga horária total.";

    const metodologia_p2 = "O discente buscou cumprir a exigência de, no mínimo, três grupos distintos, assegurando uma formação complementar diversificada, tal como preconizam os objetivos das ACs.";

    const orientador = "Prof. Dr. Wellinton de Assunção";
    const cargoOrientador = "Docente da Disciplina de Atividades Complementares";
    const cidadeUF = "São Luís, MA";
    const ano = new Date().getFullYear().toString();

    // ---------- MARGENS ABNT ----------
    const margemTopo = 30;
    const margemEsquerda = 30;
    const margemDireita = 20;
    const margemInferior = 20;

    const larguraPagina = doc.internal.pageSize.getWidth();
    const alturaPagina = doc.internal.pageSize.getHeight();
    const larguraUtil = larguraPagina - margemEsquerda - margemDireita;
    const alturaUtil = alturaPagina - margemTopo - margemInferior;

    // ---------- FUNÇÕES AUXILIARES ----------
    const EspacamentoEntreLinhas = 0.3528 * 12 * 1.5;
    const EspacamentoEntreLinhasSimples = 0.3528 * 12 * 1.0;
    const pts_em_mm = 0.3528;

    // Array para armazenar as páginas do sumário
    const paginasSumario = {
        introducao: 0,
        objetivo: 0,
        metodologia: 0,
        tabelaResumo: 0,
        consideracoesFinais: 0,
        anexos: 0
    };

    // Função para adicionar número da página (apenas a partir da introdução)
    function adicionarNumeroPagina(doc, numero) {
        const pageHeight = doc.internal.pageSize.getHeight();
        doc.setFont("times", "normal");
        doc.setFontSize(12);
        doc.text(numero.toString(), margemEsquerda + (larguraUtil / 2), pageHeight - margemInferior + 10, { align: 'center' });
    }

    // Funções de justificação (mantidas do código original)
    function renderLine(wordsArr, xStart, y, maxWidth) {
        if (wordsArr.length === 0) return;
        if (wordsArr.length === 1) {
            doc.text(wordsArr[0], xStart, y, { align: 'left' });
            return;
        }
        const spaceCount = wordsArr.length - 1;
        const wordsWidth = wordsArr.map(w => doc.getTextWidth(w)).reduce((a, b) => a + b, 0);
        const totalSpacesWidth = maxWidth - wordsWidth;
        const spaceWidth = totalSpacesWidth / spaceCount;

        let x = xStart;
        for (let i = 0; i < wordsArr.length; i++) {
            doc.text(wordsArr[i], x, y, { align: 'left' });
            x += doc.getTextWidth(wordsArr[i]) + spaceWidth;
        }
    }

    function TextoJustificadoComEspacamentoPrimeiraLinha(docInstance, text, xStart, yStart, maxWidth, espacamentoInstitucional, recuoPrimeiraLinha, fontName = "times", fontStyle = "normal", fontSize = 12) {
        docInstance.setFont(fontName, fontStyle);
        docInstance.setFontSize(fontSize);

        const words = text.replace(/\s+/g, ' ').trim().split(' ');
        let lineWords = [];
        let y = yStart;

        function lineWidth(wordsArr) {
            if (wordsArr.length === 0) return 0;
            return (
                wordsArr.map(w => docInstance.getTextWidth(w)).reduce((a, b) => a + b, 0) +
                (wordsArr.length - 1) * docInstance.getTextWidth(' ')
            );
        }

        let primeiraLinhaParagrafo = true;

        for (let i = 0; i < words.length; i++) {
            lineWords.push(words[i]);

            const larguraDisponivel = primeiraLinhaParagrafo ? maxWidth - recuoPrimeiraLinha : maxWidth;

            let lw = lineWidth(lineWords);

            if (lw > larguraDisponivel) {
                const last = lineWords.pop();

                const currentX = primeiraLinhaParagrafo ? xStart + recuoPrimeiraLinha : xStart;

                if (lineWords.length > 1) {
                    const totalTextWidth = lineWidth(lineWords);
                    const spaceWidth = docInstance.getTextWidth(' ');
                    const extraSpace = (larguraDisponivel - totalTextWidth) / (lineWords.length - 1);

                    let cursorX = currentX;
                    for (let j = 0; j < lineWords.length; j++) {
                        docInstance.text(lineWords[j], cursorX, y);
                        cursorX += docInstance.getTextWidth(lineWords[j]) + spaceWidth + extraSpace;
                    }
                } else {
                    docInstance.text(lineWords.join(' '), currentX, y);
                }

                lineWords = [last];
                y += espacamentoInstitucional;
                primeiraLinhaParagrafo = false;
            }
        }

        if (lineWords.length > 0) {
            const currentX = primeiraLinhaParagrafo ? xStart + recuoPrimeiraLinha : xStart;
            docInstance.text(lineWords.join(' '), currentX, y);
            y += espacamentoInstitucional;
        }

        return y;
    }

    function TextoJustificadoSemEspacamentoPrimeiraLinha(docInstance, text, xStart, yStart, maxWidth, lineHeight, fontName = "times", fontStyle = "normal", fontSize = 12) {
        docInstance.setFont(fontName, fontStyle);
        docInstance.setFontSize(fontSize);
        const words = text.replace(/\s+/g, ' ').trim().split(' ');
        let lineWords = [];
        let y = yStart;

        function lineWidth(wordsArr) {
            if (wordsArr.length === 0) return 0;
            return wordsArr.map(w => docInstance.getTextWidth(w)).reduce((a, b) => a + b, 0) + (wordsArr.length - 1) * docInstance.getTextWidth(' ');
        }

        for (let i = 0; i < words.length; i++) {
            lineWords.push(words[i]);
            let lw = lineWidth(lineWords);
            if (lw > maxWidth) {
                const last = lineWords.pop();
                renderLine(lineWords, xStart, y, maxWidth);
                lineWords = [last];
                y += lineHeight;
            }
        }
        if (lineWords.length > 0) {
            docInstance.text(lineWords.join(' '), xStart, y, { align: 'left', maxWidth: maxWidth });
            y += lineHeight;
        }
        return y;
    }

    // ---------- CAPA ----------
    doc.setFont("times", "normal");
    const capaLinhas = [
        instituicao.toUpperCase(),
        centro.toUpperCase(),
        curso.toUpperCase()
    ];

    doc.setFontSize(12);
    let y = margemTopo + EspacamentoEntreLinhasSimples;
    capaLinhas.forEach(line => {
        doc.text(line, margemEsquerda + (larguraUtil / 2), y, { align: 'center' });
        y += EspacamentoEntreLinhas;
    });

    y += 4 * EspacamentoEntreLinhas;
    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(nomeAluno.toUpperCase(), margemEsquerda + (larguraUtil / 2), y, { align: 'center' });

    y += 5 * EspacamentoEntreLinhas;
    doc.setFont("times", "bold");
    doc.setFontSize(12);
    doc.text(tituloRelatorio.toUpperCase(), margemEsquerda + (larguraUtil / 2), y, { align: 'center' });

    doc.setFont("times", "normal");
    doc.setFontSize(12);
    doc.text(cidadeUF, margemEsquerda + (larguraUtil / 2), alturaPagina - margemInferior - EspacamentoEntreLinhas, { align: 'center' });
    doc.text(ano, margemEsquerda + (larguraUtil / 2), alturaPagina - margemInferior, { align: 'center' });

    // ---------- FOLHA DE APROVAÇÃO ----------
    doc.addPage();
    doc.setPage(doc.internal.getNumberOfPages());
    let cursorY = margemTopo + EspacamentoEntreLinhasSimples;
    doc.setFont("times", "bold");
    doc.setFontSize(12);
    doc.text(nomeAluno.toUpperCase(), margemEsquerda + (larguraUtil / 2), cursorY, { align: 'center' });

    cursorY += 5 * EspacamentoEntreLinhas;
    doc.setFont("times", "normal");
    doc.setFontSize(12);
    doc.text(tituloRelatorio.toUpperCase(), margemEsquerda + (larguraUtil / 2), cursorY, { align: 'center' });

    cursorY += 3 * EspacamentoEntreLinhas;
    doc.setFont("times", "normal");
    doc.setFontSize(12);
    const yAposParagrafo = TextoJustificadoSemEspacamentoPrimeiraLinha(doc, descricaoAprovacao, margemEsquerda + 60, cursorY, 100, EspacamentoEntreLinhasSimples, "times", "normal", 12);

    let approvalY = yAposParagrafo + 3 * EspacamentoEntreLinhas;
    doc.setFontSize(12);
    doc.text("Aprovado em _______ de _______________ de " + ano, margemEsquerda + 60, approvalY, { align: 'left' });

    let assinaturaY = approvalY + 6 * EspacamentoEntreLinhas;
    const assinaturaX = margemEsquerda;
    const assinaturaWidth = larguraUtil;
    doc.setLineWidth(0.3);
    doc.line(assinaturaX, assinaturaY, assinaturaX + assinaturaWidth, assinaturaY);
    doc.setFont("times", "bold");
    doc.setFontSize(12);
    doc.text(nomeAluno, margemEsquerda + (larguraUtil / 2), assinaturaY + EspacamentoEntreLinhasSimples, { align: 'center' });
    doc.setFont("times", "normal");
    doc.setFontSize(12);
    doc.text("Discente do Curso de Engenharia de Produção", margemEsquerda + (larguraUtil / 2), assinaturaY + 2 * EspacamentoEntreLinhasSimples, { align: 'center' });
    doc.text("Universidade Estadual do Maranhão", margemEsquerda + (larguraUtil / 2), assinaturaY + 3 * EspacamentoEntreLinhasSimples, { align: 'center' });

    assinaturaY += 6 * EspacamentoEntreLinhas;
    doc.setLineWidth(0.3);
    doc.line(assinaturaX, assinaturaY, assinaturaX + assinaturaWidth, assinaturaY);
    doc.setFont("times", "bold");
    doc.setFontSize(12);
    doc.text(orientador, margemEsquerda + (larguraUtil / 2), assinaturaY + EspacamentoEntreLinhasSimples, { align: 'center' });
    doc.setFont("times", "normal");
    doc.setFontSize(12);
    doc.text(cargoOrientador, margemEsquerda + (larguraUtil / 2), assinaturaY + 2 * EspacamentoEntreLinhasSimples, { align: 'center' });
    doc.text("Universidade Estadual do Maranhão", margemEsquerda + (larguraUtil / 2), assinaturaY + 3 * EspacamentoEntreLinhasSimples, { align: 'center' });

    doc.setFont("times", "normal");
    doc.setFontSize(12);
    doc.text(cidadeUF, margemEsquerda + (larguraUtil / 2), alturaPagina - margemInferior - EspacamentoEntreLinhas, { align: 'center' });
    doc.text(ano, margemEsquerda + (larguraUtil / 2), alturaPagina - margemInferior, { align: 'center' });

    // ---------- SUMÁRIO ----------
    doc.addPage();
    const paginaSumario = doc.internal.getNumberOfPages();
    doc.setPage(doc.internal.getNumberOfPages());

    doc.setFont("times", "bold");
    doc.setFontSize(12);
    doc.text("SUMÁRIO", margemEsquerda + (larguraUtil / 2), margemTopo + EspacamentoEntreLinhasSimples, { align: 'center' });

    let sumarioY = margemTopo + 4 * EspacamentoEntreLinhasSimples;
    doc.setFont("times", "normal");
    doc.setFontSize(12);

    // Função para desenhar linha do sumário com numeração dinâmica
    function desenharLinhaSumario(titulo, numeroPagina, y) {
        const larguraTotal = larguraUtil;
        const larguraTitulo = doc.getTextWidth(titulo);
        const numeroStr = numeroPagina.toString();
        const larguraNumero = doc.getTextWidth(numeroStr);

        const espacoPontos = larguraTotal - larguraTitulo - larguraNumero - 5;
        const numPontos = Math.floor(espacoPontos / doc.getTextWidth('.'));
        const pontos = '.'.repeat(numPontos);

        doc.text(titulo, margemEsquerda, y);
        doc.text(pontos, margemEsquerda + larguraTitulo + 2, y);
        doc.text(numeroStr, margemEsquerda + larguraTotal - larguraNumero, y);

        return y + EspacamentoEntreLinhas;
    }

    // As páginas serão atualizadas depois que o conteúdo for gerado
    const itensSumario = [
        { titulo: "1.  INTRODUÇÃO", pagina: 0 },
        { titulo: "2.  OBJETIVO DO RELATÓRIO", pagina: 0 },
        { titulo: "3.  METODOLOGIA E APRESENTAÇÃO DAS ATIVIDADES", pagina: 0 },
        { titulo: "4.  TABELA-RESUMO DAS ATIVIDADES COMPLEMENTARES", pagina: 0 },
        { titulo: "5.  CONSIDERAÇÕES FINAIS", pagina: 0 },
        { titulo: "ANEXOS", pagina: 0 }
    ];

    itensSumario.forEach(item => {
        sumarioY = desenharLinhaSumario(item.titulo, item.pagina, sumarioY);
    });

    // ---------- INTRODUÇÃO E OBJETIVOS ----------
    doc.addPage();
    const paginaIntroducao = doc.internal.getNumberOfPages();
    paginasSumario.introducao = paginaIntroducao;
    paginasSumario.objetivo = paginaIntroducao;
    paginasSumario.metodologia = paginaIntroducao;
    doc.setPage(doc.internal.getNumberOfPages());
    cursorY = margemTopo + EspacamentoEntreLinhas;

    // Introdução
    doc.setFont("times", "bold");
    doc.setFontSize(12);
    doc.text("1.  INTRODUÇÃO", margemEsquerda + (0.63 * 10), cursorY, { align: 'left' });
    cursorY += EspacamentoEntreLinhas + (4 * pts_em_mm);

    let yApos_ip1 = TextoJustificadoComEspacamentoPrimeiraLinha(doc, introducao_p1, margemEsquerda, cursorY, larguraUtil, EspacamentoEntreLinhas, 12.5);
    cursorY = yApos_ip1;
    let yApos_ip2 = TextoJustificadoComEspacamentoPrimeiraLinha(doc, introducao_p2, margemEsquerda, cursorY, larguraUtil, EspacamentoEntreLinhas, 12.5);
    cursorY = yApos_ip2;
    let yApos_ip3 = TextoJustificadoComEspacamentoPrimeiraLinha(doc, introducao_p3, margemEsquerda, cursorY, larguraUtil, EspacamentoEntreLinhas, 12.5);
    cursorY = yApos_ip3 + (18 * pts_em_mm);

    // Objetivo
    doc.setFont("times", "bold");
    doc.setFontSize(12);
    doc.text("2.  OBJETIVO DO RELATÓRIO", margemEsquerda + (0.63 * 10), cursorY, { align: 'left' });
    cursorY += EspacamentoEntreLinhas + (4 * pts_em_mm);

    let yApos_op1 = TextoJustificadoComEspacamentoPrimeiraLinha(doc, objetivo_p1, margemEsquerda, cursorY, larguraUtil, EspacamentoEntreLinhas, 12.5);
    cursorY = yApos_op1;
    let yApos_op2 = TextoJustificadoComEspacamentoPrimeiraLinha(doc, objetivo_p2, margemEsquerda, cursorY, larguraUtil, EspacamentoEntreLinhas, 12.5);
    cursorY = yApos_op2;
    let yApos_oitemA = TextoJustificadoComEspacamentoPrimeiraLinha(doc, objetivo_itemA, margemEsquerda, cursorY, larguraUtil, EspacamentoEntreLinhas, 6.4);
    cursorY = yApos_oitemA;
    let yApos_oitemB = TextoJustificadoComEspacamentoPrimeiraLinha(doc, objetivo_itemB, margemEsquerda, cursorY, larguraUtil, EspacamentoEntreLinhas, 6.4);
    cursorY = yApos_oitemB;
    let yApos_oitemC = TextoJustificadoComEspacamentoPrimeiraLinha(doc, objetivo_itemC, margemEsquerda, cursorY, larguraUtil, EspacamentoEntreLinhas, 6.4);
    cursorY = yApos_oitemC + (18 * pts_em_mm);

    // Metodologia
    doc.setFont("times", "bold");
    doc.setFontSize(12);
    doc.text("3.  METODOLOGIA E APRESENTAÇÃO DAS ATIVIDADES", margemEsquerda + (0.63 * 10), cursorY + 0.5, { align: 'left' });
    cursorY += EspacamentoEntreLinhas + (4 * pts_em_mm);

    let yApos_mp1 = TextoJustificadoComEspacamentoPrimeiraLinha(doc, metodologia_p1, margemEsquerda, cursorY, larguraUtil, EspacamentoEntreLinhas, 12.5);
    cursorY = yApos_mp1;
    let yApos_mp2 = TextoJustificadoComEspacamentoPrimeiraLinha(doc, metodologia_p2, margemEsquerda, cursorY, larguraUtil, EspacamentoEntreLinhas, 12.5);
    cursorY = yApos_mp2;

    // ---------- TABELAS DE ATIVIDADES ----------
    doc.addPage();
    const paginaTabelas = doc.internal.getNumberOfPages();
    paginasSumario.tabelaResumo = paginaTabelas;
    doc.setPage(doc.internal.getNumberOfPages());
    cursorY = margemTopo + EspacamentoEntreLinhas;

    const totalHorasValidadas = atividadesAprovadas.reduce((sum, a) => sum + a.horasValidadas, 0);
    const gruposComAtividades = Object.values(atividadesPorGrupo).filter(grupo => grupo.length > 0).length;

    doc.setFont("times", "bold");
    doc.setFontSize(12);
    doc.text("4.  TABELA-RESUMO DAS ATIVIDADES COMPLEMENTARES", margemEsquerda + (0.63 * 10), cursorY, { align: 'left' });
    cursorY += EspacamentoEntreLinhas + (4 * pts_em_mm);

    let startYTable = cursorY;

    // Configurações de margem para autoTable
    const margin = {
        top: margemTopo,
        bottom: margemInferior,
        left: margemDireita,
        right: margemDireita
    };

    // Largura fixa para todas as tabelas: 17cm (170mm)
    const larguraTabelaFixa = 170;

    // Para cada grupo, criar tabela se tiver atividades
    for (const grupo of gruposAtividades) {
        const atividadesDoGrupo = atividadesPorGrupo[grupo];

        if (atividadesDoGrupo.length === 0) continue;

        // Verificar se precisa de nova página antes de adicionar a tabela
        const alturaDisponivel = alturaPagina - startYTable - margemInferior;
        const alturaMinimaTabela = 30;

        if (alturaDisponivel < alturaMinimaTabela) {
            doc.addPage();
            doc.setPage(doc.internal.getNumberOfPages());
            startYTable = margemTopo;
        }

        doc.autoTable({
            startY: startYTable,
            margin: margin,
            tableWidth: larguraTabelaFixa,
            styles: {
                font: "times",
                fontSize: 10,
                cellPadding: 4,
                overflow: 'linebreak',
                valign: 'middle',
                minCellHeight: 8
            },
            head: [
                [
                    {
                        content: grupo,
                        colSpan: 3,
                        styles: {
                            halign: 'center',
                            fillColor: [11, 109, 184],
                            textColor: 255,
                            fontStyle: 'bold',
                            fontSize: 10,
                            cellPadding: 6
                        }
                    }
                ],
                [
                    {
                        content: 'Atividade',
                        styles: {
                            halign: 'center',
                            fontStyle: 'normal',
                            textColor: 0,
                            cellPadding: 4
                        }
                    },
                    {
                        content: 'Descrição da Atividade',
                        styles: {
                            halign: 'center',
                            fontStyle: 'normal',
                            textColor: 0,
                            cellPadding: 4
                        }
                    },
                    {
                        content: 'Pontuação',
                        styles: {
                            halign: 'center',
                            fontStyle: 'normal',
                            textColor: 0,
                            cellPadding: 4
                        }
                    }
                ]
            ],
            body: atividadesDoGrupo.map(atividade => [
                atividade.tipo,
                `${atividade.nome} (${atividade.periodo})`,
                `${atividade.horasValidadas}h`
            ]),
            // LARGURAS FIXAS PARA AS CÉLULAS
            columnStyles: {
                0: {
                    cellWidth: 60,  // Largura fixa para a coluna Atividade
                    fontStyle: 'normal'
                },
                1: {
                    cellWidth: 85,  // Largura fixa para a coluna Descrição
                    fontStyle: 'normal'
                },
                2: {
                    cellWidth: 25,  // Largura fixa para a coluna Pontuação
                    halign: 'center',
                    fontStyle: 'normal'
                }
            },
            headStyles: {
                fillColor: [230, 230, 230],
                textColor: 0,
                fontStyle: 'bold',
                cellPadding: 4
            },
            bodyStyles: {
                cellPadding: 4,
                fontStyle: 'normal'
            },
            alternateRowStyles: {
                fillColor: [250, 250, 250]
            },
            theme: 'grid'
        });

        // Atualizar startYTable para a próxima tabela
        if (doc.autoTable.previous && doc.autoTable.previous.finalY) {
            startYTable = doc.autoTable.previous.finalY;
        } else {
            startYTable += 50;
        }
    }

    // ADICIONAR TABELA DE RESUMO COM TOTAL
    // Verificar se precisa de nova página antes de adicionar a tabela de resumo
    const alturaDisponivelResumo = alturaPagina - startYTable - margemInferior;
    const alturaMinimaTabelaResumo = 15;

    if (alturaDisponivelResumo < alturaMinimaTabelaResumo) {
        doc.addPage();
        doc.setPage(doc.internal.getNumberOfPages());
        startYTable = margemTopo;
    }

    // TABELA DE RESUMO COM FORMATAÇÃO IGUAL AO CABEÇALHO DO GRUPO
    doc.autoTable({
        startY: startYTable,
        margin: margin,
        tableWidth: larguraTabelaFixa,
        styles: {
            font: "times",
            fontSize: 10,
            cellPadding: 4,
            valign: 'middle'
        },
        body: [
            [
                {
                    content: 'Total:',
                    colSpan: 2,
                    styles: {
                        halign: 'right',
                        fontStyle: 'bold',
                        textColor: 255, // Texto branco
                        cellPadding: 6,
                        fillColor: [11, 109, 184] // Mesma cor do cabeçalho do grupo
                    }
                },
                {
                    content: `${totalHorasValidadas}h`,
                    styles: {
                        halign: 'center',
                        fontStyle: 'bold',
                        textColor: 255, // Texto branco
                        cellPadding: 6,
                        fillColor: [11, 109, 184] // Mesma cor do cabeçalho do grupo
                    }
                }
            ]
        ],
        // LARGURAS FIXAS PARA A TABELA DE RESUMO
        columnStyles: {
            0: {
                cellWidth: 145, // Colspan 2 ocupa 60 + 85 = 145mm
                fontStyle: 'bold'
            },
            1: {
                cellWidth: 0,   // Coluna oculta pelo colspan
                fontStyle: 'bold'
            },
            2: {
                cellWidth: 25,  // Mesma largura da coluna Pontuação
                halign: 'center',
                fontStyle: 'bold'
            }
        },
        bodyStyles: {
            cellPadding: 4
        },
        theme: 'grid'
    });

    // ---------- CONSIDERAÇÕES FINAIS ----------
    doc.addPage();
    const paginaConsideracoes = doc.internal.getNumberOfPages();
    paginasSumario.consideracoesFinais = paginaConsideracoes;
    doc.setPage(doc.internal.getNumberOfPages());
    cursorY = margemTopo + EspacamentoEntreLinhas;

    doc.setFont("times", "bold");
    doc.setFontSize(12);
    doc.text("5. CONSIDERAÇÕES FINAIS", margemEsquerda + (0.63 * 10), cursorY, { align: 'left' });
    cursorY += EspacamentoEntreLinhas + (4 * pts_em_mm);

    const consideracoes_p1 = `O discente ${nomeAluno} concluiu a carga horária total de ${totalHorasValidadas} horas de Atividades Complementares, distribuídas em ${gruposComAtividades} grupos, conforme exigido. Todas as atividades aqui relatadas possuem documentação comprobatória válida, que é anexada a este processo para a devida análise e parecer do professor responsável, nos termos do Art. 2º do regulamento.`;

    const consideracoes_p2 = "Espera-se, portanto, a apreciação e a homologação das horas pleiteadas para a integralização deste componente curricular obrigatório.";

    let yApos_cp1 = TextoJustificadoComEspacamentoPrimeiraLinha(doc, consideracoes_p1, margemEsquerda, cursorY, larguraUtil, EspacamentoEntreLinhas, 12.5);
    cursorY = yApos_cp1;
    let yApos_cp2 = TextoJustificadoComEspacamentoPrimeiraLinha(doc, consideracoes_p2, margemEsquerda, cursorY, larguraUtil, EspacamentoEntreLinhas, 12.5);
    cursorY = yApos_cp2;

    // ---------- ANEXOS ----------
    doc.addPage();
    const paginaAnexos = doc.internal.getNumberOfPages();
    paginasSumario.anexos = paginaAnexos;
    doc.setPage(doc.internal.getNumberOfPages());

    doc.setFont("times", "bold");
    doc.setFontSize(16);
    doc.text("ANEXOS", margemEsquerda + (larguraUtil / 2), margemTopo - (EspacamentoEntreLinhas) + (alturaUtil / 2), { align: 'center' });

    doc.setFont("times", "normal");
    doc.setFontSize(12);
    doc.text("DOCUMENTOS COMPROBATÓRIOS", margemEsquerda + (larguraUtil / 2), margemTopo + (EspacamentoEntreLinhas) + (alturaUtil / 2), { align: 'center' });

    // ---------- ATUALIZAR SUMÁRIO COM NÚMEROS CORRETOS ----------
    // Voltar para a página do sumário e atualizar os números
    doc.setPage(paginaSumario);

    // Limpar o sumário existente
    doc.setFillColor(255, 255, 255);
    doc.rect(margemEsquerda, margemTopo + 3 * EspacamentoEntreLinhasSimples,
        larguraUtil, 150, 'F');

    sumarioY = margemTopo + 4 * EspacamentoEntreLinhasSimples;

    // Redesenhar o sumário com os números corretos (numeração textual)
    const itensSumarioAtualizado = [
        { titulo: "1.  INTRODUÇÃO", pagina: paginaIntroducao - 1 }, // Introdução é a página paginaIntroducao - 1 (capa)
        { titulo: "2.  OBJETIVO DO RELATÓRIO", pagina: paginaIntroducao - 1 }, // Mesma página da introdução
        { titulo: "3.  METODOLOGIA E APRESENTAÇÃO DAS ATIVIDADES", pagina: paginaIntroducao - 1 }, // Mesma página
        { titulo: "4.  TABELA-RESUMO DAS ATIVIDADES COMPLEMENTARES", pagina: paginasSumario.tabelaResumo - 1 },
        { titulo: "5.  CONSIDERAÇÕES FINAIS", pagina: paginasSumario.consideracoesFinais - 1 },
        { titulo: "ANEXOS", pagina: paginasSumario.anexos }
    ];

    itensSumarioAtualizado.forEach(item => {
        sumarioY = desenharLinhaSumario(item.titulo, item.pagina, sumarioY);
    });

    // ---------- ADICIONAR NUMERAÇÃO APENAS NA PARTE TEXTUAL ----------
    const totalPagesRelatorio = doc.internal.getNumberOfPages();
    let numeroPaginaTextual = paginaIntroducao - 1; // Começa da introdução

    for (let i = 1; i <= totalPagesRelatorio; i++) {
        doc.setPage(i);

        // Só adiciona numeração a partir da página da introdução
        if (i >= paginaIntroducao) {
            adicionarNumeroPagina(doc, numeroPaginaTextual);
            numeroPaginaTextual++;
        }
    }

    // Retornar o relatório textual (sem comprovantes) como ArrayBuffer
    return doc.output('arraybuffer');
}

/**
 * Obtém atividades do usuário para o relatório
 */
function obterAtividadesPorUsuario(usuario) {
    return new Promise((resolve, reject) => {
        const atividades = [];
        const transaction = db.transaction("atividades", "readonly");
        const store = transaction.objectStore("atividades");
        const index = store.index("usuario");
        const request = index.openCursor(IDBKeyRange.only(usuario));

        request.onsuccess = function (e) {
            const cursor = e.target.result;
            if (cursor) {
                atividades.push(cursor.value);
                cursor.continue();
            } else {
                resolve(atividades);
            }
        };

        request.onerror = () => reject("Erro ao carregar atividades");
    });
}

/**
 * Função para a Tela Administração do Sistema
 */
function buscarUsuario() {
    const username = document.getElementById("filtroUsuario").value.trim();
    if (!username) {
        mostrarMensagemDoSistema("Digite um nome de usuário", "error");
        return;
    }

    const transaction = db.transaction("usuarios", "readonly");
    const store = transaction.objectStore("usuarios");
    const request = store.get(username);

    request.onsuccess = function (e) {
        const user = e.target.result;
        if (user) {
            document.getElementById("adminUsername").value = user.username;
            document.getElementById("detalhesUsuario").classList.remove("hidden");
        } else {
            mostrarMensagemDoSistema("Usuário não encontrado", "error");
            document.getElementById("detalhesUsuario").classList.add("hidden");
        }
    };

    request.onerror = function () {
        mostrarMensagemDoSistema("Erro ao buscar usuário", "error");
    };
}

function salvarUsuario() {
    const username = document.getElementById("adminUsername").value;
    const newPassword = document.getElementById("adminPassword").value.trim();

    if (!username) {
        mostrarMensagemDoSistema("Nenhum usuário selecionado", "error");
        return;
    }

    const transaction = db.transaction("usuarios", "readwrite");
    const store = transaction.objectStore("usuarios");
    const request = store.get(username);

    request.onsuccess = function (e) {
        const user = e.target.result;
        if (user) {
            if (newPassword) {
                user.password = newPassword;
            }

            const updateRequest = store.put(user);
            updateRequest.onsuccess = function () {
                mostrarMensagemDoSistema("Usuário atualizado com sucesso", "success");
                document.getElementById("adminPassword").value = "";
            };
            updateRequest.onerror = function () {
                mostrarMensagemDoSistema("Erro ao atualizar usuário", "error");
            };
        } else {
            mostrarMensagemDoSistema("Usuário não encontrado", "error");
        }
    };
}

function resetarUsuario() {
    const username = document.getElementById("adminUsername").value;

    if (!username) {
        mostrarMensagemDoSistema("Nenhum usuário selecionado", "error");
        return;
    }

    if (confirm(`Tem certeza que deseja resetar todas as atividades de ${username}? Esta ação não pode ser desfeita.`)) {
        const transaction = db.transaction("atividades", "readwrite");
        const store = transaction.objectStore("atividades");

        let request;
        if (store.indexNames.contains("usuario")) {
            const index = store.index("usuario");
            request = index.openCursor(IDBKeyRange.only(username));
        } else {
            request = store.openCursor();
        }

        let count = 0;
        let error = null;

        request.onsuccess = function (e) {
            const cursor = e.target.result;
            if (cursor) {
                if (cursor.value.usuario === username) {
                    cursor.delete();
                    count++;
                }
                cursor.continue();
            } else {
                if (error) {
                    mostrarMensagemDoSistema(`Erro ao resetar atividades: ${error}`, "error");
                } else {
                    const message = count > 0
                        ? `Resetadas ${count} atividades de ${username}`
                        : `Nenhuma atividade encontrada para ${username}`;
                    mostrarMensagemDoSistema(message, "success");
                }
            }
        };

        request.onerror = function (e) {
            error = e.target.error;
            console.error("Erro ao resetar atividades:", error);
        };
    }
}

// Mensagens do sistema
function mostrarErroMensagem(message) {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.querySelector("span").textContent = message;
    errorMessage.style.display = "flex";
    document.getElementById("successMessage").style.display = "none";
}

function mostrarSucessoMensagem(message) {
    const successMessage = document.getElementById("successMessage");
    successMessage.querySelector("span").textContent = message;
    successMessage.style.display = "flex";
    document.getElementById("errorMessage").style.display = "none";
}

function ocultarMensagens() {
    document.getElementById("errorMessage").style.display = "none";
    document.getElementById("successMessage").style.display = "none";
}

function mostrarMensagemDoSistema(message, type) {
    document.querySelectorAll('.system-message.temp').forEach(msg => msg.remove());

    const messageContainer = document.createElement("div");
    messageContainer.className = `system-message ${type} temp`;

    let iconClass = 'fa-info-circle';
    if (type === 'success') iconClass = 'fa-check-circle';
    if (type === 'error') iconClass = 'fa-exclamation-circle';
    if (type === 'warning') iconClass = 'fa-exclamation-triangle';

    messageContainer.innerHTML = `
    <i class="fas ${iconClass}"></i>
    <span>${message}</span>
  `;

    const activeTab = document.querySelector(".tab-content.active");
    activeTab.insertBefore(messageContainer, activeTab.firstChild);

    setTimeout(() => {
        messageContainer.remove();
    }, 5000);
}
