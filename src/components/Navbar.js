import { Avatar } from "@material-ui/core";
import { useState } from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { selectSignedIn, selectUserData, setSearchInput, setSignedIn, setUserData } from "../features/userSlice";

function Navbar() {
    const [inputValue, setInputValue] = useState('India');
    const isSignedIn = useSelector(selectSignedIn)
    const userData = useSelector(selectUserData)

  const dispatch = useDispatch();
  const logout = (res) => {
      dispatch(setSignedIn(false));
      dispatch(setUserData(null));
  }
   const handleClick = (e) =>{
    //    console.log(e);
//    e.preventDefault();
   dispatch(setSearchInput(inputValue))
   };


    return(
        <div className='navbar'>
        <h1 className='nav_header'>BlogMania💬</h1>
        {isSignedIn && 
        (
            <div className='blog_search'>
            <input 
                placeholder='Search for a blog'
                value = {inputValue}
                onChange = { (e)=> setInputValue(e.target.value)}
            />

             <button className = 'submit' 
            onClick = {handleClick}>
                Search
            </button>
          </div>
      )}
         
         {isSignedIn ? ( <div className = 'nav_user_data'>
             <Avatar className = 'avatar'
             src= {userData?.imageUrl} alt = {userData?.name}
              />
              <h1 className='signedIn'>{userData?.givenName}</h1>
              <GoogleLogout
              clientId = '341894882955-gl7v0dge44osldnnumt5t6s191umrua0.apps.googleusercontent.com'
              render = {(renderProps) => (
                  <button
                  onClick= {renderProps.onClick}
                  disabled= {renderProps.disabled}
                  className= 'logout_button'
                   >
                      Logout
                  </button>  
              )}
              buttonText='Logout'
              onLogoutSuccess={logout}
               />
         </div>
        ) : (
           
            <h1 className = 'notSignedIn'>User not available</h1>
        )}
        </div>
    );
}

export default Navbar;

