import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { useGetUserAuto, useGetUserRepos } from "src/services/userServices";
import UserInfo from "./user-info/user-info";
import RepoList from "./repo-list/repo-list";
import NotFoundModal from "./not-found-modal";

const ResumeComponent = () => {
  const { username } = useParams();
  const {
    data: user,
    isLoading: isLoadingUser,
    isError: isErrorUser,
    isSuccess: isSuccessUser,
    error,
  } = useGetUserAuto(username);
  const {
    data: repos,
    isLoading: isLoadingRepos,
    isError: isErrorRepos,
    isSuccess: isSuccessRepos,
  } = useGetUserRepos(username);

  const isLoadingForUserInfo = useMemo(
    () => isLoadingUser || isLoadingRepos,
    [isLoadingRepos, isLoadingUser]
  );

  const isErrorForUserInfo = useMemo(
    () => isErrorUser || isErrorRepos,
    [isErrorUser, isErrorRepos]
  );

  const isSuccessForUserInfo = useMemo(
    () => isSuccessUser && isSuccessRepos,
    [isSuccessUser, isSuccessRepos]
  );

  return (
    <main>
      <UserInfo
        repos={repos}
        user={user}
        isLoading={isLoadingForUserInfo}
        isError={isErrorForUserInfo}
        isSuccessForUserInfo={isSuccessForUserInfo}
      />
      <RepoList
        isLoading={isLoadingRepos}
        isError={isErrorRepos}
        isSuccess={isSuccessRepos}
        repos={repos}
      />

      <NotFoundModal
        errorStatus={error ? error.response?.status : null}
        isError={isErrorUser}
      />
    </main>
  );
};

export default ResumeComponent;
