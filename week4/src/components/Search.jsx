import styled from "styled-components";
import UserInfo from "./UserInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../api/axios";

function Search() {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);
  const [openHistory, setOpenHistory] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [userInfo, setUserInfo] = useState();

  const searchHanlder = async (e) => {
    if (e.key === "Enter") {
      const userData = await getUserInfo(e.target.value);
      navigate(`/search/${e.target.value}`);
      setIsSearch(true);
      setOpenHistory(false);
      setUserInfo({
        login: userData.login,
        name: userData.name,
        avatar_url: userData.avatar_url,
        followers: userData.followers,
        following: userData.following,
        public_repos: userData.public_repos,
        html_url: userData.html_url,
      });
      e.target.value = "";
    }
  };

  const historySearchHandler = async (e) => {
    const userData = await getUserInfo(e.target.innerText);
    navigate(`/search/${e.target.innerText}`);
    setIsSearch(true);
    setOpenHistory(false);
    setUserInfo({
      login: userData.login,
      name: userData.name,
      avatar_url: userData.avatar_url,
      followers: userData.followers,
      following: userData.following,
      public_repos: userData.public_repos,
      html_url: userData.html_url,
    });
  };

  const closeHandler = () => {
    navigate(`/search`);
    setIsSearch(false);
  };

  return (
    <StSearchWrapper>
      <StSearchTitle>GitHub Searcher</StSearchTitle>
      <StSearchInput
        onClick={() => setOpenHistory(true)}
        onKeyDown={searchHanlder}
        isSearch={isSearch}
        placeholder="Search User..."
      />
      {openHistory && (
        <StHistoryCard>
          <ol>
            <li>
              <span onClick={historySearchHandler}>Brokyeom</span>
              <button>❌</button>
            </li>
          </ol>
          <p onClick={() => setOpenHistory(false)}>Close History</p>
        </StHistoryCard>
      )}
      {isSearch && (
        <>
          <UserInfo userInfo={userInfo} />
          <StCloseBtn onClick={closeHandler}>❌</StCloseBtn>
        </>
      )}
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
  margin-top: 4rem;
  margin-bottom: 2.5rem;

  font-weight: 600;
  font-size: 4.3rem;
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

const StHistoryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 17rem;

  padding-bottom: 1rem;

  width: 40rem;
  height: auto;

  background-color: #c9d1d984;

  border-radius: 1rem;

  font-weight: 600;
  font-size: 1.7rem;

  z-index: 1;

  & > p {
    margin-top: 1rem;
    padding: 1rem;

    border-radius: 2rem;

    background-color: #0d1117;

    color: #c9d1d9;

    cursor: pointer;
  }

  & > ol > li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;

    width: 40rem;

    & > span {
      cursor: pointer;
    }

    & > button {
      background: none;
    }
  }
`;

const StCloseBtn = styled.button`
  position: absolute;
  top: 25%;
  left: 134%;

  background: none;

  font-size: large;
`;
