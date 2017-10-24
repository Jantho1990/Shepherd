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
    console.log('points were', this.points)
    console.log('ah', this.players)
    this.points = this.calculatePointTotal()
    console.log('points are', this.points)
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
    return this.players.length !== 0 ? this.players.length - 1 : 0
  }

}
