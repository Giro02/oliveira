// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Menu from '../components/menu'



// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Menu/>
      <Link to="/about">about</Link>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home</title>

// Step 3: Export your component
export default IndexPage
