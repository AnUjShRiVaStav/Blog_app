import { useSelector } from "react-redux";
import Blogs from "./components/Blogs";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { selectSignedIn } from "./features/userSlice";

function App(){

  const userSignIn = useSelector(selectSignedIn);

    return(
        <div className='app'>
        <Navbar />
            <Home />
            {userSignIn && <Blogs />}
        </div>
    );
}

export default App;