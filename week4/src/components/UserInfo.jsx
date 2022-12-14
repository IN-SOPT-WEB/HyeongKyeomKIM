import styled from "styled-components";

function UserInfo({ userInfo }) {
  const {
    login,
    name,
    avatar_url,
    html_url,
    followers,
    following,
    public_repos,
  } = userInfo;

  // 해당 유저 깃허브로 이동
  const visitHandler = () => {
    location.href = `${html_url}`;
  };

  return (
    <StUserInfoWrapper>
      <StUserImg src={avatar_url} />
      <StUserName>
        <h1>{login}</h1>
        <p>{name}</p>
      </StUserName>
      <StUserVisitBtn onClick={visitHandler}>Visit {login}</StUserVisitBtn>
      <StUserRate>
        <StUserRateBlock>
          <p>Followers</p>
          <span>{followers}</span>
        </StUserRateBlock>
        <StUserRateBlock>
          <p>Following</p>
          <span>{following}</span>
        </StUserRateBlock>
        <StUserRateBlock>
          <p>Repos</p>
          <span>{public_repos}</span>
        </StUserRateBlock>
      </StUserRate>
    </StUserInfoWrapper>
  );
}
export default UserInfo;

const StUserInfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80rem;
  height: auto;

  border: 0.2rem solid #c9d1d9;
  border-radius: 2.5rem;
`;

const StUserImg = styled.img`
  width: 27rem;
  height: 27rem;

  margin-top: 2.7rem;
  margin-bottom: 2.2rem;

  border-radius: 20rem;
`;

const StUserName = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    margin-bottom: 1.7rem;

    font-weight: 600;
    font-size: 3.5rem;
  }

  & > p {
    color: #8b949e;

    font-weight: 500;
    font-size: 2.3rem;
  }
`;

const StUserVisitBtn = styled.button`
  background-color: #0d1117;
  color: #c9d1d9;

  margin-top: 3.2rem;
  padding: 0.7rem 4rem;

  border: 0.2rem solid #c9d1d9;
  border-radius: 1.6rem;

  font-weight: 550;
  font-size: 2.1rem;

  &:hover {
    background-color: #c9d1d9;
    color: #0d1117;
  }
`;

const StUserRate = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  margin-top: 3.5rem;
  margin-bottom: 4rem;
`;

const StUserRateBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.7rem;

  width: 15rem;
  height: 13.5rem;

  border: 0.2rem solid #c9d1d9;
  border-radius: 1.6rem;

  & > p {
    font-weight: 600;
    font-size: 2.5rem;
  }

  & > span {
    color: #8b949e;

    font-size: 2rem;
  }
`;
