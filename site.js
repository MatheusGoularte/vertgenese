/* Navegação, rodapé e listas. Para mudar o menu, edite MENU logo abaixo. */

const MENU = [
  { rot:"Home",      url:"index.html" },
  { rot:"Sobre",     url:"sobre.html",      sub:[ {rot:"A empresa", url:"sobre.html"}, {rot:"Equipe", url:"equipe.html"} ] },
  { rot:"Tecnologia",url:"tecnologia.html" },
  { rot:"Portfólio", url:"portfolio.html",  sub:"categorias" },
  { rot:"Serviços",  url:"servicos.html" },
  { rot:"Patentes",  url:"patentes.html" },
  { rot:"Publicações",url:"publicacoes.html" },
  { rot:"Mídia",     url:"midia.html" },
  { rot:"Contato",   url:"contato.html" },
];

function esc(s){ return String(s==null?"":s).replace(/[&<>"]/g,function(c){
  return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }

function slug(t){ return String(t).normalize("NFD").replace(/[\u0300-\u036f]/g,"")
  .toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""); }

var ICONE_FIBRA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"><path d="M3 9 q6 3 11 -1 q4 -3 7 2"/><path d="M3 13 q7 -2 12 2 q4 3 6 -2"/><path d="M4 17 q6 -1 11 2"/></svg>';

function montaCabecalho(){
  var atual = (location.pathname.split("/").pop() || "index.html");
  var itens = MENU.map(function(m){
    var sub = "";
    if (m.sub === "categorias"){
      sub = '<div class="drop">' + CATEGORIAS.map(function(c){
        return '<a href="portfolio.html?cat='+encodeURIComponent(c)+'">'+esc(c)+'</a>'; }).join("") + '</div>';
    } else if (m.sub){
      sub = '<div class="drop">' + m.sub.map(function(x){
        return '<a href="'+x.url+'">'+esc(x.rot)+'</a>'; }).join("") + '</div>';
    }
    var ativo = (m.url === atual || (m.sub && m.sub !== "categorias" && m.sub.some(function(x){ return x.url === atual; }))) ? " ativo" : "";
    return '<div class="item"><a class="'+ativo.trim()+'" href="'+m.url+'">'+esc(m.rot)+'</a>'+sub+'</div>';
  }).join("");

  document.body.insertAdjacentHTML("afterbegin",
    '<div class="nav"><div class="wrap">'+
      '<a class="brand" href="index.html">'+
        '<img src="imagens/marca.png" alt="Vert Genèse">'+
        '<span class="txt"><span class="nome">VERT GENÈSE</span><span class="tag">Biorrefinaria Pelotense</span></span>'+
      '</a><nav class="menu" id="menu-principal">'+itens+'</nav>'+
    '</div></div>');

  if (window.matchMedia("(max-width:760px)").matches){
    Array.prototype.forEach.call(document.querySelectorAll("#menu-principal .item"), function(it){
      if (!it.querySelector(".drop")) return;
      it.querySelector("a").addEventListener("click", function(ev){
        if (!it.classList.contains("aberto")){ ev.preventDefault(); it.classList.add("aberto"); }
      });
    });
  }
}

function montaRodape(){
  var links = MENU.filter(function(m){ return m.rot !== "Home"; })
    .map(function(m){ return '<a href="'+m.url+'">'+esc(m.rot)+'</a>'; }).join("");
  var contato = '<a href="mailto:'+esc(CONTATO.email)+'">'+esc(CONTATO.email)+'</a>' +
    (CONTATO.whatsapp ? '<a href="https://wa.me/'+esc(CONTATO.whatsapp)+'" target="_blank" rel="noopener">WhatsApp</a>' : '') +
    (CONTATO.linkedin ? '<a href="'+esc(CONTATO.linkedin)+'" target="_blank" rel="noopener">LinkedIn</a>' : '') +
    (CONTATO.instagram ? '<a href="'+esc(CONTATO.instagram)+'" target="_blank" rel="noopener">Instagram</a>' : '') +
    '<p>'+esc(CONTATO.cidade)+'</p>';
  document.body.insertAdjacentHTML("beforeend",
    '<div class="rodape"><div class="wrap"><div class="cols">'+
      '<div><img src="imagens/marca.png" alt=""><p>Materiais e processos a partir de biomassa residual da agroindústria.</p></div>'+
      '<div><h4>Navegação</h4>'+links+'</div>'+
      '<div><h4>Contato</h4>'+contato+'</div>'+
    '</div><div class="fim">Vert Genèse &middot; CNPJ '+esc(CONTATO.cnpj)+'</div></div></div>');
}

/* ---- listas reaproveitadas pelas páginas ---- */
function cardProduto(x){
  var foto = x.img ? '<div class="foto"><img src="'+esc(x.img)+'" alt="'+esc(x.nome)+'"></div>'
                   : '<div class="foto">'+ICONE_FIBRA+'</div>';
  return '<a class="prod-link" href="produto.html?p='+encodeURIComponent(slug(x.nome))+'">'+
    '<div class="prod">'+foto+'<div class="txt"><h3>'+esc(x.nome)+'</h3><p>'+esc(x.desc)+'</p>'+
    (x.estagio ? '<span class="selo">'+esc(x.estagio)+'</span>' : '')+'</div></div></a>';
}

document.addEventListener("DOMContentLoaded", function(){
  montaCabecalho();
  if (typeof montaPagina === "function") montaPagina();
  montaRodape();
});
