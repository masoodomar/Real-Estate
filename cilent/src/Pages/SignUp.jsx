import { Link } from "react-router-dom";

export default function SignUp() {
  return <div>
  <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>
<form className="flex flex-col gap-4 w-96 mx-auto">
<input type="text" placeholder="Username" className="border  p-3 rounded-lg bg-white" id ="username"  />
<input type="text" placeholder="Email" className="border  p-3 rounded-lg bg-white" id ="email" />
<input type="text" placeholder="Password" className="border  p-3 rounded-lg bg-white" id ="password" />

<button  className="bg-slate-700 text-white p-3 rounded-lg
 hover:bg-slate-800 disabled:bg-slate-500 transition-all duration-300 ">Sign Up</button>
</form>

<div>
  <p className="text-center mt-4">Already have an account?
   <Link to="/sign-in" className="text-slate-700 hover:underline">Sign In</Link></p>
</div>



  </div>;
}
//gap-4 w-96 mx-auto