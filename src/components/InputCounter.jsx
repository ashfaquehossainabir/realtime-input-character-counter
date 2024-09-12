import React, { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function InputCounter() {
    const [val, setVal] = useState('')
    const [word, setWord] = useState(0)

    const handleChange = (e) => {
        const data = e.target.value.split(' ')

        if(data.length <= 5) {
            setVal(e.target.value)
            setWord(data.length)

            if(e.target.value == '') {
                setWord(0)
            }
        } else {
            toast.error('You can type only 5 words', { theme: 'light' })
        }
    }

    return (
        <>
            <div className='container'>
                <h2>Real-time Input Counter</h2>
                <textarea className="textarea" placeholder="Please write your text here..." value={ val } onChange={ (e) => handleChange(e) }></textarea>

                <div className='counter-container'>
                    <p>
                        Letters Count: <span className='letter-counter'>{ val.length }</span>
                    </p>

                    <p>
                        Words Count: <span className='word-counter'>{ word }/5</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default InputCounter