import { useState } from 'react'
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to app</h1>
      <SignedOut>
        <SignInButton mode='modal' />
      </SignedOut>

      <SignedIn>
        <SignOutButton />
        <UserButton />
      </SignedIn>
    </>
  )
}

export default App
