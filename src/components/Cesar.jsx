import { useState } from "react";
import Button from "./Button";
import cesar from "../utils/cesar";

const data = {
    textToEncrypt: "",
    desplazamiento: 0,
    encryptedText: "",
    decryptedText: "",
};

export default function Cesar() {

    const [text, setText] = useState('');
    const [displacemennt, setDisplacemennt] = useState(0);
    const [encryptedText, setEncryptedText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');
    
    const handleChange = (e) => {
        setText(e.target.value);
    }
    
    const handleDisplacemennt = (e) => {
        setDisplacemennt(e.target.value);
    }

    const handleClick = () => {
        const encrypted = cesar.encode(text, Number(displacemennt));
        setEncryptedText(encrypted);
        setDecryptedText(cesar.decode(encrypted, Number(displacemennt)));
    }

    return (
        <div className=" p-4 ">
            <h2 className="text-white text-xl">Cesar</h2>
            
            <div className="p-4 grid grid-cols-2 gap-4 justify-center items-center">

                <label htmlFor="desplazamiento" className="text-white">Ingresa el desplazamiento
                </label>
                <input type="number" name="desplazamiento" id="desplazamiento" className="border-2 border-white rounded-md p-2" onChange={handleDisplacemennt} value={displacemennt} />

                <label htmlFor="textToEncrypt" className="text-white">Ingresa el texto a cifrar</label>
                <textarea value={text} onChange={handleChange} name="textToEncrypt" />

            </div>

            <Button 
            onclick={handleClick}
            bg="bg-sky-600"
            hoverBg="hover:bg-sky-400"
            borderColor="border-sky-500"
            hoverBorderColor="hover:border-sky-600"

            >
                Cifrar
            </Button>

            <div className="mt-5 max-w-xl break-before-all">
                <p className="text-white">Texto cifrado: {encryptedText}
                </p>
                <p className="text-white">Texto descifrado: {decryptedText}</p>
            </div>
        </div>
    )
}