export default class {
  constructor (name, id) {
    this.playerName = name
    this.id = id
    this.answers = []
    this.points = 0
  }

  addAnswer (answer) {
    this.answers.push(answer)
    this.points = this.calculatePointTotal()
  }

  removeAnswer (answer) {
    if (typeof answer === 'number') {
      let id = answer
      let tgt = this.answers.findIndex(answer => answer.id === id)
      this.answers.splice(tgt, 1)
      this.points = this.calculatePointTotal()
    }
  }

  calculatePointTotal () {
    return this.answers.reduce((carry, answer) => carry + answer.points)
  }

}
