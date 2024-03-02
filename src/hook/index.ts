import { sendMailSchema } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
type TEmail = z.infer<typeof sendMailSchema>;
export const useSendMail = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TEmail>({ resolver: zodResolver(sendMailSchema) });
  const onSubmit: SubmitHandler<TEmail> = (data) => {
    console.log(data.email)
  };
  return { register, errors, handleSubmit, onSubmit };
};
