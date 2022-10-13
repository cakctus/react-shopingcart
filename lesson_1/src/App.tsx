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

type TitleProps = {
  title: string
  text?: string
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return <h1>{title} Component</h1>
}

function App() {
  return (
    <>
      <div>
        <List />
        <Title title={"title"} />
        <h1>App Component</h1>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </>
  )
}

export default App
