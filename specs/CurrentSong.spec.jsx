import React from 'react'
import MyComponent from '../components/MyComponent'

const LOREM = 'Test lorem'

describe('MyComponent', function () {
  let count = 0
  this.header(`## A Simple Component`); // Markdown.

  before(() => {
    // Runs when the Suite loads.
    // Use this to load your component-under-test.
    this.component(<MyComponent />)
  })

  it('reload', () => {
    count += 1
    this.component(<MyComponent color="red" text={`My Component ${ count }`} />)
  })

  section('text', () => {
    it('increment', () => {
      count += 1
      this.props({ text: `My Component ${ count }` })
    })
    it('long', () => {
      this.props({ text: LOREM })})
  })

  section('color', () => {
    it('red', () => this.props({ color: 'red' }))
    it('green', () => this.props({ color: 'green' }))
    it('blue', () => this.props({ color: 'blue' }))
    it('orange (error)', () => this.props({ color: 'orange' }))
  })
})
