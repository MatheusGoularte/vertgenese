/* ═══════════════════════════════════════════════════════════════════
   CONTEÚDO EDITÁVEL — MEXA SÓ AQUI DENTRO
   Para adicionar item novo: copie uma linha inteira { ... }, cole
   embaixo e troque o texto. Não apague as vírgulas nem as chaves.
   Campo "img" é opcional: pode ser link de imagem ou arquivo local
   (ex.: "imagens/materia1.jpg"). Deixe "" para card só de texto.
   ═══════════════════════════════════════════════════════════════════ */

const PUBLICACOES = [
  { titulo:"Slow pyrolysis of rice husk: characterization of biochar and pyroligneous liquid",
    veiculo:"Molecules (MDPI)", ano:"2025",
    link:"" },

  { titulo:"EDITAR — título do artigo",
    veiculo:"EDITAR — periódico", ano:"2026",
    link:"" },
];

const PATENTES = [
  { titulo:"EDITAR — título do pedido de patente", numero:"BR 10 2024 000000-0", ano:"2024",
    nota:"Cotitularidade Vert Genese e universidade" },

  { titulo:"EDITAR — título do pedido de patente", numero:"BR 10 2025 000000-0", ano:"2025",
    nota:"Cotitularidade Vert Genese e universidade" },
];

