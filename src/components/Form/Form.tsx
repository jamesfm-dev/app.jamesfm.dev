import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import FormSubmit from "./FormSubmit";

export default function Form() {
  return (
    <form className="max-w-xs mx-auto my-16 p-4 rounded-lg shadow-lg bg-white">
      <div className="ml-1 mb-4">
        <FormHeader
          headline="Master account login"
          subheadline={
            <>
              To use demo account, fill user/pass with &#34;
              <span className="font-bold">demo</span>&#34;.
            </>
          }
        />
      </div>
      <div className="grid grid-cols-1 gap-2">
        <FormInput type="text" isRequired placeholder="Username" />
        <FormInput type="password" isRequired placeholder="Password" />
      </div>
      <FormSubmit />
    </form>
  );
}
