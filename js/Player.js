class Player {
  constructor(name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(21);
  }

  /**
     * Creates token objects for player
     * @param     {integer}    num - Number of token objects to be created
     * @returns   {array}     tokens - An array of the newly created token objects
     */
  createTokens(num) {
    const tokens = [];

    for (let i = 0; i < num; i++) {
      const token = new Token(i, this);
      tokens.push(token);
    }

    return tokens;
  }

  /**
     * Gets all the tokens that haven't been dropped.
     * @return {array} array of unused tokens.
     */
  get unusedTokens() {
    return this.tokens.filter(token => token.dropped === false);
  }

  /**
     * Gets the ctive token by returning the first token in the array of unused tokens.
     * @return {Object} first token object in the array of unused tokens.
     */
  get activeToken() {
    return this.unusedTokens[0];
  }
}
