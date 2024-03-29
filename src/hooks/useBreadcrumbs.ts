import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const useBreadcrumbs = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const parts = location.pathname.split("/").filter((part) => part !== "");
  const [title, setTitle] = useState("");
  const [previousTitle, setPreviousTitle] = useState("");

  const handleDynamicTitle = useCallback(
    (dynamicTitleValue: string) => {
      setTitle(dynamicTitleValue);
    },
    [setTitle]
  );

  useEffect(() => {
    if (parts.length === 0) {
      setPreviousTitle("");
      setTitle(t("breadcrumbs.home"));
    } else if (parts.length >= 2) {
      const newPreviousTitle =
        parts[parts.length - 2] === "" ? "" : parts[parts.length - 2] + "";
      const capitalizedPreviousTitle =
        newPreviousTitle.charAt(0).toUpperCase() + newPreviousTitle.slice(1);
      const newTitle = parts[parts.length - 1];

      setPreviousTitle(capitalizedPreviousTitle);
      setTitle(newTitle);
    } else {
      setTitle(parts[parts.length - 1]);
    }
  }, [location, parts, t]);

  return { previousTitle, title, handleDynamicTitle };
};

export default useBreadcrumbs;
