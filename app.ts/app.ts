class Produto {

    private id: string;

    private nome: string;

    private descricao: string;

    private quantidade: number;

    private preco: number;

 

    constructor(id: string, nome: string, descricao: string, quantidade: number, preco: number) {

      this.id = id;

      this.nome = nome;

      this.descricao = descricao;

      this.quantidade = quantidade;

      this.preco = preco;

    }

 

    public atualizarInformacoes(nome: string, descricao: string, preco: number) {

      this.nome = nome;

      this.descricao = descricao;

      this.preco = preco;

     

    }

 

  }

 

  class Estoque {

    private produtos: Produto[];

 

    constructor() {

      this.produtos = [];

    }

 

    public adicionarProduto(produto: Produto) {

      this.produtos.push(produto);

    }

 

    public atualizarProduto(produto: Produto) {



    }

 

    public buscarProdutoPorId(id: string): Produto | undefined {

      return this.produtos.find((produto) => produto.getId() === id);

    }

 

  }

 

  class SistemaGerenciamentoEstoque {

    private estoque: Estoque;

 

    constructor() {

      this.estoque = new Estoque();

    }

 

    public adicionarProdutoAoEstoque(id: string, nome: string, descricao: string, quantidade: number, preco: number) {

      const produto = new Produto(id, nome, descricao, quantidade, preco);

      this.estoque.adicionarProduto(produto);

    }
