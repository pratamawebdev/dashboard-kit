import AuthLayout from "../../components/blueprints/auth/AuthLayout";
import FormLogin from "../../components/structures/auth/FormLogin";

const Login = () => {
  return (
    <AuthLayout title={"Login"} type={"login"}>
      <FormLogin />
    </AuthLayout>
  );
};

export default Login;
