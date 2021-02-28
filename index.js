import BaseModule from "./structures/BaseModule.js";

export default class Prefix extends BaseModule {
  /**
   * @param {Main} main
   */
  constructor(main) {
    super(main);

    this.register(Prefix, {
      name: "prefix",
    });
  }

  init() {
    this.modules.commandRegistrar.registerCommands('prefix', import.meta.url);

    return true;
  }
}
