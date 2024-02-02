// Team.js
class Team {
  constructor(teamname, trainer, roster) {
    this.teamname = teamname;
    this.trainer = trainer;
    this.roster = roster || [];
  }

  describe() {
    let text = `Team "${this.teamname}" with trainer ${this.trainer}.`;

    if (this.roster.length > 0) {
      const pokemonNames = [...this.roster].map((pokemon) => pokemon.name);
      text += ` The Pokémon in your roster are: ${pokemonNames.join(", ")}.`;
    } else {
      text += " There are currently no Pokémon in your roster.";
    }

    return text;
  }

  addPokemon(pokemon) {
    if (this.roster.length >= 6) {
      return "The roster is full!";
    }

    if (this.roster.some((p) => p.name === pokemon.name)) {
      return alert("This pokemon is already part of your roster!");
    }

    this.roster.push(pokemon);
    return alert(
      `The Pokémon ${pokemon.name} has been successfully added to the team!`
    );
  }
}

export default Team;
