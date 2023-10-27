import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "../hooks/useBreadcrumbs";

const Breadcrumbs = () => {
  const { previousTitle, title } = useBreadcrumbs();
  return (
    <Breadcrumb fontSize={"lg"}>
      {previousTitle && (
        <BreadcrumbItem>
          <BreadcrumbLink
            as={Link}
            to="/">
            {previousTitle}
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>{title}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
