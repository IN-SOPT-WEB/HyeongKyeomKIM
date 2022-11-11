import styled from "styled-components";
import UserInfo from "./UserInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../api/axios";

function Search() {
  const navigate = useNavigate();
  const [historyArr, setHistoryArr] = useState([]);
  const [openHistory, setOpenHistory] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [userInfo, setUserInfo] = useState();

  // 여기 너무 하드코딩 해서 useLocation 써서 리팩터링 할게요~!~! 일단 pr 올림 ㅎㅎ

  // 검색창을 통한 유저 검색 기능
  const searchHanlder = async (e) => {
    if (e.key === "Enter") {
      const userData = await getUserInfo(e.target.value);
      navigate(`/search/${e.target.value}`);
      setIsSearch(true);
      setOpenHistory(false);
      historyArrHandler(e.target.value);
      setUserInfo({
        login: userData.login,
        name: userData.name,
        avatar_url: userData.avatar_url,
        followers: userData.followers,
        following: userData.following,
        public_repos: userData.public_repos,
        html_url: userData.html_url,
      });
    }
  };

  // history 에 있는 유저 검색 기능
  const historySearchHandler = async (e) => {
    const userData = await getUserInfo(e.target.innerText);
    navigate(`/search/${e.target.innerText}`);
    setIsSearch(true);
    setOpenHistory(false);
    historyArrHandler(e.target.innerText);
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

  // history 배열 핸들러
  const historyArrHandler = (username) => {
    setHistoryArr((prev) => [...prev, username]);
  };

  // history 요소 삭제
  const deleteHistoryHanlder = (e) => {
    setHistoryArr((usernames) =>
      usernames.filter(
        (username) => username !== e.target.parentNode.textContent.slice(0, -1)
      )
    );
  };

  // 유저 정보창 닫기
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
            {historyArr.map((username, idx) => (
              <li key={idx}>
                <span onClick={historySearchHandler}>{username}</span>
                <button
                  onClick={(idx) => {
                    deleteHistoryHanlder(idx);
                  }}
                >
                  ❌
                </button>
              </li>
            ))}
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
