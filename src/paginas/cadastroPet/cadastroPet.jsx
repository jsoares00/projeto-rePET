
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {
    cadastrarPet,
    listarPets,
    atualizarPet
} from '../../services/petService'

import './cadastroPet.css'

function CadastroPet() {
    const navigate = useNavigate()
    const { id } = useParams()

    const [formulario, setFormulario] = useState({
        nome: '',
        especie: '',
        raca: '',
        sexo: '',
        porte: '',
        foto: '',
        descricao: ''
    })

    useEffect(() => {
        if (id) {
            const petEncontrado = listarPets().find(
                (pet) => pet.id === id
            )

            if (petEncontrado) {
                setFormulario({
                    nome: petEncontrado.nome || '',
                    especie: petEncontrado.especie || '',
                    raca: petEncontrado.raca || '',
                    sexo: petEncontrado.sexo || '',
                    porte: petEncontrado.porte || '',
                    foto: petEncontrado.foto || '',
                    descricao: petEncontrado.descricao || ''
                })
            }
        }
    }, [id])

    function atualizarCampo(event) {
        const { name, value } = event.target

        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    function salvarPet(event) {
        event.preventDefault()

        if (
            !formulario.nome.trim() ||
            !formulario.especie ||
            !formulario.sexo ||
            !formulario.porte
        ) {
            alert('Preencha os campos obrigatórios.')
            return
        }

        if (id) {
            atualizarPet(id, formulario)
            alert('Pet atualizado com sucesso!')
        } else {
            cadastrarPet(formulario)
            alert('Pet cadastrado com sucesso!')
        }

        navigate('/lista-pets')
    }

    return (
        <main className="CadastroPet">

            <div className="CadastroPet_topo">
                <h1>{id ? 'Editar animal' : 'Cadastrar animal'}</h1>
                <p>Preencha as informações do seu pet.</p>
            </div>

            <form onSubmit={salvarPet} className="CadastroPet_formulario">

                <div className="CadastroPet_campo">
                    <label>Nome *</label>
                    <input
                        name="nome"
                        value={formulario.nome}
                        onChange={atualizarCampo}
                        placeholder="Ex: Thor"
                        required
                    />
                </div>

                <div className="CadastroPet_campo">
                    <label>Espécie *</label>
                    <select name="especie" value={formulario.especie} onChange={atualizarCampo} required>
                        <option value="">Selecione</option>
                        <option value="Cachorro">Cachorro</option>
                        <option value="Gato">Gato</option>
                        <option value="Ave">Ave</option>
                        <option value="Outro">Outro</option>
                    </select>
                </div>

                <div className="CadastroPet_campo">
                    <label>Raça</label>
                    <input
                        name="raca"
                        value={formulario.raca}
                        onChange={atualizarCampo}
                        placeholder="Ex: Golden Retriever"
                    />
                </div>

                <div className="CadastroPet_campo">
                    <label>Sexo *</label>
                    <select name="sexo" value={formulario.sexo} onChange={atualizarCampo} required>
                        <option value="">Selecione</option>
                        <option value="Macho">Macho</option>
                        <option value="Fêmea">Fêmea</option>
                    </select>
                </div>

                <div className="CadastroPet_campo">
                    <label>Porte *</label>
                    <select name="porte" value={formulario.porte} onChange={atualizarCampo} required>
                        <option value="">Selecione</option>
                        <option value="Pequeno">Pequeno</option>
                        <option value="Médio">Médio</option>
                        <option value="Grande">Grande</option>
                    </select>
                </div>

                <div className="CadastroPet_campo CadastroPet_completo">
                    <label>Foto do animal (URL)</label>
                    <input
                        name="foto"
                        type="url"
                        value={formulario.foto}
                        onChange={atualizarCampo}
                        placeholder="https://exemplo.com/imagem.jpg"
                    />
                </div>

                <div className="CadastroPet_campo CadastroPet_completo">
                    <label>Descrição</label>
                    <textarea
                        name="descricao"
                        value={formulario.descricao}
                        onChange={atualizarCampo}
                        placeholder="Conte um pouco sobre o animal..."
                        rows="4"
                    />
                </div>

                <div className="CadastroPet_acoes">
                    <button type="button" onClick={() => navigate('/lista-pets')}>
                        Cancelar
                    </button>

                    <button type="submit">
                        {id ? 'Salvar alterações' : 'Cadastrar pet'}
                    </button>
                </div>

            </form>
        </main>
    )
}

export default CadastroPet
