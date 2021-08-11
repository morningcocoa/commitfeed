import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Row = styled.div`
  max-width: 90%;
  margin: 0 auto 5px;
  padding: 9px 0 5px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const DateColumn = styled.span`
  display: inline-block;
  width: 20%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  margin-right: 4%;
`;

const TitleColumn = styled.a`
  display: inline-block;
  width: 40%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  margin-right: 8%;
  color: #55acee;
  text-decoration: none;
`;

const AuthorColumn = styled.span`
  display: inline-block;
  width: 20%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`;

const LoadMoreButton = styled.button`
  width: 90%;
  border: none;
  border-radius: 5px;
  margin-bottom: 60px;
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

export const fetchCommits = async (username, repo, pageNumber) => {
  const token = "90488c9baf6e540302dde5c0b7459903d2fbfb8e";
  const data = await fetch(
    `https://api.github.com/repos/${username}/${repo}/commits?page=${pageNumber}`,
    {
      headers: new Headers({
        Authorization: `tokens ${token}`
      })
    }
  );
  try {
    const commit = await data.json();
    return commit;
  } catch (err) {
    console.error(err);
  }
};

function CommitFeed({ match }) {
  const [commits, setCommits] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const history = useHistory();
  const fetchNewCommits = useRef(() => {});

  fetchNewCommits.current = () => {
    fetchCommits(match.params.username, match.params.repo, pageNumber).then(
      (data) => {
        if (data.message) {
          console.error(data.message);
          return history.push(`/does/not/exist`);
        }
        const newCommits = [...commits, ...data];
        setCommits(newCommits);
        setPageNumber(pageNumber + 1);
      }
    );
  };

  useEffect(() => {
    fetchNewCommits.current();
  }, []);

  const dateFormat = (dateString) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: false
    }).format(new Date(dateString));
  };

  return (
    <div>
      <p>
        Results for "{match.params.username}/{match.params.repo}"
      </p>
      {commits.map((commit) => (
        <Row key={commit.node_id}>
          <DateColumn>{dateFormat(commit.commit.author.date)}</DateColumn>
          <TitleColumn title={commit.commit.message} href={commit.url}>
            {commit.commit.message}
          </TitleColumn>
          <AuthorColumn>{commit.commit.author.name}</AuthorColumn>
        </Row>
      ))}
      <LoadMoreButton
        onClick={() => {
          fetchNewCommits.current();
        }}
      >
        Load More
      </LoadMoreButton>
    </div>
  );
}

export default CommitFeed;
