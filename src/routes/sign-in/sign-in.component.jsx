import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../component/sign-up-form/sign-up-form.component";

export default function SignIn() {
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      console.log(user);
      const userDocRef = await createUserDocumentFromAuth(user);
      
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sigin in with Google</button>
      <SignUpForm />
    </div>
  );
}
