// Constantes e configurações
const HORAS_NECESSARIAS = 225;
const CURSO_DE_GRADUACAO = 'Engenharia de Produção Bacharelado UEMA, Campus São Luis';

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
        maxHorasValidadas: 90,
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
    showError("Erro ao inicializar o banco de dados. Tente recarregar a página.");
};

// Funções auxiliares
function popularSelects() {
    const selects = [
        document.getElementById("tipo"),
        document.getElementById("tipoEdicao")
    ];

    selects.forEach(select => {
        select.innerHTML = '<option value="">Selecione um tipo</option>';
    });

    const filtroSelect = document.getElementById("filtroTipo");
    filtroSelect.innerHTML = '<option value="Todos">Todos os tipos</option>';

    opcoesAtividades.forEach(opt => {
        selects.forEach(select => {
            const option = document.createElement("option");
            option.value = opt;
            option.textContent = opt;
            select.appendChild(option);
        });

        const filtroOption = document.createElement("option");
        filtroOption.value = opt;
        filtroOption.textContent = opt;
        filtroSelect.appendChild(filtroOption);
    });

    // Adiciona o select para grupos
    const filtroGrupo = document.getElementById("filtroGrupo");
    filtroGrupo.innerHTML = '<option value="Todos">Todos os grupos</option>';
    gruposAtividades.forEach(grupo => {
        const option = document.createElement("option");
        option.value = grupo;
        option.textContent = grupo;
        filtroGrupo.appendChild(option);
    });

    // Adiciona o event listener para o filtro de grupo
    filtroGrupo.addEventListener("change", atualizarFiltroTipoPorGrupo);
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

    // Tenta restaurar a seleção anterior, se ainda estiver disponível
    if (tipoSelecionado && Array.from(tipoSelect.options).some(opt => opt.value === tipoSelecionado)) {
        tipoSelect.value = tipoSelecionado;
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
    document.getElementById("tabsContainer").addEventListener("click", handleTabClick);

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

function formatFileSize(bytes) {
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
        showError('Por favor, preencha todos os campos.');
        return;
    }

    // Validações específicas para registro
    if (!isLoginMode) {
        const nomeCompleto = document.getElementById("nomeCompleto").value.trim();
        const matricula = document.getElementById("matricula").value.trim();

        if (!nomeCompleto || !matricula) {
            showError('Por favor, preencha todos os campos.');
            return;
        }

        if (!validarMatricula(matricula)) {
            showError('Matrícula inválida');
            return;
        }
    }

    hideMessages();
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
                    matricula: ""
                };
                iniciarApp();
            } else if (isLoginMode) {
                if (user && user.password === password) {
                    currentUser = user;
                    iniciarApp();
                } else {
                    showError("Usuário ou senha inválidos!");
                    submitBtn.innerHTML = 'Entrar';
                    submitBtn.disabled = false;
                }
            } else {
                // Modo de registro
                if (user) {
                    showError("Usuário já existe!");
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

                    showSuccess("Registro realizado com sucesso! Faça login.");
                }
            }
        };

        req.onerror = function () {
            showError("Erro ao acessar o banco de dados");
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
    hideMessages();
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

        hideMessages();

        submitBtn.innerHTML = 'Entrar';
        submitBtn.disabled = false;
    }
}

function mostrarSobre() {
    alert("SIGACC - Sistema Integrado de Gestão de Atividades Complementares Curriculares - Versão 1.0\n\nDesenvolvido por Diego Bezerra Reinaldo para auxiliar os estudantes do curso de Engenharia de Produção da UEMA no gerenciamento de atividades complementares.\n\nPara esclarecimentos de dúvidas ou recuperação de login e senhas, entrar em contato com os através dos contatos:\n\nEmail: diego.dbr811@gmail.com\nInstagram: @eaidih\nCentro de Ciências Tecnológicas - CCT/UEMA, Cidade Universitária Paulo VI.");
}

