# Como publicar o site

Repositório já criado: `https://github.com/lucianoamaralvieira-commits/site-junia.git`

Site 100% estático (HTML/CSS/JS, sem build). Dá para publicar de 3 jeitos.

---

## Opção A — Vercel por upload (mais rápido, sem Git)

1. Acesse <https://vercel.com> e entre (pode ser com a conta do GitHub).
2. **Add New… → Project**.
3. Procure a opção **"Deploy"/"Upload"** (às vezes fica em *"Import Third-Party Git Repository"* → aba de upload, ou você arrasta a pasta).
   - Arraste a pasta **`junia-dourado-advocacia`** inteira.
4. Configurações:
   - **Framework Preset:** `Other`
   - **Build Command:** *(deixe vazio)*
   - **Output Directory:** `.` *(ponto = raiz)*
   - **Root Directory:** `./`
5. **Deploy**. Em ~30 s o site sai no ar num endereço `https://site-junia-xxxx.vercel.app`.

> Se não achar o upload, use a Opção B ou C.

---

## Opção B — GitHub Desktop (sem linha de comando) + Vercel

### B.1 Enviar para o GitHub
1. Instale o **GitHub Desktop**: <https://desktop.github.com> → entre com sua conta GitHub.
2. **File → Add local repository…** → selecione a pasta `C:\Users\Junia\Downloads\junia-dourado-advocacia`.
3. Ele vai avisar que a pasta não é um repositório → clique em **"create a repository"** → **Create repository**.
4. Clique em **Publish repository**.
   - Em *"Name"* deixe `site-junia`.
   - **Desmarque** "Keep this code private" se quiser público (ou deixe privado — a Vercel importa os dois).
   - Publique.
5. Se preferir usar exatamente o repo que você já criou: em **Repository → Repository settings → Remote**, coloque
   `https://github.com/lucianoamaralvieira-commits/site-junia.git` e faça **Push**.

### B.2 Importar na Vercel
1. <https://vercel.com> → login com o GitHub.
2. **Add New… → Project → Import Git Repository** → escolha **site-junia**.
3. **Framework Preset:** `Other` · **Build Command:** vazio · **Output Directory:** `.` · **Root Directory:** `./`
4. **Deploy**.
5. A partir daí, todo `push` no GitHub republica sozinho na Vercel.

---

## Opção C — Git pela linha de comando + Vercel

### C.1 JÁ FEITO
O Git foi instalado e o repositório local já está pronto nesta pasta:
- `git init` feito, branch **main**
- **1 commit** com todos os 53 arquivos ("Site institucional - Junia Dourado Advocacia")
- remote **origin** = `https://github.com/lucianoamaralvieira-commits/site-junia.git`

**Falta só o `push`** — que precisa do SEU login no GitHub (não dá para automatizar).

### C.2 Enviar para o GitHub (você faz)
Abra uma **NOVA janela do PowerShell** (ou Prompt) e rode:

```powershell
cd "C:\Users\Junia\Downloads\junia-dourado-advocacia"
git push -u origin main
```

Vai abrir o navegador para **login no GitHub** → autorize. Pronto.
(Se disser que `git` não é reconhecido, feche e abra o PowerShell de novo, ou use o caminho completo `"C:\Program Files\Git\cmd\git.exe" push -u origin main`.)

> Alternativa sem terminal: instale o **GitHub Desktop** → *File → Add local repository* → aponte para esta pasta → clique em **Push origin**. Ele faz o login numa janela e envia.

### C.3 Importar na Vercel
Igual ao passo **B.2** acima.

---

## Depois de publicar

- **Domínio próprio:** no projeto da Vercel → **Settings → Domains** → adicione `juniadouradoadv.com.br` e siga o DNS indicado.
- Se o domínio final NÃO for `www.juniadouradoadv.com.br`, faça um "localizar e substituir" desse endereço em: todos os `.html` (tags `canonical`, `og:url`, `og:image`, `twitter:image`), no `sitemap.xml` e no `robots.txt`.
- **Google Search Console:** cadastre o site e envie `sitemap.xml`.
- O arquivo `serve.ps1` é só para testar localmente; pode ficar no repositório sem problema.
