import { RowData, createColumnHelper } from "@tanstack/react-table";
import i18next from "i18next";
import { Icon, Tooltip } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { StarIcon, InfoIcon, SunIcon } from "@chakra-ui/icons";

import { useMemo } from "react";
import { RepositoryInfoResponse } from "src/utils/types";
import Link from "src/components/ui/link";

declare module "@tanstack/table-core" {
  interface ColumnMeta<TData extends RowData, TValue> {
    isNumeric: boolean;
  }
}

const columnHelper = createColumnHelper<RepositoryInfoResponse>();

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(i18next.language);
};

export const useTableCreation = () => {
  const { t } = useTranslation();

  const columns = useMemo(
    () => [
      columnHelper.accessor("name", {
        header: t("table.name"),
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("description", {
        header: t("table.description"),
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("language", {
        header: t("table.language"),
        cell: (info) =>
          info.getValue() ? info.getValue() : t("error.unrecognized"),
      }),
      columnHelper.accessor("created_at", {
        header: t("table.created_At"),
        cell: (info) => formatDate(info.getValue()),
      }),
      columnHelper.accessor("updated_at", {
        header: t("table.updated_At"),
        cell: (info) => formatDate(info.getValue()),
      }),
      columnHelper.accessor("stargazers_count", {
        header: () => (
          <Tooltip
            as={"span"}
            label={t("table.stargazersCount")}>
            <Icon
              ml={3}
              w={"full"}
              as={StarIcon}
            />
          </Tooltip>
        ),
        cell: (info) => info.getValue(),
        meta: {
          isNumeric: true,
        },
      }),
      columnHelper.accessor("watchers_count", {
        header: () => (
          <Tooltip
            as={"span"}
            label={t("table.watchersCount")}>
            <Icon
              ml={3}
              w={"full"}
              as={SunIcon}
            />
          </Tooltip>
        ),
        cell: (info) => info.getValue(),
        meta: {
          isNumeric: true,
        },
      }),
      columnHelper.accessor("open_issues_count", {
        header: () => (
          <Tooltip
            as={"span"}
            label={t("table.openIssuesCount")}>
            <Icon
              ml={3}
              w={"full"}
              as={InfoIcon}
            />
          </Tooltip>
        ),
        cell: (info) => info.getValue(),
        meta: {
          isNumeric: true,
        },
      }),
      columnHelper.accessor("html_url", {
        header: t("table.htmlURL"),
        cell: (info) => <Link to={info.getValue()}>{t("table.visit")}</Link>,
      }),
      columnHelper.accessor("clone_url", {
        header: t("table.cloneURL"),
        cell: (info) => <Link to={info.getValue()}>{t("table.clone")}</Link>,
      }),
    ],
    [t]
  );

  return { columns };
};
