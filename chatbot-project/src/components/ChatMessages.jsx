import { useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';

  export  function ChatMessages({chatMessages}){
        

        
        // const [chatMessages, setChatMessages] = array;

        // const chatMessages = array[0];
        // const setChatMessages = array[1];
            const chatMessageref = useAutoScroll(chatMessages);
        
        return(
        <div className="css-chat-messages-container"
        ref={chatMessageref}>
        
        {chatMessages.map((chatMessage) => {
            return (
                
            <ChatMessage 
            message={chatMessage.message} sender={chatMessage.sender}
            time={chatMessage.time}
            key={chatMessage.id} />
            
            );
        })}
        
    </div>
);
    }

     function useAutoScroll(value){
                 const containerref = useRef(null);
            useEffect(() => {
                const containerElem = containerref.current;
                if(containerElem){
                    containerElem.scrollTop = containerElem.scrollHeight;   
                }
            }, [value]);
    
            return containerref;
            }
           