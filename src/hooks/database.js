import { useReducer, useEffect, useState } from "react"
import { firestoreDatabase } from "../firebase/config"
import { collection, addDoc, deleteDoc, doc, Timestamp } from "firebase/firestore";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { isPending: true, document: null, success: false, error: null };
    case 'ADDED_DOCUMENT':
      return { isPending: false, document: action.payload, success: true, error: null };
    case 'DELETED_DOCUMENT':
      return { isPending: false, document: null, success: true, error: null };
    case 'ERROR':
      return { isPending: false, document: null, success: false, error: action.payload };
    default:
      return state;
  }
}

export const useFirestore = (collectionName) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  // collection ref
  const ref = collection(firestoreDatabase, collectionName);

  // only dispatch if not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action)
    }
  }

  // add document
  const addDocument = async (doc) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      const createdAt = Timestamp.fromDate(new Date());
      const addedDocument = await addDoc(ref, { ...doc, createdAt });  
      dispatchIfNotCancelled({ type: "ADDED_DOCUMENT", payload: addedDocument })
    } catch (error) {
      console.error(error.message);
      dispatchIfNotCancelled({ type: 'ERROR', payload: 'could not add' });
    }
  };

  // delete document
  const deleteDocument = async (id) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      await deleteDoc(doc(ref, id));
      dispatchIfNotCancelled({ type: 'DELETED_DOCUMENT' });
    } catch (error) {
      console.error(error.message);
      dispatchIfNotCancelled({ type: 'ERROR', payload: 'could not delete' });
    }
  };

  useEffect(() => {
    setIsCancelled(false);  
    return () => setIsCancelled(true);
  }, []);

  return { response, addDocument, deleteDocument };
}