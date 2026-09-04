# Site — Junia Dourado Advocacia

Site institucional estático (HTML + CSS + JavaScript), **sem etapa de build**.
Basta hospedar a pasta em qualquer serviço de sites estáticos.

---

## 1. Como visualizar no computador

As páginas usam caminhos que começam com `/` (ex.: `/assets/css/style.css`, `/sobre/`).
Isso funciona quando o site é servido por um servidor — **não** ao abrir o arquivo com dois cliques (`file://`).

Rode um servidor local simples (escolha uma opção):

```bash
# Opção A — Node
npx serve .

# Opção B — Python 3
python -m http.server 8000

# Opção C — VS Code
# Instale a extensão "Live Server" e clique em "Go Live"
```

Depois abra `http://localhost:8000` (ou a porta indicada).

---

## 2. Como publicar

Qualquer um destes serviços hospeda a pasta como está:

| Serviço | Como fazer |
|---|---|
| **Netlify** | Arraste a pasta em app.netlify.com/drop |
| **Vercel** | `vercel` na pasta, ou conecte um repositório |
| **Cloudflare Pages** | Conecte um repositório ou faça upload direto |
| **Hostinger / cPanel** | Envie o conteúdo da pasta para `public_html/` |
| **GitHub Pages** | Publique o repositório e ative Pages na branch principal |

O arquivo `404.html` já é reconhecido automaticamente pela maioria desses serviços.

### Domínio
As URLs absolutas (canonical, Open Graph, sitemap) usam **`https://www.juniadouradoadv.com.br`**.
Se o domínio final for outro, faça um "localizar e substituir" desse endereço em todos os arquivos `.html`, no `sitemap.xml` e no `robots.txt`.

---

## 3. O que você PRECISA preencher antes de divulgar

| Item | Onde | O que fazer |
|---|---|---|
| ~~Número da OAB~~ | Rodapé de todas as páginas | ✔ Feito — **OAB/MG 189.580**. |
| ~~Fotos da Dra. Junia~~ | Hero da Home (`junia-hero.mp4` + poster) e seção Sobre / página `/sobre/` (`junia-sobre.jpg`) | ✔ Colocadas. Trocar depois: substituir os arquivos mantendo o nome. |
| **Horário de atendimento** | `index.html` e `/contato/` (dados `openingHoursSpecification` e o texto "Segunda a sexta, das 9h às 18h") | Ajustar para o horário real. |
| **Coordenadas do mapa (geo)** | `index.html` e `/contato/` (campo `"geo"` no JSON-LD) | Opcional: substituir `latitude`/`longitude` pelas coordenadas exatas do prédio (o Google também localiza pelo endereço). |
| ~~Imagem de compartilhamento~~ | `assets/img/og-default.png` | ✔ Gerada com a logo (1200×630). Trocar só se quiser outra arte. |
| ~~Favicon / logo~~ | `assets/favicon/favicon.png` · `assets/img/logo-full.png` · `logo-mark.png` | ✔ Feito — logo da Dra. Junia aplicada no cabeçalho, rodapé, favicon e imagem de compartilhamento. |
| **Datas dos artigos** | Cada `blog/*/index.html` (campo `datePublished`) | Ajustar se quiser refletir a data real de publicação. |

---

## 4. Fotos

### Hero da Home — JÁ CONFIGURADO (com vídeo)
O Hero da primeira dobra usa um **vídeo animado** (`assets/video/junia-hero.mp4`, ~900 KB, gerado no Flow/Veo) como fundo full-bleed, com o texto sobre um gradiente à esquerda.

- **Poster / fallback:** `assets/img/junia-hero.jpg` (117 KB) aparece antes do vídeo carregar, se o vídeo falhar, se o JavaScript estiver desativado **ou** se a pessoa tiver "reduzir movimento" ativado no sistema (aí o vídeo nunca dá play — acessibilidade).
- **Trocar o vídeo:** substitua `assets/video/junia-hero.mp4` mantendo o nome. Ideal: 16:9 ou mais largo, ≤ 6 s, em loop suave, **sem áudio**, ≤ 2–3 MB. Atualize também o poster `assets/img/junia-hero.jpg` para casar com o 1º frame.
- **Voltar para imagem estática:** em `index.html`, dentro de `<div class="hero__bg">`, troque todo o bloco `<video>…</video>` por
  `<img src="/assets/img/junia-hero.jpg" width="1896" height="830" alt="…" fetchpriority="high">`. O CSS não muda.
- Opcional: gerar também um `.webm` e adicionar um segundo `<source src="/assets/video/junia-hero.webm" type="video/webm">` antes do mp4, para arquivos menores em navegadores compatíveis.

### Seção Sobre (Home §5) e página /sobre/ — JÁ CONFIGURADO
Ambas usam **`assets/img/junia-sobre.jpg`** (retrato 4:5, 1122×1402, 128 KB). Para trocar, substitua o arquivo mantendo o nome e a proporção (retrato), ou edite o `<img>` dentro de `<div class="media-frame">` em `index.html` (seção "about") e `sobre/index.html`.

Dicas ao trocar: exporte em **WebP** ou JPG otimizado, retrato ~1000–1400 px de altura, e mantenha `width`, `height` e `alt`.

### Imagens dos artigos do blog (opcional)
Nos cards do blog e no topo dos artigos, o retângulo azul é só um espaço reservado (`<div class="post-card__media">`).
Para usar imagem real, troque por:

