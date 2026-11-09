
---

📑 Relatório de Criação: Site Oficial do Nativara IDE

Data do Registro: 2026
Status: Concluído e Online
URL de Produção: https://nativara-ide.pages.dev/
Repositório do Site: MAIKOTS/nativara-site

---

1. Transição de Marca e Identidade Visual

O projeto, que antes se chamava AML-IDE, evoluiu para uma IDE de propósito geral. Para refletir essa mudança, foi adotado o nome Nativara IDE. A identidade visual do site foi construída para transmitir modernidade, tecnologia e foco no desenvolvedor.

· Paleta de Cores (Dark Theme): Fundo escuro #18181B, superfícies #27272A e cor de destaque (accent) em verde neon #00E676.
· Logotipo: Foi gerado um ícone exclusivo (ic_launcher.png), que remete a um chip de processador aliado a colchetes de código e a letra "N".
· Tipografia: Fontes sem serifa (Segoe UI, Roboto) para máxima legibilidade em telas pequenas.

2. Escolha da Hospedagem e Deploy

Avaliamos opções de hospedagem gratuita e definimos a melhor arquitetura para um site estático.

· A escolha: Cloudflare Pages.
· Motivo: O Vercel possui limite de 100 GB/mês e o GitHub Pages limita o uso a 1 GB. O Cloudflare Pages oferece largura de banda ilimitada e uma CDN global muito rápida, ideal para hospedar os APKs e as imagens do projeto sem risco de sair do ar.
· Integração: O site foi conectado diretamente ao repositório do GitHub. A cada git push, o Cloudflare compila e atualiza o site automaticamente em segundos.

3. Estruturação e SEO

Para garantir que o site fosse encontrado e compartilhado corretamente, aplicamos boas práticas de SEO (Search Engine Optimization).

· Tags Open Graph: Configuração de og:title, og:description, og:image e og:url. Agora, ao enviar o link no WhatsApp, Discord ou Twitter, uma prévia bonita do site aparece automaticamente.
· Favicon: Adição do ícone oficial na aba do navegador.
· Semântica HTML5: Uso correto de <header>, <section>, <footer> e tags de acessibilidade (como alt nas imagens).

4. Componentização e Refatoração (O Código)

Inicialmente, todo o código (HTML, CSS e JS) estava em um único arquivo, o que gerou duplicações e bugs. Posteriormente, o projeto foi refatorado para a arquitetura padrão de mercado:

1. index.html: Responsável apenas pela estrutura e conteúdo da página.
2. style.css: Responsável pela estilização, animações, grid de recursos e responsividade.
3. script.js: Responsável pela lógica do carrossel de imagens.

5. Funcionalidades Implementadas

· Botão de Download Dinâmico: O link do botão "Baixar APK" aponta para releases/latest do GitHub. Isso garante que o usuário sempre baixe a versão mais recente sem precisar alterar o código do site.
· Carrossel de Screenshots: Implementação de um slider de imagens 100% nativo (Vanilla JS), sem bibliotecas externas. Ele permite visualizar os prints do aplicativo de forma fluida.
· Animações CSS: Efeito de Fade-in (surgimento suave) na página inicial e efeito de Hover (elevação e brilho) nos cards de recursos.

6. Correção de Bugs e Mobile (Responsividade)

Durante os testes, enfrentamos dois problemas principais que foram sanados:

· Duplicação de Código: O HTML havia ficado corrompido com dois carrosséis e scripts duplicados. O código foi limpo.
· Layout no Modo Retrato: No celular, o conteúdo estava sendo cortado e o botão "Ver Código-Fonte" ficava escondido. A solução foi reescrever as media queries no CSS, reduzindo paddings, fontes e ícones em telas menores que 768px.
· Ano do Rodapé: Correção do script de data que estava duplicando o ano.

7. Atualização do README.md (GitHub)

O repositório principal do app também foi atualizado para refletir a nova realidade do projeto:

