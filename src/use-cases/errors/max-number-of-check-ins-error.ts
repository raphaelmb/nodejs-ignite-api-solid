export class MaxNumberOfCheckInsError extends Error {
  constructor() {
    super('Max number of daily check ins reached')
  }
}
