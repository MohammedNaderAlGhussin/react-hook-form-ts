import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };
  return (
    <div className="flex flex-col gap-y-6 mt-[150px]">
      <div className="font-bold text-[20px] text-center">REACT_HOOK_FORM </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4 w-[350px] sm:w-[600px] bg-[#242424] py-10 px-5 rounded-lg shadow-xl"
      >
        <input
          {...register("email", {
            required: "Email is required",
          })}
          type="email"
          className="input "
          placeholder="Email..."
          name="email"
        />
        {errors.email && (
          <p className="text-red-500">{`${errors.email.message}`}</p>
        )}
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 10,
              message: "Password must be at leash 10 character",
            },
          })}
          type="password"
          className="input"
          placeholder="Password..."
        />
        {errors.password && (
          <p className="text-red-500">{`${errors.password.message}`}</p>
        )}
        <input
          {...register("confirmpassword", {
            required: "Confirmpassword is required",
            validate: (value) =>
              value === getValues("password") || "Password must match",
          })}
          type="password"
          className="input"
          placeholder="Confirm password..."
        />
        {errors.confirmpassword && (
          <p className="text-red-500">{`${errors.confirmpassword.message}`}</p>
        )}
        <button type="submit" disabled={isSubmitting} className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
