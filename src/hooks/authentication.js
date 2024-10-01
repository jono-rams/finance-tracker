import { useState } from "react"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { firebaseAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      // signup user
      const res = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      
      if (!res) {
        throw new Error('Could not complete signup');
      }

      // update user profile
      await updateProfile(res.user, { displayName });

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user });

      setIsPending(false);
      setError(null);

    } catch (error) {
      console.error(error.message);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup }
}