# Documento de Requisitos do Sistema
Título do Sistema: Extensão de Navegador para Foco do Usuário

## Objetivo:
A extensão auxilia o usuário a manter o foco, identificando e alertando quando o conteúdo de uma página da web não está alinhado com os tópicos definidos pelo usuário como prioritários.

## Abordagem Prioritária:
Utilizar o DOM para identificar tópicos da página e compará-los com uma lista de foco definida pelo usuário. Os avisos e notificações são gerados apenas se os tópicos forem irrelevantes ao objetivo definido pelo usuário.

## 1. Requisitos Funcionais
### 1.1. Definir Foco do Usuário
RF01: O sistema deve permitir que o usuário insira uma lista de tópicos ou palavras-chave relacionadas ao foco atual.
RF02: O sistema deve armazenar os tópicos de foco localmente no navegador.
### 1.2. Analisar Conteúdo da Página Web
RF03: O sistema deve identificar o texto principal da página usando o DOM.
RF04: O sistema deve filtrar conteúdos irrelevantes, como menus, rodapés e anúncios.
RF05: O sistema deve extrair palavras-chave da página utilizando técnicas de NLP para gerar uma lista de tópicos relevantes.
### 1.3. Comparar Foco e Conteúdo
RF06: O sistema deve comparar os tópicos extraídos da página com os tópicos fornecidos pelo usuário.
RF07: O sistema deve calcular uma métrica de relevância (e.g., interseção de palavras-chave ou similaridade de texto).
### 1.4. Alertar o Usuário
RF08: Se a página for considerada irrelevante, o sistema deve exibir um alerta visual (banner ou pop-up).
RF09: O sistema deve permitir que o usuário ignore alertas em domínios específicos.
## 2. Requisitos Não Funcionais
### 2.1. Privacidade e Segurança
RNF01: Todo o processamento de dados deve ocorrer localmente no navegador.
RNF02: O sistema não deve enviar informações de foco ou conteúdo da página para servidores externos.
### 2.2. Usabilidade
RNF03: O sistema deve oferecer uma interface intuitiva para definir e gerenciar tópicos de foco.
RNF04: O alerta visual deve ser discreto, sem interromper a navegação do usuário.
### 2.3. Desempenho
RNF05: O sistema deve realizar a análise de conteúdo em menos de 1 segundo para páginas de até 10.000 palavras.
RNF06: O impacto no uso de memória e CPU deve ser minimizado.
## 3. Casos de Uso
### 3.1. Inserir Tópicos de Foco
Descrição: O usuário acessa a extensão, insere uma lista de palavras-chave e salva.
Critérios de Aceitação:
O sistema deve exibir a lista salva na interface.
Os tópicos devem ser persistentes mesmo após reiniciar o navegador.
### 3.2. Analisar Página Web
Descrição: Ao acessar uma página, o sistema analisa o conteúdo e compara com os tópicos do usuário.
Critérios de Aceitação:
A lista de tópicos da página deve ser gerada corretamente.
O sistema deve ignorar conteúdos irrelevantes (e.g., menus, anúncios).
### 3.3. Exibir Alertas
Descrição: O sistema alerta o usuário caso a página seja irrelevante ao foco.
Critérios de Aceitação:
O alerta deve exibir os tópicos da página e os tópicos do usuário para comparação.
O usuário deve poder optar por ignorar o alerta.
## 4. Tecnologias e APIs
### 4.1. Tecnologias Prioritárias
DOM Manipulation: Para extrair conteúdo das páginas.
NLP.js ou compromise.js: Para identificar palavras-chave.
Chrome Storage API: Para armazenar dados do usuário (lista de foco).
### 4.2. Alternativas Adicionais
Chrome Translation API: Para traduzir conteúdos automaticamente (se aplicável).
Chrome Speech API: Para transformar o resumo em áudio (opcional).
## 5. Estratégia de Teste (TDD)
Para garantir a qualidade do sistema, os testes serão escritos antes da implementação.

### 5.1. Testes Unitários
Inserção de Foco:

Testar se os tópicos são salvos corretamente.
Verificar persistência dos dados após reinício do navegador.
### Extração de Conteúdo:

Testar se os textos das tags relevantes são capturados.
Garantir que menus, anúncios e rodapés sejam ignorados.
### Análise de Relevância:

Testar a geração de palavras-chave da página.
Validar o cálculo de relevância entre tópicos.
### Exibição de Alertas:

Verificar se o alerta aparece quando a página é irrelevante.
Garantir que o botão "ignorar" funciona corretamente.
## 5.2. Testes de Integração
Validar a interação entre as APIs do Chrome e o processamento local.
Verificar se os tópicos de foco são acessados corretamente ao carregar uma página.
Este documento organiza os requisitos em níveis testáveis, facilitando a criação de uma abordagem única para o problema e permitindo futuras iterações ou funcionalidades adicionais.