import dayjs from 'dayjs';
import { useState } from 'react';
import {Chatbot} from 'supersimpledev';
import LoadingGif from '../assets/loading-spinner.gif';
export  function ChatInput({chatMessages, setChatMessages}){
    const [inputText, setInputText] =  useState('');
    
    function saveInputText(event){
        setInputText(event.target.value);
    }
    async function SendMessage(){

        

        setInputText('');
        const newChatMessages = [...chatMessages, 
            {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
        time:dayjs().valueOf()
    }
        ];
            setChatMessages([
            ...newChatMessages,
        {
            message: <img src={LoadingGif} className="loading-gif" />,
            sender: 'robot',
            id: crypto.randomUUID(),
            time:dayjs().valueOf()
        }
    ]);  

        const response =  await Chatbot.getResponseAsync(inputText);
            setChatMessages([...newChatMessages, 
            {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID(),
        time:dayjs().valueOf()
    }
        ]);  

        

    }
    return(
        <div className="css-input-container">
        <input placeholder="Type your message..." 
        className="css-input"
        size="60" 
        onChange={saveInputText}
        value={inputText}
        onKeyDown={(event) => {
            if(event.key === 'Enter'){
                SendMessage();
            }
            else if(event.key === 'Escape'){
                setInputText('');
            }
        }}
        />
        <button
            onClick={SendMessage}
            className="css-send-button"
        >Send</button>
        <button
            onClick={() => localStorage.removeItem('chatMessages') || setChatMessages([])}
            className="css-clear-button"
        >Clear</button>
        </div>
    );
}