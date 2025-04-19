# Atypical - Website Institucional

Este é o website institucional da Atypical, uma equipe focada em trazer soluções tecnológicas para empresas e clientes.

## Estrutura do Projeto

```
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Font Awesome (para ícones)

## Características

- Design responsivo
- Navegação suave
- Menu mobile
- Seções para:
  - Home
  - Sobre
  - Projetos
  - Equipe
  - Contato
- Cards interativos para projetos e membros da equipe
- Formulário de contato
- Cores principais: Preto e Verde

## Como Personalizar

### Projetos

Para adicionar ou modificar projetos, edite o array `projetos` no arquivo `js/script.js`:

```javascript
const projetos = [
    {
        titulo: 'Nome do Projeto',
        descricao: 'Descrição do projeto',
        imagem: 'caminho/para/imagem.jpg',
        tecnologias: ['Tecnologia 1', 'Tecnologia 2']
    }
];
```

### Equipe

Para adicionar ou modificar membros da equipe, edite o array `equipe` no arquivo `js/script.js`:

```javascript
const equipe = [
    {
        nome: 'Nome do Membro',
        cargo: 'Cargo do Membro',
        foto: 'caminho/para/foto.jpg',
        linkedin: 'URL do LinkedIn'
    }
];
```

### Cores

As cores principais podem ser modificadas no arquivo `css/style.css`, alterando as variáveis CSS:

```css
:root {
    --primary-color: #00ff00;    /* Verde */
    --primary-dark: #00cc00;     /* Verde escuro */
    --secondary-color: #000000;  /* Preto */
    /* ... outras variáveis ... */
}
```

## Como Usar

1. Clone este repositório
2. Personalize os dados dos projetos e equipe no arquivo `js/script.js`
3. Adicione suas próprias imagens
4. Modifique o conteúdo do `index.html` conforme necessário
5. Atualize as informações de contato e redes sociais

## Formulário de Contato

O formulário de contato atual apenas exibe uma mensagem de sucesso. Para implementar o envio real de e-mails, você precisará:

1. Criar um backend para processar o formulário
2. Modificar a função `inicializarFormularioContato()` no arquivo `js/script.js`
3. Adicionar a URL do seu backend no atributo `action` do formulário

## Responsividade

O site é totalmente responsivo e se adapta a diferentes tamanhos de tela. O menu se transforma em um menu hamburger em dispositivos móveis (largura < 768px).

## Otimização de Imagens

Para melhor performance, recomenda-se:

1. Otimizar todas as imagens antes de usar
2. Usar formatos modernos como WebP quando possível
3. Manter as dimensões das imagens consistentes com os tamanhos definidos no CSS

## Suporte

Para suporte ou dúvidas, entre em contato através do formulário no site. 