```html
<div class="post-card__media"><img src="/assets/img/blog/nome-do-artigo.webp" width="640" height="400" alt="descrição" loading="lazy"></div>
```

---

## 5. Logo e imagem de compartilhamento

A logo enviada (`Logo/WhatsApp Image ....jpeg`) teve o fundo removido e foi aplicada em:

| Arquivo | Onde aparece | Formato |
|---|---|---|
| `assets/img/logo-mark.png` | Monograma **JD** no cabeçalho (ao lado do nome) | PNG transparente, 261×200 |
| `assets/img/logo-full.png` | Lockup completo no **rodapé** | PNG transparente, 427×260 |
| `assets/favicon/favicon.png` | **Favicon** (aba do navegador) e `apple-touch-icon` | PNG 180×180, monograma sobre fundo marinho |
| `assets/img/og-default.png` | **Open Graph / Twitter** (prévia ao compartilhar) | PNG 1200×630 |

Para trocar a logo depois: substitua esses arquivos mantendo os nomes e as proporções. O recorte do fundo foi feito por aproximação — se quiser um resultado perfeito, gere um PNG transparente da logo num editor de imagem e sobrescreva `logo-full.png` / `logo-mark.png`.

---

## 6. WhatsApp

- Número usado em todos os links: **+55 32 98845-7314** (formato do link: `https://wa.me/5532988457314`).
- O botão flutuante e o botão do cabeçalho usam a mensagem padrão:
  *"Olá, Dra. Junia. Encontrei seu site e gostaria de informações sobre atendimento jurídico."*
- Cada página de serviço tem um botão com mensagem específica (ex.: "...orientação sobre inventário extrajudicial.").
- Para mudar o número: localizar e substituir `5532988457314` em todos os arquivos.
- Para mudar uma mensagem: edite o trecho após `?text=` no link (o texto fica "URL-encoded"; para gerar um novo, use qualquer codificador de URL ou peça ajuda).

---

## 7. Estrutura de arquivos

```
/                         index.html ................ Home (11 seções)
/sobre/                   ........................... Sobre a Dra. Junia
/inventario-e-sucessoes/  ........................... Página pilar
/inventario-extrajudicial/
/inventario-judicial/
/heranca-e-partilha/
/direito-de-familia/
/usucapiao/               ........................... Usucapião e regularização de imóveis
/direito-trabalhista/
/blog/                    ........................... Índice + 8 artigos completos em subpastas
/contato/                 ........................... Contato, mapa, LocalBusiness
/politica-de-privacidade/
/termos-de-uso/
/404.html
/assets/css/style.css     ........................... Único arquivo de estilos (design system)
/assets/js/main.js        ........................... Menu mobile, header on-scroll, animações
/assets/img/              ........................... Fotos, logo (logo-full/logo-mark), hero, OG
/assets/video/junia-hero.mp4 ........................ Vídeo do Hero
/assets/favicon/favicon.png
/sitemap.xml  /robots.txt  /site.webmanifest
```

URLs "limpas" funcionam porque cada página é uma pasta com `index.html`.

---

## 8. Editar textos e cores

- **Textos:** abra o `index.html` da página e edite o conteúdo entre as tags. Cada seção tem um comentário `<!-- ... -->` identificando-a.
- **Cores / fontes / espaçamentos:** todos os valores ficam no topo de `assets/css/style.css`, no bloco `:root { ... }` (variáveis como `--navy`, `--gold`, `--font-display`).
- **Menu:** os itens do menu aparecem em **dois lugares por página** — no `<nav class="nav">` (desktop) e no `<div class="nav-drawer">` (celular). Ao alterar, ajuste os dois.

### Cabeçalho e rodapé são repetidos em cada página
Como não há build, o `<header>`, o `<footer>` e o botão flutuante do WhatsApp são iguais em todos os arquivos `.html`.
Se editar um deles, **replique a mesma alteração nas demais páginas** (um "localizar e substituir" no bloco todo resolve). A única diferença entre páginas é a classe `is-active` / `aria-current="page"` no item de menu da página atual.

---

## 9. SEO — o que já está pronto

- `<title>` e `meta description` únicos por página.
- `canonical`, Open Graph e Twitter Cards em todas as páginas.
- Dados estruturados (JSON-LD): `LegalService` / `Attorney` + `LocalBusiness` (Home e Contato), `Person` (Sobre), `Service` + `FAQPage` (páginas de serviço), `BlogPosting` (artigos), `BreadcrumbList` (páginas internas).
- `sitemap.xml` e `robots.txt` (lembre de reenviar o sitemap no Google Search Console após publicar).
- Headings organizados (1 `<h1>` por página), breadcrumbs visuais, `alt` nas imagens/ícones, `lang="pt-BR"`.

### Depois de publicar
1. Cadastre o site no **Google Search Console** e envie `sitemap.xml`.
2. Crie / vincule o **Perfil da Empresa no Google** (Google Meu Negócio) com o mesmo nome, endereço e telefone (NAP) do site.
3. Teste os dados estruturados em **search.google.com/test/rich-results**.
4. Confira a performance em **PageSpeed Insights**.

---

## 10. Conformidade OAB

O conteúdo foi redigido em tom informativo, sem promessa de resultado, sem termos como "melhor/especialista", sem números de casos/clientes/valores e sem gatilhos de urgência, buscando observar o Código de Ética e Disciplina da OAB e o Provimento nº 205/2021. Revise os textos com a responsável antes de publicar.
