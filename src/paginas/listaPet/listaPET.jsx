
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'

import {
    listarPets,
    excluirPet
} from '../../services/petService'

import './ListaPets.css'

function ListaPets() {
    const [pets, setPets] = useState([])

    function carregarPets() {
        setPets(listarPets())
    }

    useEffect(() => {
        carregarPets()
    }, [])

    function removerPet(id) {
        if (window.confirm('Deseja realmente excluir este pet?')) {
            excluirPet(id)
            carregarPets()
        }
    }

    return (
        <main className="ListaPets">

            <header className="ListaPets_topo">
                <span className="ListaPets_marca">rePET</span>

                <h1>Encontre seu novo companheiro.</h1>

                <p>Conheça os animais cadastrados em nosso espaço.</p>
            </header>

            <section className="ListaPets_titulo">
                <div>
                    <h2>Nossos Pets</h2>
                    <p>{pets.length} animais cadastrados</p>
                </div>

                <Link to="/cadastro-pet" className="ListaPets_adicionar">
                    <Plus size={19} />
                    Cadastrar
                </Link>
            </section>

            {pets.length === 0 ? (
                <div className="ListaPets_vazio">
                    <span>🐾</span>
                    <h3>Nenhum animal cadastrado</h3>
                    <p>Cadastre o primeiro pet para começar!</p>
                </div>
            ) : (
                <section className="ListaPets_grade">
                    {pets.map((pet) => (
                        <article className="ListaPets_card" key={pet.id}>

                            <div className="ListaPets_foto">
                                {pet.foto ? (
                                    <img src={pet.foto} alt={pet.nome} />
                                ) : (
                                    <span>🐾</span>
                                )}
                            </div>

                            <div className="ListaPets_informacoes">
                                <h3>{pet.nome}</h3>

                                <p>{pet.especie} • {pet.raca || 'Raça não informada'}</p>

                                <p>{pet.sexo} • Porte {pet.porte}</p>

                                {pet.descricao && (
                                    <p className="ListaPets_descricao">
                                        {pet.descricao}
                                    </p>
                                )}

                                <div className="ListaPets_acoes">
                                    <Link to={`/cadastro-pet/${pet.id}`}>
                                        Editar
                                    </Link>

                                    <button onClick={() => removerPet(pet.id)}>
                                        Excluir
                                    </button>
                                </div>
                            </div>

                        </article>
                    ))}
                </section>
            )}

        </main>
    )
}

export default ListaPets
