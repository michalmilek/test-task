import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetUserAuto, useGetUserRepos } from "../../services/userServices";
import UserInfo from "./user-info/user-info";
import Chart from "./user-info/chart";
import Example from "./user-info/chart";

const ResumeComponent = () => {
  const { username } = useParams();
  const { data: user } = useGetUserAuto(username);
  const { data: repos } = useGetUserRepos(username);

  if (user && repos) {
    return (
      <div>
        <UserInfo
          repos={repos}
          user={user}
        />
      </div>
    );
  }

  return null;
};

export default ResumeComponent;
