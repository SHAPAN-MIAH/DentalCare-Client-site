import InitFirebase from './../components/Login/Firebase/FirebaseInit';
import { useState, useEffect } from 'react';
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , signInWithPopup, onAuthStateChanged , GoogleAuthProvider, updateProfile, signOut } from "firebase/auth";


// firebase init app
InitFirebase();

const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState('')

  const auth = getAuth();
  const GoogleProvider = new GoogleAuthProvider()

  // register
  const registerUser = (email, password, name, location, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setAuthError('')
      const newUser = {email, displayName: name};
      setUser(newUser);

      // send name after creation
      updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
      
      const destination = location?.state?.from || '/';
      history.replace(destination)
      
    })
    .catch((error) => {
      const errorMessage = error.message;
      setAuthError(errorMessage)
      // ..
    })
    .finally(() => setLoading(false));
  }

  // login
  const loginUser = (email, password, location, history) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const destination = location?.state?.from || '/';
      history.replace(destination)
      setAuthError('')
    })
    .catch((error) => {
      const errorMessage = error.message;
      setAuthError(errorMessage)
    })
    .finally(() => setLoading(false));
  }

  // google sign in method
  const googleSignIn = (location, history) => {
    setLoading(true);
    signInWithPopup(auth, GoogleProvider) 
    .then((result) => {
      const user = result.user
      const destination = location?.state?.from || '/';
      history.replace(destination)
      setAuthError('')
    })
    .catch((error) => {
      const errorMessage = error.message;
      setAuthError(errorMessage)
    })
    .finally(() => setLoading(false));
  }
  
  // logout 
  const logOut = () => {
    setLoading(true);
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
    .finally(() => setLoading(false));
  }

  // observe user state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setLoading(false);
    });
    return () => unSubscribe;
  }, [])


  return {
    user,
    loading,
    registerUser,
    loginUser,
    googleSignIn,
    logOut,
    authError
  }
};

export default UseFirebase;