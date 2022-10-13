import React from "react"

const List = () => {
  return (
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  )
}

const Title = () => {
  return (
    <div>
      <h1>Title Component</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <div>
        <List />
        <Title />
        <h1>App Component</h1>
      </div>
    </div>
  )
}

export default App
