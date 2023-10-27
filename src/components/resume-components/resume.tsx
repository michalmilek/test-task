import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetUserAuto, useGetUserRepos } from "../../services/userServices";
import UserInfo from "./user-info/user-info";

interface Repository {
  size: number;
  language: string;
}

const ResumeComponent = () => {
  const { username } = useParams();
  console.log("🚀 ~ username:", username);
  const { data: user } = useGetUserAuto(username);
  const { data: repos } = useGetUserRepos(username);
  console.log("🚀 ~ repos:", repos);
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
