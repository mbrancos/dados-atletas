# Projeto de Certificação 2 - Dados dos Atletas**

Bem-vindo!
Através do Programa Floria Mais Tec 2023, após participar da Trilha Dev, fui contemplado com a gratuidade do curso DEVStart do Senai/SC.
(https://devstart.tech)
O Floripa Mais Tec é uma iniciativa da Prefeitura de Florianópolis, em parceria com SENAI/SC, SEBRAE e ACATE, que visa democratizar o acesso ao ensino tecnológico para todos, oferecendo cursos de Tecnologia gratuitos!
(https://floripamaistec.pmf.sc.gov.br/)

O presente código trata-se do segundo de dois projetos de certificação da Trilha 1 - Lógica de Programação do curso DEVstart. O primero projeto pode ser consultado no endereço https://github.com/mbrancos/notas-atletas/
Neste segundo projeto, precisamos criar uma aplicação JavaScript que utiliza a classe `Atleta` para receber informações sobre atletas e calcular diversos parâmetros, tais como categoria, IMC (Índice de Massa Corporal) e média válida com base nas notas fornecidas.

## Especificações

A classe `Atleta` inclui os seguintes atributos:

- Nome
- Idade
- Peso
- Altura
- Notas

E os seguintes métodos:

- `calculaCategoria()`: Calcula a categoria do atleta com base na idade.
- `calculaIMC()`: Calcula o IMC do atleta.
- `calculaMediaValida()`: Calcula a média válida do atleta, eliminando a maior e menor nota.
- `obtemNomeAtleta()`: Retorna o nome do atleta.
- `obtemIdadeAtleta()`: Retorna a idade do atleta.
- `obtemPesoAtleta()`: Retorna o peso do atleta.
- `obtemNotasAtleta()`: Retorna as notas do atleta.
- `obtemCategoria()`: Retorna a categoria do atleta.
- `obtemIMC()`: Retorna o IMC do atleta.
- `obtemMediaValida()`: Retorna a média válida do atleta.
- `exibirInformacoes()`: Exibe todas as informações do atleta no console.

### Exemplo de Entrada

```javascript
// Declara o atleta
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);
```

### Exemplo de Saída

```
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 8.766666666666666
```
### Regras para Cálculos

1. **Categoria:**
   - Infantil: 9 a 11 anos
   - Juvenil: 12 e 13 anos
   - Intermediário: 14 e 15 anos
   - Adulto: 16 a 30 anos
   - Sem categoria: demais idades

2. **IMC (Índice de Massa Corporal):**
   - Fórmula: IMC = Peso / (Altura x Altura)

3. **Média Válida:**
   - Utiliza a metodologia abordada no Projeto de Certificação 1, eliminando a maior e a menor nota.

## Exemplo de Uso

```javascript
// Declara o atleta
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

// Exibe as informações do atleta no console
atleta.exibirInformacoes();
```

## Como Executar

1. Clone este repositório em sua máquina local.
   ```bash
   git clone https://github.com/mbrancos/notas-atletas.git
   ```

2. Navegue até o diretório do projeto.
   ```bash
   cd notas-atletas
   ```

3. Execute o arquivo JavaScript.
   ```bash
   node notas-atletas.js
   ```


## Contribuição

Se desejar contribuir com melhorias, sinta-se à vontade para abrir um pull request. Suas contribuições são bem-vindas!

## Licença

Este projeto é distribuído sob a [Licença MIT](LICENSE).
