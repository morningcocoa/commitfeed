import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const RepoSearchForm = styled.div`
  background: white;
  max-width: 375px;
  margin: 50px auto;
  padding: 20px 30px 30px;
  border-radius: 4px;
  text-align: left;
  border: 1px solid #ccc;
  box-shadow: 0px 5px 0px 0px #ccc;
`;

const RepoSearchLabel = styled.label`
  float: left;
  height: 23px;
  background: #fff;
  padding: 2px 5px 2px 5px;
  color: #b9b9b9;
  font-size: 12px;
  overflow: hidden;
  font-weight: normal;
`;

const RepoSearchInput = styled.input`
  display: block;
  padding: 9px;
  width: 100%;
  border: 1px solid #ddd;
  font-size: 14px;
  margin-bottom: 15px;
  border-radius: 3px;
  outline: none;
`;

const RepoSearchButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 5px;
  margin-top: 5px;
  padding: 10px 25px;
  font-size: 16px;
  letter-spacing: 0.5px;
  text-decoration: none;
  color: #fff;
  position: relative;
  background-color: #55acee;
  box-shadow: 0px 5px 0px 0px #3c93d5;
  cursor: pointer;
  &:hover {
    background-color: #6fc6ff;
  }
`;

function Home() {
  const [contributor, setContributor] = useState("");
  const [repo, setRepo] = useState("");
  const history = useHistory();

  const search = () => {
    if (contributor && repo) return history.push(`/${contributor}/${repo}/`);
  };

  return (
    <RepoSearchForm className="repo-search-form">
      <div>
        <div>
          <RepoSearchLabel htmlFor="username">Github Username</RepoSearchLabel>
        </div>
        <RepoSearchInput
          type="text"
          id="username"
          placeholder="Username"
          onChange={(e) => setContributor(e.target.value)}
          value={contributor}
        />
      </div>
      <div>
        <div>
          <RepoSearchLabel htmlFor="repository">
            Github Repository
          </RepoSearchLabel>
        </div>
        <RepoSearchInput
          type="text"
          id="repository"
          placeholder="Repository"
          onChange={(e) => setRepo(e.target.value)}
          value={repo}
        />
      </div>
      <RepoSearchButton onClick={() => search()}>Search</RepoSearchButton>
    </RepoSearchForm>
  );
}

export default Home;
