import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // login with email and password 
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
          
    }

    // update profile 
    const userUpdate = (name, photoURL) => {
        setLoading(true);
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
            .then((result) => {
                const user = result?.user;
                setUser(user);
            })
            .catch((error) => console.error('error', error));
    }

    // signup google
    const signInGoogle = () => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                setUser(user);
            })
            .catch((error) => {
                console.error('error', error)
            });
    }

    // logOut

    const logOut = () => {
        localStorage.removeItem('genius-token')
        signOut(auth)
            .then(() => {

            })
            .catch(error => console.error(error))
    }

    useEffect(() => {
        const unsubsrcibe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubsrcibe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        userLogin,
        signInGoogle,
        logOut,
        userUpdate,
        setUser,
         setLoading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;