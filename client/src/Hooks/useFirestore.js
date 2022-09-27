import {
  getDocs,
  addDoc,
  collection,
  doc,
  setDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

import { useContext } from "react";
import { FirestoreContext } from "../Providers/FirestoreProvider";
import { auth, db } from "./firebase";
const useFirestore = () => {
  const {
    storeQuestion,
    setStoreQuestion,
    editCode,
    notesQuery,
    setNotesQuery,
  } = useContext(FirestoreContext);
  const addNotesData = async (data) => {
    await addDoc(collection(db, "users", auth.currentUser?.uid, "questions"), {
      group: data.body?.group,
      url: data.body?.url,
      name: data.body?.name,
      code: data?.code,
      tags: data?.tags,

      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
  };

  const editNotesData = async (data) => {
    const docRef = doc(
      db,
      "users",
      auth.currentUser?.uid,
      "questions",
      data.id
    );

    const realData = {
      code: editCode,
      name: data.name,
      group: data.group,
      url: data.url,
      tags: data.tags,
    };

    setDoc(docRef, realData)
      .then((docRef) => {
        console.log("Entire Document has been updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getQueryData = async (input) => {
    const q = query(
      collection(db, "users", auth.currentUser?.uid, "questions"),
      where("name", ">=", input)
    );
    const querySnapshot = await getDocs(q);
    const favList = [];
    querySnapshot.forEach((doc) => {
      favList.push({ ...doc.data(), id: doc.id });
    });
    setNotesQuery(favList);
  };

  const getNotesData = async () => {
    const querySnapshot = await getDocs(
      collection(db, "users", auth.currentUser?.uid, "questions")
    );
    const favList = [];
    querySnapshot?.forEach((doc) => {
      favList.push({ ...doc.data(), id: doc.id });
    });
    setStoreQuestion(favList);
  };
  // if (storeQuestion !== []) {
  //   console.log(`storeQuestion:${storeQuestion}`);
  // }

  const removeNotesData = async (name) => {
    try {
      await deleteDoc(
        doc(db, "users", auth.currentUser?.uid, "questions", name)
      );
      console.log(`delted succesfully${name}`);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    addNotesData,
    getNotesData,
    removeNotesData,
    setStoreQuestion,
    storeQuestion,
    editNotesData,
    getQueryData,
  };
};

export default useFirestore;
