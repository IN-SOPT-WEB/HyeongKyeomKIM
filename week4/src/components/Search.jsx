import styled from "styled-components";
import UserInfo from "./UserInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../api/axios";

function Search() {
  const navigate = useNavigate();
  const [isSearch, setIsSearch] = useState(false);
  const [userInfo, setUserInfo] = useState();

  const searchHanlder = async (e) => {
    if (e.key === "Enter") {
      const userData = await getUserInfo(e.target.value);
      navigate(`/search/${e.target.value}`);
      setIsSearch(true);
      setUserInfo({
        ...userData,
        login: userData.login,
        name: userData.username,
        avatar_url: userData.avatar_url,
        followers: userData.followers,
        following: userData.following,
        public_repos: userData.public_repos,
        html_url: userData.html_url,
      });
    }
  };

  return (
    <StSearchWrapper>
      <StSearchTitle>GitHub Searcher</StSearchTitle>
      <StSearchInput
        onKeyDown={searchHanlder}
        isSearch={isSearch}
        placeholder="Search User..."
      />
      {isSearch && <UserInfo userInfo={userInfo} />}
    </StSearchWrapper>
  );
}

export default Search;

const StSearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StSearchTitle = styled.h1`
  font-weight: 600;
  font-size: 4.3rem;

  margin-top: 4rem;
  margin-bottom: 2.5rem;
`;

const StSearchInput = styled.input`
  width: 40rem;

  margin-bottom: 4rem;
  padding: 1rem;

  background-color: #0d1117;

  border: none;
  border-bottom: 0.2rem solid #c9d1d9;

  font-weight: 600;
  font-size: 2.5rem;

  color: #c9d1d9;

  &::placeholder {
    text-align: center;

    color: #8b949e;
  }
`;