// Funções das Abas e Telas Usuário
function handleTabClick(e) { // Habilita os clicks nas abas permitindo acessar os conteúdos 
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

function fileToArrayBuffer(file) { // Função para converter arquivo para ArrayBuffer
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
        showSystemMessage("Preencha todos os campos obrigatórios", "error");
        return;
    }

    // Usar currentUser.matricula em vez da variável não definida 'matricula'
    if (!validarPeriodo(periodo, currentUser.matricula)) {
        const anoAtual = new Date().getFullYear();
        const anoIngresso = parseInt(currentUser.matricula.substring(0, 4), 10);
        showSystemMessage(`Período inválido. Formato esperado: AAAA.S (ex: 2025.1) com ano entre ${anoIngresso}-${anoAtual}`, "error");
        return;
    }

    try {
        let comprovanteArrayBuffer = null;
        if (comprovanteFile) {
            comprovanteArrayBuffer = await fileToArrayBuffer(comprovanteFile);
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
                showSystemMessage("Atividade cadastrada com sucesso, porém sem comprovante comprobatório anexado.", "pending");
            } else if (horasValidadasEfetivas < horas) {
                const motivo = horasValidadasEfetivas === 0
                    ? "limite global atingido para este tipo de atividade"
                    : "limites de horas atingidos";
                showSystemMessage(`Atividade cadastrada, mas apenas ${horasValidadasEfetivas}h validadas (${motivo}).`, "success");
            } else {
                showSystemMessage("Atividade cadastrada com sucesso!", "success");
            }

            document.getElementById("formCadastro").reset();
            atualizarTabela();
            atualizarResumo();
        };
    } catch (error) {
        showSystemMessage("Erro ao cadastrar atividade: " + error, "error");
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

    // 1. Verificação de limite do grupo
    const grupo = obterGrupoPorTipo(tipo);
    if (grupo) {
        const horasCadastradasGrupo = await consultarHorasCadastradasGrupo(grupo, excludeId);
        const disponibilidadeGrupo = Math.max(0, maxHorasGruposAtividades[grupo] - horasCadastradasGrupo);
        if (disponibilidadeGrupo <= 0) return 0;
    }

    // Resto da função permanece igual...
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

    return Math.min(horas, limiteEspecifico, disponibilidadeGlobal);
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

function limparCadastro() { // Função para limpar todos os campos da aba cadastro 
    document.getElementById("formCadastro").reset();
}

function handleFiltroSubmit(e) { // Exibição de atividades
    e.preventDefault();
    atualizarTabela();
}

function limparFiltros() { // Função para limpar todos os campos da aba minhas atividades 
    document.getElementById("filtroGrupo").value = "Todos";
    document.getElementById("filtroPeriodo").value = "";

    // Atualiza o select de tipos para mostrar todos
    atualizarFiltroTipoPorGrupo();

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
                        <button class="action-btn download" onclick="baixarComprovante(${atividade.id})" ${!atividade.comprovante ? 'disabled' : ''}>
                            <i class="fas fa-download"></i>
                        </button>
                    </td>
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
        showSystemMessage("Erro ao carregar atividades", "error");
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

async function baixarComprovante(id) { // Função para Baixar comprovante individual
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
            showSystemMessage("Nenhum comprovante disponível para esta atividade", "info");
        }
    } catch (error) {
        showSystemMessage("Erro ao baixar comprovante: " + error, "error");
    }
}

