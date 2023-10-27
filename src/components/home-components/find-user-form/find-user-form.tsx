import { useForm, Controller } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../ui/button";
import Input from "../../ui/input";
import { useGetUserManual } from "../../../services/userServices";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface FormInterface {
  username: string;
}

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
});

const FindUserForm = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormInterface>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
    },
  });

  const { isFetching, error, refetch } = useGetUserManual(watch("username"));
  const toast = useToast();

  const onSubmit = () => {
    refetch().then(({ data }) => {
      if (data) {
        const previousSearchArray = JSON.parse(
          localStorage.getItem("previousSearchArray") || "[]"
        );

        if (previousSearchArray.length >= 5) {
          previousSearchArray.shift();
        }

        if (!previousSearchArray.includes(data.login)) {
          previousSearchArray.push(data.login);
        }

        localStorage.setItem(
          "previousSearchArray",
          JSON.stringify(previousSearchArray)
        );

        return navigate(`/resume/${data.login}`);
      }
    });
  };

  useEffect(() => {
    if (error?.response?.status === 404) {
      toast({
        title: "Generation not completed",
        description: "The user with the specified username does not exist.",
        status: "error",
        duration: 6000,
        isClosable: true,
      });
    }
  }, [error?.response?.status, toast]);

  return (
    <form
      className="mt-10"
      role="search"
      onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.username}>
        <FormLabel
          fontSize={{ base: "md", md: "xl" }}
          htmlFor="username">
          Username
        </FormLabel>
        <Controller
          name="username"
          control={control}
          rules={{ required: "Username is required" }}
          render={({ field }) => (
            <Input
              id="username"
              placeholder="Enter username"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              aria-label="Search for a user"
              aria-invalid={!!errors.username}
              aria-describedby="username-error"
              fontSize={{ base: "md", md: "xl" }}
            />
          )}
        />
        <FormErrorMessage
          fontSize={{ base: "md", md: "lg" }}
          id="username-error">
          {errors.username && errors.username.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        width={"full"}
        fontSize={{ base: "lg", md: "xl" }}
        mt={4}
        isLoading={isSubmitting || isFetching}
        type="submit">
        Generate
      </Button>
    </form>
  );
};

export default FindUserForm;
