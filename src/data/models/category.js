export default class {
  constructor (name) {
    this.categoryName = name
    this.answers = []
  }

  addAnswer (answer) {
    this.answers.push(answer)
  }

  removeAnswer (answer) {
    if (typeof answer === 'number') {
      let id = answer
      let tgt = this.answers.findIndex(answer => answer.id === id)
      this.answers.splice(tgt, 1)
    }
  }
}
