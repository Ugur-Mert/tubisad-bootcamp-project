import { initializeApp } from "firebase/app";

import {
  getFirestore,
  addDoc,
  collection,
  onSnapshot,
  doc,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  updatePassword,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";

import toast from "react-hot-toast";

import store from "./store";
import { login as loginHandle, logout as logoutHandle } from "./store/auth";
import { setTodos } from "./store/todos";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();

export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    toast.success("Welcome!");
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};
export const logout = async () => {
  try {
    await signOut(auth);
    toast.success("Logged Out");
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

export const update = async (data) => {
  try {
    await updateProfile(auth.currentUser, data);
    toast.success("Profile updated");
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

export const resetPassword = async (password) => {
  try {
    await updatePassword(auth.currentUser, password);
    toast.success("Password updated");
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

export const resetEmail = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    toast.success("E-mail sent");
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

export const sendVerify = async () => {
  try {
    await sendEmailVerification(auth.currentUser);
    toast.success("Verify mail sent");
  } catch (error) {
    toast.error(error.message);
  }
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(
      loginHandle({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        emailVerified: user.emailVerified,
      })
    );
    // Listen to multiple documents in a collection
    // separate todo list
    onSnapshot(
      query(collection(db, "todos"), where("uid", "==", auth.currentUser.uid)),
      (doc) => {
        // store.dispatch(setTodos(doc.docs));
        store.dispatch(
          setTodos(
            doc.docs.reduce(
              (todos, todo) => [...todos, { ...todo.data(), id: todo.id }],
              []
            )
          )
        );
      }
    );
  } else {
    store.dispatch(logoutHandle());
  }
});

export const addTodo = async (data) => {
  try {
    const result = await addDoc(collection(db, "todos"), data);
    return result.id;
  } catch (error) {
    toast.error(error.message);
  }
};

export const deleteTodo = async (id) => {
  try {
    await deleteDoc(doc(db, "todos", id));
  } catch (error) {
    toast.error(error.message);
  }
};

export default app;
