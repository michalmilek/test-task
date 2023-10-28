import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "src/hooks/useBreadcrumbs";

const Breadcrumbs = () => {
  const { previousTitle, title } = useBreadcrumbs();
  return (
    <Breadcrumb fontSize={{ base: "xs", sm: "sm", md: "lg" }}>
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
