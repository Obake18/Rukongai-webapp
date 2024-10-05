/**
 * Classe Caso representa um caso paranormal.
 * @class
 */
class Caso {

    /**
     * Construtor da classe Caso.
     * @constructor
     * @param {string} nomeCaso - Nome do caso paranormal.
     * @param {string} local - O local onde o caso ocorreu.
     * @param {string} nomeVitima - O nome da vítima envolvida no caso.
     * @param {string} acontecimento - Descrição do acontecimento paranormal.
     * @param {Date} data - Data em que o caso ocorreu.
     * @param {string} resolucao - Resolução ou desfecho do caso.
     * @param {string} espirito - Nome do espírito envolvido, se aplicável.
     */
    constructor(id, foto, nomeCaso, local, vitima, acontecimento, data, resolucao, youkai) {
        this.id = id;
        this.foto = foto;        
        this.nomeCaso = nomeCaso;
        this.local = local;
        this.vitima = vitima;
        this.acontecimento = acontecimento;
        this.data = data;
        this.resolucao = resolucao;
        this.youkai = youkai;
    }
}

/**
 * Classe Vitima representa uma vítima envolvida em um caso paranormal.
 * Herda propriedades da classe Caso.
 * @class
 */
class Vitima {

    /**
     * Construtor da classe Vitima.
     * @constructor
     * @param {string} nomeVitima - O nome da vítima.
     * @param {number} idade - Idade da vítima.
     * @param {string} status - Status da vítima após o acontecimento.
     * @param {string} relato - Relato da vítima sobre o incidente.
     */
    constructor(nome, idade, status, relato) {
        // Chama o construtor da classe pai (Caso) com o nome da vítima.
        this.nome = nome;
        this.idade = idade;
        this.status = status;
        this.relato = relato;
    }
}

/**
 * Classe Youkai representa um espírito envolvido em um caso paranormal.
 * Herda propriedades da classe Caso.
 * @class
 */
class Youkai {

    /**
     * Construtor da classe Youkai.
     * @constructor
     * @param {string} espirito - Nome do espírito.
     * @param {string} rank - Rank ou nível de poder do espírito.
     * @param {string} natureza - Natureza ou tipo do espírito.
     */
    constructor(nome, rank, natureza) {
        // Chama o construtor da classe pai (Caso) com o nome do espírito.
        this.nome = nome;
        this.rank = rank;
        this.natureza = natureza;
    }
}
