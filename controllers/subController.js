const SubModel = require('../models/subModel');

class subController {
    async cadastro(req, res) {
        const { nome, sobrenome, nascimento, telefone, endereco, cidade, estados,  status } = req.body
        const file = req.file

        try {

            const max = await SubModel.findOne({}).sort({ id: -1 });
            const id = max == null ? 1 : max.id + 1;
            const subModel = new SubModel({
                id,
                nome,
                sobrenome, 
                nascimento, 
                telefone, 
                endereco, 
                cidade, 
                estados,  
                status,
                imagem : file.path,
            })
                await subModel.save()
            res.status(200).json(subModel)
        } catch (error) {
            console.error(error)
            res.status(500).json({ mensagem: 'Erro ao realizar cadastro.' })
        }
    }

    async buscar(req, res) {

        try {
            const resultado = await SubModel.find({});

            if (!resultado) {
                res.status(404).json({ mensagem: 'Nenhum cadastro encontrado!' })
            } else {
                res.status(200).json(resultado);
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({ mensagem: 'Erro durante consulta.' })
        }
    }

    async buscarPorId(req, res) {
        const id = req.params.id;
        try {
            const resultado = await SubModel.findOne({ 'id': id });

            if (!resultado) {
                res.status(404).json({ mensagem: `Cadastro com ID: ${id} não encontrado!` })
            } else {
                res.status(200).json(resultado);
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({ mensagem: 'Erro ao realizar consulta por ID.' })
        }
    }

    async buscarPorNome(req, res) {
        const nome = req.params.nome;

        try {
            const resultado = await SubModel.find({ 'nome': nome });

            if (!resultado) {
                res.status(404).json({ mensagem: `Nenhum cadastro com nome: ${nome} encontrado!` })
            } else {
                res.status(200).json(resultado);
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({ mensagem: 'Erro ao realizar consulta por nome.' })
        }
    }

    async buscarPorSobrenome(req, res) {
        const sobrenome = req.params.sobrenome;

        try {
            const resultado = await SubModel.find({ 'sobrenome': sobrenome });

            if (!resultado) {
                res.status(404).json({ mensagem: `Nenhum cadastro com sobrenome: ${sobrenome} encontrado!` })
            } else {
                res.status(200).json(resultado);
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({ mensagem: 'Erro ao realizar consulta por sobrenome.' })
        }
    }

    async buscarPorCidade(req, res) {
        const cidade = req.params.cidade;

        try {
            const resultado = await SubModel.find({ 'cidade': cidade });
            if (!resultado) {
                res.status(404).json({ mensagem: `Nenhum cadastro com a cidade: ${cidade} encontrado!` })
            } else {
                res.status(200).json(resultado);
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({ mensagem: 'Erro ao realizar consulta por cidade.' })
        }
    }

    async buscarPorEstado(req, res) {
        const estado = req.params.estado;

        try {
            const resultado = await SubModel.find({ 'estado': estado });

            if (!resultado) {
                res.status(404).json({ mensagem: `Nenhum cadastro com o estado: ${estado} encontrado!` })
            } else {
                res.status(200).json(resultado);
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({ mensagem: 'Erro ao realizar consulta por estado.' })
        }
    }

    async buscarPorStatus(req, res) {
        const status = req.params.status;

        try {
            const resultado = await SubModel.find({ 'status': status });

            if (!resultado) {
                res.status(404).json({ mensagem: `Nenhum cadastro com o status da conta: ${status} encontrado!` })
            } else {
                res.status(200).json(resultado);
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({ mensagem: 'Erro ao realizar consulta por status.' })
        }
    }

    async atualizar(req, res) {
        const id = req.params.id;

        try {
            const _id = String((await SubModel.findOne({ 'id': id }))._id);
            await SubModel.findByIdAndUpdate(String(_id), req.body);

            if (!_id) {
                res.status(404).json({ mensagem: `Nenhum cadastro com o ID: ${_id} encontrado para alteração!` })
            } else {
                res.status(200).json({ mensagem: `Cadastro atualizado com sucesso` });
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({ mensagem: 'Erro ao realizar alteração de cadastro.' })
        }
    }


    async excluir(req, res) {
        const id = req.params.id;

        try {
            const _id = String((await SubModel.findOne({ 'id': id }))._id);
            await SubModel.findByIdAndRemove(String(_id));

            if (!_id) {
                res.status(404).json({ mensagem: `Nenhum cadastro com o ID: ${_id} encontrado para ser deletado!` })
            } else {
                res.status(200).json({ mensagem: `Cadastro deletado com sucesso` });
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({ mensagem: 'Erro ao deletar cadastro.' })
        }
    }
}

module.exports = new subController();