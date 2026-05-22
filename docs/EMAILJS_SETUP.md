# EmailJS — Setup do formulário de contato

Este documento existe para quem for **configurar a conta da Lívia no EmailJS** e plugar as credenciais no projeto. O código já está pronto em [src/sections/contact/components/ContactForm.tsx](../src/sections/contact/components/ContactForm.tsx) — só faltam os 3 valores do painel do EmailJS num `.env` local.

## Por que EmailJS

O site é estático (Vite + React, hospedado como SPA). Navegador não envia email direto via SMTP, então precisamos de um serviço intermediário. EmailJS faz isso sem backend: o frontend chama a API deles e eles encaminham por SMTP do Gmail conectado. Plano grátis cobre 200 emails/mês — mais que suficiente pra um portfólio.

Credenciais necessárias (todas vão pro `.env`, não pro código):
- `VITE_EMAILJS_SERVICE_ID` — identifica a conta de email conectada
- `VITE_EMAILJS_TEMPLATE_ID` — identifica o template do email que sai
- `VITE_EMAILJS_PUBLIC_KEY` — chave pública (segura pra expor; o EmailJS restringe por domínio em "Allowed Origins")

## Passo a passo no painel do EmailJS

Quem executa: **Lívia** (precisa ser ela porque o Gmail `Liviazaballai@gmail.com` é o de destino e o OAuth do Gmail precisa do login dela).

### 1. Criar conta

Acesse https://www.emailjs.com/ → **Sign Up** → use o Gmail `Liviazaballai@gmail.com` (ou outro, tanto faz pro login). Confirma o email.

### 2. Conectar o Gmail como Service

No painel:

1. **Email Services** (menu lateral) → **Add New Service**.
2. Escolhe **Gmail**.
3. Clica em **Connect Account** → faz login com `Liviazaballai@gmail.com` → autoriza o EmailJS.
4. **Service Name** pode deixar "Gmail" ou renomear pra "Portfolio".
5. Salva. Vai aparecer um **Service ID** parecido com `service_abc1234`. **Anota.**

### 3. Criar o Template

1. **Email Templates** → **Create New Template**.
2. **Settings** da aba:
   - **Template Name:** `Contato Portfólio`
   - **To Email:** `{{to_email}}`
   - **From Name:** `{{from_name}}`
   - **From Email:** deixa o default do EmailJS (ele preenche)
   - **Reply To:** `{{from_email}}` ← importante, isso faz o botão "Responder" do Gmail abrir já com o email do visitante
   - **Subject:** `Novo contato pelo portfólio — {{from_name}}`
3. **Content** (corpo HTML ou texto):

   ```
   Você recebeu uma nova mensagem pelo seu portfólio:

   Nome: {{from_name}}
   E-mail: {{from_email}}

   Mensagem:
   {{message}}
   ```

4. **Save** → anota o **Template ID** (`template_xyz5678`).

### 4. Pegar a Public Key

1. **Account** (canto inferior do menu) → aba **General**.
2. Copia o valor de **Public Key**. **Anota.**

### 5. Restringir por domínio (importante pra segurança)

1. **Account** → aba **Security**.
2. Em **Allowed Origins** adiciona:
   - `http://localhost:5173` (dev)
   - O domínio de produção (ex.: `https://liviaballai.com` ou onde for hospedado)
3. Salva.

Sem isso, qualquer site na internet poderia usar sua Public Key pra enviar emails na sua cota.

### 6. Resumo dos 3 valores

Ao final você tem três strings:

- Service ID — `service_xxxxxxx`
- Template ID — `template_xxxxxxx`
- Public Key — alfanumérico longo

Essas três strings são o que vai pro `.env` no passo seguinte.

## Plugar no projeto

Na raiz do projeto (`livia-portfolio/`), crie o arquivo `.env`:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
```

Esse arquivo está no `.gitignore` — **nunca commita**. O `.env.example` que está versionado serve como template.

Reinicia o dev server (`npm run dev`) — Vite só lê `.env` no boot.

## Testar

1. `npm run dev`, abre o site, vai pra seção Contact.
2. Preenche Nome / E-mail / Mensagem e envia.
3. Sucesso: aparece "Mensagem enviada! Em breve eu te respondo." em turquesa, e o email chega em `Liviazaballai@gmail.com` segundos depois.
4. Erro: aparece "Não consegui enviar. Tenta novamente ou me chama no WhatsApp." em coral. Abre o console do navegador — vai ter um log do erro retornado pela API do EmailJS.

Erros comuns:

| Sintoma | Causa provável |
|---|---|
| `EmailJS env vars ausentes` no console | `.env` não foi criado ou o `npm run dev` não foi reiniciado depois |
| API retorna 403 / "origin not allowed" | Domínio não está em **Allowed Origins** no painel |
| API retorna 422 / "template variable missing" | Nome de variável no template não bate com o que o código manda (veja [ContactForm.tsx](../src/sections/contact/components/ContactForm.tsx) — variáveis: `from_name`, `from_email`, `message`, `to_email`) |
| Email não chega | Checar a aba **Email History** no painel do EmailJS — eles logam todos os envios e erros |

## Deploy

Em hospedagem estática (Vercel, Netlify, GitHub Pages, etc.):

- As 3 variáveis precisam ser configuradas no painel do provider como **Environment Variables** com os mesmos nomes `VITE_EMAILJS_*`.
- O Vite injeta no build, então o build precisa rodar depois das vars serem setadas.

## Prompt pra continuar em outro chat

Se precisar terminar essa integração em um chat novo (ou pedir pra outro agente), cole o bloco abaixo:

```
Estou continuando o setup do EmailJS no projeto livia-portfolio (Vite + React + TypeScript).

Estado atual:
- @emailjs/browser já instalado em package.json
- src/sections/contact/components/ContactForm.tsx já tem o handleSubmit chamando emailjs.send() com as variáveis from_name, from_email, message, to_email
- to_email está hard-coded como "Liviazaballai@gmail.com"
- .env.example está commitado com os 3 nomes esperados (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY)
- .env está no .gitignore

A documentação completa de configuração da conta EmailJS está em docs/EMAILJS_SETUP.md (passo a passo no painel + template + variáveis esperadas).

Tarefa: [DESCREVE O QUE FALTA — exemplos:
  "Já tenho os 3 IDs do EmailJS, criar o .env e testar"
  "O envio está falhando com erro X, ajuda a depurar"
  "Preciso adicionar campo Assunto/Telefone ao form e ao template"
]

IDs (quando aplicável):
- VITE_EMAILJS_SERVICE_ID=
- VITE_EMAILJS_TEMPLATE_ID=
- VITE_EMAILJS_PUBLIC_KEY=
```
