import {Header} from '../components/Header'; 
import './404page.css';
export function Page404(){
    return(
        <>
        <title>404 Not Found</title>
        <Header />
         <link rel="icon" type="image/svg+xml" href="images/home-favicon.png" />
         <div className="not-found-message">
        Page not found
      </div>
        </>
       
    );
}