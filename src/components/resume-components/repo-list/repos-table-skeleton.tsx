import { Skeleton } from "@chakra-ui/react";

const ReposTableSkeleton = () => {
  return (
    <Skeleton
      height="100%"
      width="100%"
      aria-label="Repositories table"
      aria-describedby="repositories-table-description"
      variant="striped"
      colorScheme="teal">
      <Skeleton height="50px" />
      <Skeleton height="50px" />
      <Skeleton height="50px" />
      <Skeleton height="50px" />
      <Skeleton height="50px" />
      <Skeleton height="50px" />
    </Skeleton>
  );
};

export default ReposTableSkeleton;
