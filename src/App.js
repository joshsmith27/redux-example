import React, { Component } from 'react'
import Counter from './components/counter/counter'
import Todo from './components/todo/todo'
import NameUpdate from './components/name_update/name_update'

export default class App extends Component {
  render() {
    return (
      <div>
        <Counter/>
        <NameUpdate/>
        <Todo />
      </div>
    )
  }
}
