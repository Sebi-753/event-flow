import { createProdfileAction } from "@/lib/actions";

function LoginForm() {
  return (
    <form action={createProdfileAction} className="flex flex-col gap-3">
      <input name="email" placeholder="example@gmail.com" />
      <input name="password" placeholder="Enter Password" />
      <button className="bg-red-500">LogIn</button>
    </form>
  );
}

export default LoginForm;
