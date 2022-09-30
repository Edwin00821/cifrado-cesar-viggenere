import { useState } from "react"
import Button from "./Button"
import viggener from "../utils/viggener"

export default function Viggener() {

    const [textToEncrypt, setTextToEncrypt] = useState('')
    const [key, setKey] = useState('')
    const [encryptedText, setEncryptedText] = useState('')
    const [decryptedText, setDecryptedText] = useState('')

    const handleChange = (e) => {
        setTextToEncrypt(e.target.value);
    }

    const handleKey = (e) => {
        setKey(e.target.value);
    }   

    const handleClick = () => {
        const encrypted = viggener(textToEncrypt, key, true);
        setEncryptedText(encrypted);
        setDecryptedText(viggener(encrypted, key, false));
    }


    return (
        <div className="p-4 ">
            <h2 className="text-white text-xl">Viggener</h2>
            <div className="p-4 grid grid-cols-2 gap-4 justify-center items-center">
            
                <label htmlFor="key" className="text-white">Ingresa la llave
                </label>
                <input type="text" name="key" id="desplazamiento" className="border-2 border-white rounded-md p-2" onChange={handleKey} value={key} />

                <label htmlFor="textToEncrypt" className="text-white">Ingresa el texto a cifrar</label>
                <textarea value={textToEncrypt} onChange={handleChange} name="textToEncrypt" />

            </div>

            <Button 
            onclick={handleClick}
            bg="bg-red-600"
            hoverBg="hover:bg-red-400"
            borderColor="border-red-500"
            hoverBorderColor="hover:border-red-600"

            >
                Cifrar
            </Button>
            
            <div className="mt-5 max-w-xl break-before-all">
                <p className="text-white">Texto cifrado: {encryptedText}</p>
                <p className="text-white">Texto descifrado: {decryptedText}</p>
            </div>

        </div>
    )
    
}