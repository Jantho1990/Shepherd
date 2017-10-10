export default class {
  constructor (content) {
    this.content = content
    this.players = []
    this.points = 0
  }

  get points () {
    return this.calculatePointTotal()
  }

  set points (val) {
    this.points = val
  }

  addPlayer (player) {
    this.players.push(player)
  }

  removePlayer (player) {
    if (typeof player === 'number') {
      let id = player
      let tgt = this.players.findIndex(player => player.id === id)
      this.players.splice(tgt, 1)
    }
  }

  calculatePointTotal () {
    this.points = this.players.length
  }

}