const PRODUTOS = [
  // categoria: use um dos nomes de CATEGORIAS lá embaixo
  // estagio: "Bancada", "Demonstrador" ou "Piloto"
  // img: opcional — ex.: "imagens/mfc-arroz.jpg"
  // detalhe: texto da página interna do produto (pode ter vários parágrafos)
  // aplicacoes: lista de usos. Deixe [] se não quiser mostrar.
  { nome:"MFC de casca de arroz — branqueada", categoria:"Celulose microfibrilada", estagio:"Bancada",
    desc:"Fibra de alta alvura para aplicações onde a cor do material final importa.", img:"",
    detalhe:"Celulose microfibrilada obtida de casca de arroz submetida a branqueamento antes da desfibrilação mecânica. A remoção da lignina residual eleva a alvura e reduz o escurecimento térmico durante a secagem, o que interessa quando o material entra em produto de cor clara ou translúcido.\n\nA suspensão é produzida em moinho de discos, com número de passes ajustável conforme o grau de fibrilação desejado.",
    aplicacoes:["Reforço em filmes e revestimentos claros","Aditivo em formulações de base aquosa","Peças moldadas de cor clara"] },

  { nome:"MFC de casca de arroz — não branqueada", categoria:"Celulose microfibrilada", estagio:"Bancada",
    desc:"Rota sem branqueamento, menor custo e menor carga química de processo.", img:"",
    detalhe:"Versão obtida sem etapa de branqueamento. Mantém lignina e sílica da casca, o que reduz custo e consumo de insumos e pode ser vantajoso quando a cor do produto final não é restrição.\n\nA presença de lignina tende a favorecer comportamento hidrofóbico e resistência térmica em relação à fibra branqueada.",
    aplicacoes:["Peças moldadas técnicas","Compósitos de base vegetal","Aplicações onde a cor não é restrição"] },

  { nome:"MFC de casca de soja", categoria:"Celulose microfibrilada", estagio:"Bancada",
    desc:"Aproveitamento de resíduo abundante do esmagamento de soja.", img:"",
    detalhe:"A casca de soja é gerada em grande volume nas esmagadoras e hoje segue majoritariamente para ração. Por ter teor celulósico relevante e baixa dureza, é uma das biomassas mais favoráveis à desfibrilação mecânica direta.",
    aplicacoes:["Reforço em papel e cartão","Espessante e estabilizante","Matriz para peças moldadas"] },

  { nome:"MFC de farelo de nabo forrageiro", categoria:"Celulose microfibrilada", estagio:"Bancada",
    desc:"Obtida do farelo pós-extração mecânica de óleo, com óleo residual presente.", img:"",
    detalhe:"Rota desenvolvida a partir do farelo que sobra da prensagem mecânica do nabo forrageiro, que ainda carrega óleo residual. A investigação avalia como esse óleo influencia a desfibrilação e as propriedades da suspensão obtida.",
    aplicacoes:["Valorização de resíduo de esmagamento","Suspensões para revestimento"] },

  { nome:"MFC de papelão reciclado", categoria:"Celulose microfibrilada", estagio:"Bancada",
    desc:"Repolpação de aparas de papelão ondulado como fonte de fibra.", img:"",
    detalhe:"Uso de aparas de papelão ondulado como matéria-prima fibrosa. A fibra reciclada já passou por processos anteriores e apresenta menor comprimento, o que muda o comportamento na desfibrilação e no produto final.",
    aplicacoes:["Reforço em embalagem reciclada","Redução de fibra virgem em formulações"] },

  { nome:"Revestimento de MFC para frutas", categoria:"Revestimentos", estagio:"Bancada",
    desc:"Película aplicada na superfície da fruta para prolongar a vida pós-colheita.", img:"",
    detalhe:"Revestimento de base celulósica aplicado na superfície da fruta, formando barreira que reduz a perda de água e a troca gasosa, retardando a senescência e estendendo a vida pós-colheita.\n\nAplicável por imersão ou aspersão, com formulação ajustável por espécie de fruta.",
    aplicacoes:["Prolongamento de vida útil pós-colheita","Redução de perdas no transporte e no varejo"] },

  { nome:"Celulose da casca de arroz", categoria:"Frações da biomassa", estagio:"Bancada",
    desc:"Fração celulósica isolada, insumo para fibra, filme e derivados.", img:"",
    detalhe:"Fração celulósica isolada por rota de fracionamento da casca de arroz, servindo de insumo para as demais linhas da empresa e para derivados de celulose.",
    aplicacoes:["Insumo para produção de MFC","Base para derivados celulósicos"] },

  { nome:"Sílica da casca de arroz", categoria:"Frações da biomassa", estagio:"Bancada",
    desc:"Sílica obtida da fração mineral, com aplicação em cargas e adsorventes.", img:"",
    detalhe:"A casca de arroz é uma das biomassas com maior teor de sílica. A fração mineral pode ser recuperada com elevada área superficial, o que interessa a mercados de carga mineral, adsorventes e materiais cimentícios.",
    aplicacoes:["Carga mineral","Adsorventes","Adição em materiais cimentícios"] },

  { nome:"Gomas da casca de arroz", categoria:"Frações da biomassa", estagio:"Bancada",
    desc:"Polissacarídeos extraídos da biomassa, com potencial espessante.", img:"",
    detalhe:"Polissacarídeos extraídos durante o fracionamento da biomassa, com comportamento espessante em meio aquoso.",
    aplicacoes:["Espessante em formulações aquosas","Aditivo de reologia"] },

  { nome:"Lignina da casca de arroz", categoria:"Frações da biomassa", estagio:"Bancada",
    desc:"Lignina isolada, matéria-prima para resinas, dispersantes e revestimentos.", img:"",
    detalhe:"Lignina recuperada do licor de fracionamento. É a fração aromática da biomassa e a de maior valor potencial, com uso em resinas, dispersantes, antioxidantes e revestimentos.",
    aplicacoes:["Resinas e adesivos","Dispersantes","Revestimentos funcionais"] },
];

// Ordem dos filtros na página. Para criar categoria nova, acrescente aqui
// e use o mesmo nome no campo "categoria" do produto.
const CATEGORIAS = ["Celulose microfibrilada","Revestimentos","Frações da biomassa"];

const MIDIA = [
  { titulo:"EDITAR — título da matéria", veiculo:"EDITAR — veículo", link:"", img:"" },
];

const EQUIPE = [
  { nome:"Matheus Goularte", cargo:"Sócio-fundador - Presidente/P&DI",
    resumo:"Doutorando em Ciência e Engenharia de Materiais. Atua com materiais lignocelulósicos, processos de polpação e celulose microfibrilada.",
    linkedin:"" },

  { nome:"EDITAR — nome da sócia", cargo:"EDITAR — cargo",
    resumo:"EDITAR — uma ou duas linhas de formação e atuação.",
    linkedin:"" },
];

const CONTATO = {
  email:"contato@vertgenese.com.br",
  whatsapp:"5553981032289",          // só números, com 55 na frente
  cidade:"Pelotas, Rio Grande do Sul",
  cnpj:"53.927.908/0001-01",
  linkedin:" ",
  instagram:" ",
};

/* ═══════════ FIM DO CONTEÚDO EDITÁVEL ═══════════ */