· Adição de badges (License, Platform, Build).
· Nota de transição (AML-IDE ➔ Nativara IDE).
· Links diretos para o novo site no Cloudflare.
· Formatação correta do Markdown para exibir a tabela de tamanho do APK e o aviso sobre o Git LFS.

---

📂 Estrutura Final do Repositório do Site

A raiz do seu repositório (onde o Cloudflare faz o deploy) deve estar exatamente assim:

```text
nativara-site/
│
├── assets/
│   └── prints/
│       ├── 1.png
│       ├── 2.png
│       └── 3.png
│
├── ic_launcher.png
├── index.html
├── style.css
├── script.js
└── README.md (opcional, para documentar o site)
```

🚀 Próximos Passos (Ideias Futuras)

1. Página de Documentação: Criar uma aba no site com tutoriais de como usar a IDE e como criar o primeiro mod.
2. Blog/Changelog: Adicionar uma página para registrar as atualizações de versão (v1.0, v1.1, etc.).

---
(opcional, para documentar o site)
```

🚀 Próximos Passos (Ideias Futuras)

1. Página de Documentação: Criar uma aba no site com tutoriais de como usar a IDE e como criar o primeiro mod.
2. Blog/Changelog: Adicionar uma página para registrar as atualizações de versão (v1.0, v1.1, etc.).

---

Documento gerado e finalizado com sucesso. O projeto Nativara IDE agora possui uma presença web sólida, profissional e pronta para atrair novos desenvolvedores. via USB:

```bash
./gradlew installDebug
```

---

📦 Tamanho do APK e Recursos

Para manter o APK final enxuto, o app embarca o toolchain Clang/LLVM essencial e baixa o sysroot e os headers de um repositório remoto na primeira execução.

Métrica Valor
APK compactado ~66 MB
Conteúdo descompactado ~184 MB
Recursos baixados na 1ª execução ~100 MB

📂 Estrutura de jniLibs

```text
app/src/main/jniLibs/arm64-v8a/
├── libc++_shared.so        Runtime C++
├── libclang.so             Compilador Clang/LLVM (96 MB)
├── libldreal.so            Linker real (lld)
├── libldwrapper.so         Wrapper do linker
├── libllvm-ar.so           Criador de bibliotecas .a
├── libllvm-objcopy.so      Manipulador de objetos
├── libllvm-ranlib.so       Indexador de .a
└── libllvm-strip.so        Strip de binários
```

---

🤝 Contribuindo

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (git checkout -b feature/minha-feature).
3. Faça o commit de suas mudanças (git commit -m 'Adiciona X funcionalidade').
4. Envie para a branch (git push origin feature/minha-feature).
5. Abra um Pull Request.

Lembre-se de ter o Git LFS instalado antes de clonar o seu fork.

---

📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

<div align="center">
  <p>Desenvolvido com dedicação por <a href="https://github.com/MAIKOTS"><b>MaikoTS</b></a></p>
</div>
```de').
4. Envie para a branch (git push origin feature/minha-feature).
5. Abra um Pull Request.

Lembre-se de ter o Git LFS instalado antes de clonar o seu fork.

---

📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

<div align="center">
  <p>Desenvolvido com dedicação por <a href="https://github.com/MAIKOTS"><b>MaikoTS</b></a></p>
</div>
```

O que eu melhorei:

1. Cabeçalho centralizado: Adicionei o ícone oficial (puxando direto do seu site no Cloudflare/GitHub Pages), o nome novo e botões grandes de "Site Oficial" e "Baixar APK".
2. Nota de transição: Deixei claro logo no topo que o nome mudou de AML-IDE para Nativara IDE, preservando o histórico e o SEO para quem procura por mods de GTA.
3. Novas Features: Adicionei os novos recursos que implementamos hoje (Teclado otimizado, Modo Imersivo 100% e Menu de Configurações).
4. Organização do Texto: Usei tabelas para os tamanhos do APK, separei melhor os blocos de código (```bash) e ajustei a árvore de arquivos para ficar mais legível.
5. Badges: Deixei os selos de status (License, Platform, Build) alinhados no topo para dar aquele visual de projeto Open Source sério.