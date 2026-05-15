import dayjs from 'dayjs'; 
import RobotImage from '../assets/robot.png';
import UserImage from '../assets/user.png';
 
 export function ChatMessage({message, sender, time}){
       
            // const message = props.message; 
            // const sender = props.sender;

           /* if(sender === "robot"){
                return(
                    <div>
                        <img src="robot.png" width="50" />
                        {message}
                        </div>
                )
            }*/
            return (
            <div className={sender==='user' ? 'css-user-message' : 'css-robot-message'}>
                {sender==='robot' && <img src={RobotImage}
                 className="css-message-icon"></img>}
            <div className="chat-message-text">
             {message}
              <div className="chat-message-time">
                {dayjs(time).format('h:mm A')}
            </div>
            </div>
           
            { sender==='user' && <img src={UserImage} className="css-message-icon"></img> }
            </div>
            );
        }