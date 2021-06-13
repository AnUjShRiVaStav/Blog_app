import GoogleLogin from "react-google-login";
import { useSelector, useDispatch} from "react-redux";
import { selectSignedIn, setUserData, setSignedIn} from '../features/userSlice';

function Home(){

    const dispatch = useDispatch();
    const login = (res) => {
    dispatch(setSignedIn(true));
    dispatch(setUserData(res.profileObj));

    };

  const isSignedIn = useSelector(selectSignedIn);
  
 


    

    return(
        <div className= 'home' style = { {display:isSignedIn ? 'none' : ''}} >

         {!isSignedIn && <div className= 'login'>
            <h2>📚</h2>
            <h1>Welcome to a BlogMania</h1>
            <p>
              We provide high quality online resource for reading blogs.
              First, take a look at these encyclopedic catalogs of blogs.
             You'll be able to browse or search by topic, so you'll find the content and bloggers you're looking for.
          </p>
          <GoogleLogin 
              clientId = '341894882955-gl7v0dge44osldnnumt5t6s191umrua0.apps.googleusercontent.com'
              render = {(renderProps) => (
                  <button
                  onClick= {renderProps.onClick}
                  disabled= {renderProps.disabled}
                  className= 'login_button' >
                      Login with Google
                  </button>  
         )}
         onSuccess = {login}
         onFailure = {' '}
         isSignedIn = {true}
        //  cookiePolicy = {'single_host_origine'}
          />
        </div> 
        
         }
        </div>
    );
}

export default Home;
