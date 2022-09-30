import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from './components/Button'
import Cesar from './components/Cesar'
import Viggener from './components/Viggener'

function App() {
  const [encryptionType, setEncryptionType] = useState(true)
  // console.log(encryptionType);

  return (
    <div className="min-h-screen bg-neutral-800">
      <header className="App-header">
        <h1 className='text-white p-2 text-center text-3xl font-bold'>Cifrado</h1>
      </header>
      <main className="min-h-screen flex flex-col items-center flex-1 text-center">
        {encryptionType 
        ? <Cesar />
        : <Viggener />
        }
        <div className='flex p-4'>
          <Button onclick={() => setEncryptionType(true)}>Cesar</Button>
          <Button onclick={() => setEncryptionType(false)} >Viggener</Button>
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={reactLogo} className="h-8 mr-3" alt="React Logo" />
          <p className="text-white">
            Powered by{' '}
            <span className="font-semibold">Astudillo Perez Edwin Uriel</span>
          </p>
        </a>
      </footer>

    </div>
  )
}

export default App
