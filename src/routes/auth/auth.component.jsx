
import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
import SignInForm from "../../component/sign-in-form/sign-in-form.component";
import "./auth.styles.scss";
export default function Auth() {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
