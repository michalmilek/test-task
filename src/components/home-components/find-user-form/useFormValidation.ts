import * as yup from "yup";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export const useFormValidation = () => {
  const { t } = useTranslation();

  const schema = useMemo(
    () =>
      yup.object().shape({
        username: yup.string().required(t("formFields.usernameRequiredError")),
      }),
    [t]
  );

  return { schema };
};
