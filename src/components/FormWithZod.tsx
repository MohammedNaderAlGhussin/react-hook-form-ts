import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TSignUpSchema, signUpShcema } from "../types/types";

const FormWithZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpShcema),
  });

  const onSubmit = async (data: TSignUpSchema) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };
  return (
    <div className="flex flex-col gap-y-6 mt-[150px]">
      <div className="font-bold text-[20px] text-center">
        REACT_HOOK_FORM_ZOD{" "}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4 w-[350px] sm:w-[600px] bg-[#242424] py-10 px-5 rounded-lg shadow-xl"
      >
        <input
          {...register("email")}
          type="email"
          className="input "
          placeholder="Email..."
          name="email"
        />
        {errors.email && (
          <p className="text-red-500">{`${errors.email.message}`}</p>
        )}
        <input
          {...register("password")}
          type="password"
          className="input"
          placeholder="Password..."
        />
        {errors.password && (
          <p className="text-red-500">{`${errors.password.message}`}</p>
        )}
        <input
          {...register("confirmPassword")}
          type="password"
          className="input"
          placeholder="Confirm password..."
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
        )}
        <button type="submit" disabled={isSubmitting} className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormWithZod;
