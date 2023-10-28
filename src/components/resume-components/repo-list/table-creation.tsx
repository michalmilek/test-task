import { RowData, createColumnHelper } from "@tanstack/react-table";
import { RepositoryInfoResponse } from "../../../utils/types";
import i18next from "i18next";
import { Icon, Tooltip } from "@chakra-ui/react";
import { StarIcon, InfoIcon, SunIcon } from "@chakra-ui/icons";
import Link from "../../ui/link";

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

export const columns = [
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("description", {
    header: "Description",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("language", {
    header: "Language",
    cell: (info) => (info.getValue() ? info.getValue() : "Unrecognized"),
  }),
  columnHelper.accessor("created_at", {
    header: "Created At",
    cell: (info) => formatDate(info.getValue()),
  }),
  columnHelper.accessor("updated_at", {
    header: "Updated At",
    cell: (info) => formatDate(info.getValue()),
  }),
  columnHelper.accessor("stargazers_count", {
    header: () => (
      <Tooltip label="Stargazers Count">
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
      <Tooltip label="Watchers Count">
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
      <Tooltip label="Open Issues Count">
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
    header: "HTML URL",
    cell: (info) => <Link to={info.getValue()}>Visit</Link>,
  }),
  columnHelper.accessor("clone_url", {
    header: "Clone URL",
    cell: (info) => <Link to={info.getValue()}>Clone</Link>,
  }),
  columnHelper.accessor("commits_url", {
    header: "Commits URL ",
    cell: (info) => <Link to={info.getValue()}>Redirect to commits</Link>,
  }),
  columnHelper.accessor("branches_url", {
    header: "Branches URL ",
    cell: (info) => <Link to={info.getValue()}>Redirect to branches</Link>,
  }),
];
