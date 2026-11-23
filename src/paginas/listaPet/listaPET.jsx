
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { listarPets, excluirPet } from '../../services/petService.js'
import './listaPets.css'

function ListaPets() {
    const [pets, setPets] = useState([])

    function carregarPets() {
        setPets(listarPets())
    }

    useEffect(() => {
        carregarPets()
    }, [])

    function removerPet(id) {
        const confirmar = window.confirm(
            'Deseja realmente excluir este pet?'
        )

        if (confirmar) {
            excluirPet(id)
            carregarPets()
        }
    }

    return (
        <main className="ListaPets">
            <header className="ListaPets_topo">
                <div>
                    <h1>Meus animais</h1>
                    <p>Gerencie os animais cadastrados no rePET.</p>
                </div>

                <Link to="/cadastro-pet" className="ListaPets_botao">
                    + Cadastrar pet
                </Link>
            </header>

            {pets.length === 0 ? (
                <section className="ListaPets_vazio">
                    <h2>Nenhum pet cadastrado ainda.</h2>
                    <p>Comece cadastrando seu primeiro animal!</p>

                    <Link to="/cadastro-pet">
                        Cadastrar primeiro pet
                    </Link>
                </section>
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
                                <h2>{pet.nome}</h2>
                                <p>{pet.especie} • {pet.raca}</p>
                                <p>{pet.sexo} • {pet.porte}</p>

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
