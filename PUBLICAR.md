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

### C.1 Instalar o Git (uma vez)
Baixe em <https://git-scm.com/download/win> e instale com as opções padrão.
(ou, no PowerShell:  `winget install --id Git.Git -e`  — vai pedir confirmação do Windows)

### C.2 Enviar para o GitHub
Abra o **PowerShell** e rode, uma linha por vez:

```powershell
cd "C:\Users\Junia\Downloads\junia-dourado-advocacia"
git init
git add .
git commit -m "Site Junia Dourado Advocacia"
git branch -M main
git remote add origin https://github.com/lucianoamaralvieira-commits/site-junia.git
git push -u origin main
```

Na primeira vez o Git abre o navegador para **você fazer login no GitHub** — autorize.
Se pedir usuário/senha: use seu usuário do GitHub e um **Personal Access Token** no lugar da senha
(GitHub → Settings → Developer settings → Personal access tokens → Fine-grained → repo `site-junia`, permissão *Contents: Read and write*).

### C.3 Importar na Vercel
Igual ao passo **B.2** acima.

---

## Depois de publicar

- **Domínio próprio:** no projeto da Vercel → **Settings → Domains** → adicione `juniadouradoadv.com.br` e siga o DNS indicado.
- Se o domínio final NÃO for `www.juniadouradoadv.com.br`, faça um "localizar e substituir" desse endereço em: todos os `.html` (tags `canonical`, `og:url`, `og:image`, `twitter:image`), no `sitemap.xml` e no `robots.txt`.
- **Google Search Console:** cadastre o site e envie `sitemap.xml`.
- O arquivo `serve.ps1` é só para testar localmente; pode ficar no repositório sem problema.
