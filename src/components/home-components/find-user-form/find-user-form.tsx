import { useForm, Controller } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
  chakra,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Button from "src/components/ui/button";
import Input from "src/components/ui/input";
import { useGetUserManual } from "src/services/userServices";
import { useFormValidation } from "./useFormValidation";
import { routesOb } from "src/router/routes";

interface FormInterface {
  username: string;
}

const FindUserForm = () => {
  const { schema } = useFormValidation();
  const { t } = useTranslation();
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

        return navigate(routesOb.resumeToUse.path + "/" + data.login);
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
    <chakra.form
      mt={10}
      role="search"
      onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.username}>
        <FormLabel
          fontSize={{ base: "md", md: "xl" }}
          htmlFor="username">
          {t("formFields.usernameLabel")}
        </FormLabel>
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <Input
              id="username"
              placeholder={t("formFields.usernamePlaceholder")}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              aria-label={t("formFields.ariaLabel")}
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
        {t("formFields.searchButton")}
      </Button>
    </chakra.form>
  );
};

export default FindUserForm;
