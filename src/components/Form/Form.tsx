import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import FormSubmit from "./FormSubmit";

export default function Form() {
  return (
    <form className="max-w-xs mx-auto p-4">
      <div className="ml-1 my-4">
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
        <FormInput type="text" label="Username:" isRequired />
        <FormInput type="password" label="Password:" isRequired />
      </div>
      <FormSubmit />
    </form>
  );
}