async function exportarDados() { // Função para Exportação de dados para ZIP
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

        // 1. Criar arquivo CSV com proteção de curso
        let csvContent = `Curso�${CURSO_DE_GRADUACAO}\n`; // Linha de proteção
        csvContent += "ID�Nome�Tipo�Horas Registradas�Horas Validadas�Período�Status�\n";
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
        a.download = `atividades_${currentUser}_${new Date().toISOString().slice(0, 10)}.zip`;
        document.body.appendChild(a);
        a.click();

        // Limpeza
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 100);

        showSystemMessage("Dados exportados com sucesso!", "success");
    } catch (error) {
        showSystemMessage("Erro na exportação: " + error.message, "error");
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
            if (partesCurso.length < 2 || partesCurso[1] !== CURSO_DE_GRADUACAO) {
                throw new Error(`Arquivo incompatível! Este arquivo pertence ao curso: ${partesCurso[1]}. O sistema atual é configurado para: ${CURSO_DE_GRADUACAO}.`);
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

            // 3. Importar atividades (ignorando a primeira linha do curso e a segunda linha de cabeçalho)
            let importadas = 0;
            let erros = 0;

            for (let i = 2; i < linhas.length; i++) {
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
                    const horasValidadas = parseFloat(campos[4].replace(',', '.'));

                    const novaAtividade = {
                        usuario: currentUser.username,
                        nome: campos[1].trim(),
                        tipo: campos[2].trim(),
                        horasRegistradas: isNaN(horasRegistradas) ? 0 : horasRegistradas,
                        horasValidadas: isNaN(horasValidadas) ? 0 : horasValidadas,
                        periodo: campos[5].trim(),
                        status: campos[6].trim(),
                        comprovante: comprovantes[campos[0]] || null
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

            // 4. Atualizar UI
            recalcularHorasGlobal();
            atualizarTabela();
            atualizarResumo();

            if (erros > 0) {
                showSystemMessage(`${importadas} atividades importadas com sucesso! ${erros} erros ocorreram. Verifique o console para detalhes.`, "warning");
            } else {
                showSystemMessage(`${importadas} atividades importadas com sucesso!`, "success");
            }

        } catch (error) {
            console.error("Erro na importação:", error);
            if (error.message.includes("incompatível")) {
                showSystemMessage(error.message, "error", 10000);
            } else {
                showSystemMessage("Erro na importação: " + error.message, "error");
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
                    (${formatFileSize(size)})
                `;
            } else {
                comprovanteInfo.textContent = "Nenhum comprovante cadastrado";
            }
        }
    };

    request.onerror = function () {
        showSystemMessage("Erro ao carregar atividade para edição", "error");
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
        showSystemMessage("ID inválido para exclusão. Selecione uma atividade primeiro.", "error");
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
            showSystemMessage("Atividade não encontrada no banco de dados", "error");
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

        showSystemMessage("Atividade excluída com sucesso!", "success");
        document.getElementById("formEdicao").reset();
        atualizarTabela();
        atualizarResumo();

    } catch (error) {
        showSystemMessage(`Erro ao excluir atividade: ${error}`, "error");
    }
}

async function recalcularHorasGrupo(grupo) { // Função para recalcular as horas validadas de todos as atividades dos tipos de um grupo especificado. Usada quando há alguma alteração em uma atividade (edição) podendo liberar horas para outras atividades
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

                const novasHorasValidadas = Math.min(
                    atividade.horasRegistradas,
                    disponivelGrupo,
                    disponivelGlobalTipo,
                    disponivelEspecifico
                );

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

async function recalcularHorasGlobal() { // Função auxiliar pra recalcular as horas validadas de todas as atividades cadastradas para um determinado usuário (currentUser) visando evitar inconsistência nos calculos de horas validas, visto que, no código fonte, pode haver alteração nas constantes. A cada login, a função é chamada.
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

async function handleEdicaoSubmit(e) { // Função para Edição de atividades
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
        showSystemMessage("Preencha todos os campos obrigatórios", "error");
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        return;
    }

    if (!validarPeriodo(periodoNovo, currentUser.matricula)) {
        const anoAtual = new Date().getFullYear();
        const anoIngresso = parseInt(currentUser.matricula.substring(0, 4), 10);
        showSystemMessage(`Período inválido. Formato esperado: AAAA.S (ex: 2025.1) com ano entre ${anoIngresso}-${anoAtual}`, "error");
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
            showSystemMessage("Atividade não encontrada", "error");
            return;
        }

        const tipoAntigo = atividadeOriginal.tipo;

        // PROCESSAR NOVO COMPROVANTE SE HOUVER
        let novoComprovante = atividadeOriginal.comprovante;
        if (comprovanteFile) {
            novoComprovante = await fileToArrayBuffer(comprovanteFile);
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
            showSystemMessage("Atividade atualizada com sucesso, porém sem comprovante comprobatório anexado.", "pending");
        } else if (atividadeRecalculada.horasValidadas < horasNovas) {
            const motivo = atividadeRecalculada.horasValidadas === 0 ?
                "limite global atingido para este tipo de atividade" :
                "limites de horas atingidos";
            showSystemMessage(`Atividade atualizada, mas apenas ${atividadeRecalculada.horasValidadas}h validadas (${motivo}).`, "success");
        } else {
            showSystemMessage("Atividade atualizada com sucesso!", "success");
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
        showSystemMessage("Erro ao atualizar atividade: " + error, "error");
    }
}

function limparEdicao() { // Função para limpar os campos da aba edição
    // Limpa todos os campos da aba edição
    document.getElementById("formEdicao").reset();
    // Limpar info do comprovante atual
    document.getElementById("comprovanteAtualInfo").textContent = "";
}

async function atualizarResumo() { // Função para exibir Resumo e estatísticas
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
            const progressoTotal = Math.min(100, Math.round((totalHorasValidadas / HORAS_NECESSARIAS) * 100));

            document.getElementById("resumoHorasRegistradas").textContent = totalHorasRegistradas;
            document.getElementById("resumoHorasValidadas").textContent = totalHorasValidadas;

            document.getElementById("totalHorasRegistradas").textContent = totalHorasRegistradas;
            document.getElementById("totalHorasValidadas").textContent = totalHorasValidadas;

            document.getElementById("progressoTotalPercent").textContent = `${progressoTotal}%`;
            document.getElementById("progressoTotalFill").style.width = `${progressoTotal}%`;

            document.getElementById("horasValidadasPercent").textContent = `${totalHorasValidadas}/${HORAS_NECESSARIAS}`;
            document.getElementById("horasValidadasFill").style.width = `${progressoTotal}%`;

            if (document.getElementById("resumo").classList.contains("active")) {
                atualizarGraficoResumo();
            }
        }
    };
}

async function atualizarGraficoResumo() { // Função auxiliar para atualizar a exibição do Resumo e estatísticas
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
            const horasRestantes = Math.max(0, HORAS_NECESSARIAS - totalHorasValidadas);

            const labels = [];
            const data = [];

            // Adiciona grupos com horas (>0)
            for (const grupo in horasPorGrupo) {
                if (horasPorGrupo[grupo] > 0) {
                    labels.push(grupo.split(' - ')[0]);
                    data.push(horasPorGrupo[grupo]);
                }
            }

            // Sempre inclui a fatia "Horas Restantes" (pode ser 0)
            labels.push('Horas Restantes');
            data.push(horasRestantes);

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
            backgroundColors[backgroundColors.length - 1] = '#e9ecef';

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

// Funções para Geração de relatório em PDF
async function handleImprimir() { // Imprime o arquivo pdf padrão
    const btn = document.getElementById("imprimirBtn");
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gerando PDF...';
    btn.disabled = true;

    try {
        // Agora usamos o objeto currentUser (nomeCompleto + matrícula)
        const nomeAluno = currentUser.nomeCompleto || currentUser.username;
        const matricula = currentUser.matricula || "-----";
        const atividades = await obterAtividadesParaRelatorio();

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        // Configurações de estilo
        const primaryColor = [13, 27, 71];
        const secondaryColor = [243, 115, 33];

        // Cabeçalho institucional
        doc.setFillColor(...primaryColor);
        doc.rect(0, 0, 210, 30, 'F');
        doc.setFontSize(16);
        doc.setTextColor(255, 255, 255);
        doc.text("UEMA", 20, 20);
        doc.setFontSize(10);
        doc.text("Universidade Estadual do Maranhão", 105, 10, null, null, 'center');
        doc.text("Centro de Ciências Tecnológicas - CCT", 105, 15, null, null, 'center');
        doc.text("Curso Engenharia de Produção Bacharelado", 105, 20, null, null, 'center');
        doc.text("Sistema Integrado de Gestão de Atividades Complementares Curriculares - SIGACC", 105, 25, null, null, 'center');

        // Informações do aluno
        const yStart = 40;
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text(`Aluno: ${nomeAluno}`, 20, yStart);
        doc.text(`Matrícula: ${matricula}`, 20, yStart + 7);
        doc.text(`Data de emissão: ${new Date().toLocaleDateString('pt-BR')}`, 120, yStart + 7);

        // Título do relatório
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text("RELATÓRIO DE ATIVIDADES COMPLEMENTARES", 105, yStart + 20, null, null, 'center');

        // Texto introdutório
        doc.setFontSize(11);
        doc.setFont("helvetica", "normal");
        const textoIntro = [
            "Declaro para os devidos fins que o(a) aluno(a) acima identificado(a) realizou as atividades",
            "complementares relacionadas abaixo durante o curso de Engenharia de Produção, conforme registro",
            "no sistema de gestão desenvolvido por Diego Bezerra Reinaldo e em atendimento à Resolução CEPE 037/2024."
        ];

        textoIntro.forEach((linha, i) => {
            doc.text(linha, 20, yStart + 35 + (i * 6));
        });

        // Preparar dados da tabela
        const headers = [["Nome da Atividade", "Tipo", "Horas Registradas", "Horas Validadas", "Período", "Status"]];
        const data = atividades.map(atividade => [
            atividade.nome,
            atividade.tipo,
            atividade.horasRegistradas.toString(),
            atividade.horasValidadas.toString(),
            atividade.periodo,
            atividade.status
        ]);

        // Gerar tabela estilizada
        doc.autoTable({
            startY: yStart + 60,
            head: headers,
            body: data,
            theme: 'grid',
            styles: {
                fontSize: 9,
                cellPadding: 2,
                textColor: [0, 0, 0],
                font: 'helvetica',
                lineWidth: 0.1
            },
            headStyles: {
                fillColor: primaryColor,
                textColor: [255, 255, 255],
                fontStyle: 'bold',
                halign: 'center',
                lineWidth: 0.1
            },
            bodyStyles: {
                lineWidth: 0.1
            },
            alternateRowStyles: {
                fillColor: [245, 245, 245]
            },
            columnStyles: {
                0: { cellWidth: 55, halign: 'left' },
                1: { cellWidth: 45, halign: 'left' },
                2: { halign: 'center', cellWidth: 20 },
                3: { halign: 'center', cellWidth: 20 },
                4: { halign: 'center', cellWidth: 20 },
                5: { halign: 'center', cellWidth: 20 }
            },
            margin: { left: 15, right: 15 }
        });

        const finalY = doc.autoTable.previous.finalY;

        // Totais
        const totalHorasRegistradas = atividades.reduce((sum, a) => sum + a.horasRegistradas, 0);
        const totalHorasValidadas = atividades.reduce((sum, a) => sum + a.horasValidadas, 0);
        const progresso = (totalHorasValidadas / 225) * 100;

        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        doc.text("RESUMO DE HORAS", 20, finalY + 15);

        doc.setFont("helvetica", "normal");
        doc.text(`Total de Horas Registradas: ${totalHorasRegistradas}`, 30, finalY + 25);
        doc.text(`Total de Horas Validadas: ${totalHorasValidadas}`, 30, finalY + 32);
        doc.text(`Horas Necessárias: 225`, 30, finalY + 39);

        // Barra de progresso
        const barWidth = 80;
        const barHeight = 8;
        const barX = 130;
        const barY = finalY + 25;

        // Fundo da barra
        doc.setFillColor(200, 200, 200);
        doc.rect(barX, barY, barWidth, barHeight, 'F');

        // Barra de progresso
        doc.setFillColor(...secondaryColor);
        doc.rect(barX, barY, barWidth * (progresso / 100), barHeight, 'F');

        // Texto da barra
        doc.setFontSize(9);
        doc.text(`Progresso: ${progresso.toFixed(1)}%`, barX, barY - 2);
        doc.text(`${totalHorasValidadas} / 225 horas`, barX + barWidth + 5, barY + barHeight / 2 + 1);

        // Rodapé institucional
        doc.setDrawColor(...primaryColor);
        doc.setLineWidth(0.5);
        const footerY = 285;
        doc.line(15, footerY, 195, footerY);

        doc.setFontSize(9);
        doc.setTextColor(100, 100, 100);
        doc.text("Centro de Ciências Tecnológicas - CCT/UEMA, Cidade Universitária Paulo VI, São Luís - MA", 105, footerY + 5, null, null, 'center');
        doc.text("Contato: diego.dbr811@gmail.com | Instagram: @eaidih", 105, footerY + 10, null, null, 'center');

        // Salvar PDF
        doc.save(`Relatorio_Atividades_Complementares_${nomeAluno.replace(/\s+/g, '_')}.pdf`);

    } catch (error) {
        showSystemMessage("Erro ao gerar relatório: " + error.message, "error");
        console.error(error);
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

async function obterAtividadesParaRelatorio() { // Recupera todas as atividades cadastrada no usuário (currentUser)
    return new Promise((resolve, reject) => {
        const atividades = [];

        const transaction = db.transaction("atividades", "readonly");
        const store = transaction.objectStore("atividades");
        const index = store.index("usuario");
        const request = index.openCursor(IDBKeyRange.only(currentUser.username));

        request.onsuccess = function (e) {
            const cursor = e.target.result;
            if (cursor) {
                atividades.push({
                    nome: cursor.value.nome,
                    tipo: cursor.value.tipo,
                    horasRegistradas: cursor.value.horasRegistradas,
                    horasValidadas: cursor.value.horasValidadas,
                    periodo: cursor.value.periodo,
                    status: cursor.value.status
                });
                cursor.continue();
            } else {
                atividades.sort((a, b) => b.periodo.localeCompare(a.periodo));
                resolve(atividades);
            }
        };

        request.onerror = () => reject(new Error("Erro ao carregar atividades"));
    });
}

// Função para a Tela Administração do Sistema
function buscarUsuario() {
    const username = document.getElementById("filtroUsuario").value.trim();
    if (!username) {
        showSystemMessage("Digite um nome de usuário", "error");
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
            showSystemMessage("Usuário não encontrado", "error");
            document.getElementById("detalhesUsuario").classList.add("hidden");
        }
    };

    request.onerror = function () {
        showSystemMessage("Erro ao buscar usuário", "error");
    };
}

function salvarUsuario() {
    const username = document.getElementById("adminUsername").value;
    const newPassword = document.getElementById("adminPassword").value.trim();

    if (!username) {
        showSystemMessage("Nenhum usuário selecionado", "error");
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
                showSystemMessage("Usuário atualizado com sucesso", "success");
                document.getElementById("adminPassword").value = "";
            };
            updateRequest.onerror = function () {
                showSystemMessage("Erro ao atualizar usuário", "error");
            };
        } else {
            showSystemMessage("Usuário não encontrado", "error");
        }
    };
}

function resetarUsuario() {
    const username = document.getElementById("adminUsername").value;

    if (!username) {
        showSystemMessage("Nenhum usuário selecionado", "error");
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
                    showSystemMessage(`Erro ao resetar atividades: ${error}`, "error");
                } else {
                    const message = count > 0
                        ? `Resetadas ${count} atividades de ${username}`
                        : `Nenhuma atividade encontrada para ${username}`;
                    showSystemMessage(message, "success");
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
function showError(message) {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.querySelector("span").textContent = message;
    errorMessage.style.display = "flex";
    document.getElementById("successMessage").style.display = "none";
}

function showSuccess(message) {
    const successMessage = document.getElementById("successMessage");
    successMessage.querySelector("span").textContent = message;
    successMessage.style.display = "flex";
    document.getElementById("errorMessage").style.display = "none";
}

function hideMessages() {
    document.getElementById("errorMessage").style.display = "none";
    document.getElementById("successMessage").style.display = "none";
}

function showSystemMessage(message, type) {
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

