export default class {
  constructor (id, categoryId, content) {
    this.id = id
    this.categoryId = categoryId
    this.content = content
    this.players = []
    this.points = 0
  }

  addPlayer (player) {
    this.players.push(player)
    this.points = this.calculatePointTotal()
  }

  removePlayer (removedPlayer) {
    let id = null
    if (typeof removedPlayer === 'number') {
      id = removedPlayer
    } else {
      id = removedPlayer.id
    }
    let tgt = this.players.findIndex(player => player.id === id)
    this.players.splice(tgt, 1)
    this.calculatePointTotal()
  }

  calculatePointTotal () {
    this.points = this.players.length
  }

}
