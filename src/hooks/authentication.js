import { useState } from "react"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { firebaseAuth } from "../firebase/config"

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(null);

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      // signup user
      const res = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      console.log(res.user);
      
      if (!res) {
        throw new Error('Could not complete signup');
      }

      // update user profile
      await updateProfile(res.user, { displayName });

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