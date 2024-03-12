import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, formState } = useForm();

  formState.errors ? console.log("coucou") : console.log("hello");
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <label htmlFor="username">Username :</label>
      <input
        {...(register("username"), { required: true, minLength: 3 })}
        id="username"
        type="text"
        autoComplete="username"
      />
      <label htmlFor="password">Password :</label>
      <input
        {...register("password", { required: true, minLength: 8 })}
        id="password"
        type="password"
        autoComplete="current-password"
      />
      <button type="submit">Submit</button>
      <div id="error-form"></div>
    </form>
  );
};

export default Form;
