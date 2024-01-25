class Team {
  constructor(teamname, trainer, roster) {
    // Assign the passed values to class properties using 'this'
    this.teamname = teamname;
    this.trainer = trainer;
    this.roster = roster || []; // Initialize roster as an empty array if not provided
  }

  describe() {
    // Use the class properties to generate the description
    let text = `Trainer "${this.trainer}" has added ${this.teamname} to his roster. There are now ${this.roster.length} Pokémon(s) in your roster.`;
    return text;
  }
}

export default Team;
