module.exports={
    async Home(req,res){
        return res.send("Bem vindo à página Home")
    },
    async Produtos(req,res){
        return res.send("Bem vindo à página Produtos")
    },
    async SobreNos(req,res){
        return res.send("Bem vindo à página Sobre Nós")
    },
    async Contatos(req,res){
        return res.send("Bem vindo à página Contatos")
    },
    async SeusPedidos(req,res){
        return res.send("Bem vindo à página Seus Pedidos")
    }
}