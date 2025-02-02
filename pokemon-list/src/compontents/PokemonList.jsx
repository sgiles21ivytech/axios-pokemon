import { useEffect, useState } from "react";
import axios from "axios"

const PokemonList = () => {
    const [pokemonNames, setPokemonNames] = useState(null)

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
            .then(response => {
                setPokemonNames(response.data.results.map(pokemon => pokemon.name))    
            })
            .catch( error => console.error("Error fetching Pokémon:", error))
    }, [])

    return (

        <div>
            <h1>The First 151 Pokémon</h1>
            <ul>
                {pokemonNames ? pokemonNames.map((name, index) => (
                    <li key={index}>{name}</li>
                )) : <p>Loading...</p>}
            </ul>
        </div>
    )
}

export default PokemonList