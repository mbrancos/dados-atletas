// Cria a classe
class Atleta {
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    calculaCategoria(){
      if(this.idade >= 9 && this.idade <=11){
        return "Intantil"
      }if(this.idade >= 12 && this.idade <= 13){
        return "Juvenil"
      }if(this.idade >=14 && this.idade <= 15){
        return "Intermediário"
      }if(this.idade >= 16 && this.idade <= 30){
        return "Adulto"
      }else{
        return "Sem categoria"
      }
    }
    calculaIMC(){
        return this.peso / (this.altura * this.altura)
    }
    calculaMediaValida(){
      // Ordena as notas em ordem crescente
        this.notas.sort(function(a, b) {
            return a - b;
        });
        // Elimina a primeira e a última nota
        let notasComputadas = this.notas.slice(1, -1);
        // Calcula a média
        let soma = notasComputadas.reduce(function(acumulador, nota) {
            return acumulador + nota;
        }, 0);
        return soma / notasComputadas.length;
    }
    obtemNomeAtleta(){
      return this.nome
    }
    obtemIdadeAtleta(){
      return this.idade
    }
    obtemPesoAtleta(){
      return this.peso
    }
    obtemNotasAtleta(){
      return this.notas
    }
    obtemCategorias(){
      this.calculaCategoria()
      return atleta.calculaCategoria()
    }
    obtemIMC(){
      this.calculaIMC()
      return atleta.calculaIMC()
    }
    obtemMediaValida(){
      this.calculaMediaValida
      return atleta.calculaMediaValida
    }
    exibirInformacoes() {
      // Ordena as notas antes de exibi-las
      let notasOrdenadas = [...this.notas];
      notasOrdenadas.sort(function(a, b) {
        return a - b;
      });
      // A ordenação acima, ao invés de exibir as notas embaralhadas, facilita uma "auditoria" da médias

      console.log(`Nome: ${atleta.obtemNomeAtleta()}`)
      console.log(`Idade: ${atleta.obtemIdadeAtleta()}`)
      console.log(`Peso: ${atleta.obtemPesoAtleta()}`)
      console.log(`Altura: ${atleta.altura}`)
      console.log(`Notas: ${notasOrdenadas}`)
      console.log(`Categoria: ${atleta.obtemCategorias()}`)
      console.log(`IMC: ${atleta.calculaIMC()}`)
      console.log(`Média válida: ${atleta.calculaMediaValida()}`)
    }
}
//Declara atleta
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

//Exibe as informações do Atleta para o usuário
console.log(atleta.exibirInformacoes());