import dayjs from 'dayjs';
import { useState , useEffect} from 'react'
import {Chatbot} from 'supersimpledev';
import { ChatInput } from './components/ChatInput'  ;
import { ChatMessages } from './components/ChatMessages';
import './App.css'

function App(){
    //lifted this state up
      const [chatMessages, setChatMessages]  =  useState(() => {
        const stored = localStorage.getItem('chatMessages');
        return stored ? JSON.parse(stored) : [{
          'message': 'Hello! I am a chatbot. How can I assist you today?',
          'sender': 'robot',
          'id': crypto.randomUUID(),
          'time': dayjs().valueOf()
        }];
      });
  
      useEffect(() => {
        Chatbot.addResponses({
          'goodbye':'Goodbye! Have a great day!',
        })
      },[]
    );
    useEffect(() =>{
      localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
    },[chatMessages]);
    return(
    
      
    <div className="css-app-container">
          {chatMessages.length === 0 && (
      <p className="welcome-message">
        Welcome to the chatbot project! Send a message using the textbox below.
      </p>
    )}
        
<ChatMessages 
chatMessages={chatMessages}
/>
  <ChatInput 
chatMessages={chatMessages}
setChatMessages={setChatMessages}
/>
</div>
    );
}
       

export default App
