class Team {
  constructor(teamname, trainer, roster) {
    this.teamname = teamname;
    this.trainer = trainer;
    this.roster = roster || [];
  }

  describe() {
    let text = `Trainer "${this.trainer}" has added ${this.teamname} to his roster.`;

    if (this.roster.length > 0) {
      const pokemonNames = [...this.roster].map((pokemon) => pokemon.name);
      text += ` The Pokémon in your roster are: ${pokemonNames.join(", ")}.`;
    } else {
      text += " There are currently no Pokémon in your roster.";
    }

    return text;
  }
}

export default Team;
