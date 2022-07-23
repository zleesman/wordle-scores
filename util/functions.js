import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";
export const updateUser = async (user) => {
  const docRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    await setDoc(
      docRef,
      { displayName: user.displayName, uid: user.uid },
      { merge: true }
    );
  }
  return docSnap.data();
};
