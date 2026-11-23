
const CHAVE = 'repet_pets'

// Buscar todos os pets
export function listarPets() {
    const dados = localStorage.getItem(CHAVE)

    return dados ? JSON.parse(dados) : []
}

// Cadastrar um novo pet
export function cadastrarPet(pet) {
    const pets = listarPets()

    const novoPet = {
        ...pet,
        id: crypto.randomUUID()
    }

    pets.push(novoPet)

    localStorage.setItem(CHAVE, JSON.stringify(pets))

    return novoPet
}

// Atualizar um pet existente
export function atualizarPet(id, novosDados) {
    const pets = listarPets()

    const petsAtualizados = pets.map((pet) =>
        pet.id === id
            ? { ...pet, ...novosDados }
            : pet
    )

    localStorage.setItem(CHAVE, JSON.stringify(petsAtualizados))
}

// Excluir um pet
export function excluirPet(id) {
    const pets = listarPets()

    const petsAtualizados = pets.filter(
        (pet) => pet.id !== id
    )

    localStorage.setItem(CHAVE, JSON.stringify(petsAtualizados))
}
