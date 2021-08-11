import { fetchCommits } from "./CommitFeed";

test("should fetch commit feed item", () => {
  const committer = "GitHub";
  return fetchCommits("m3db", "m3", 1).then((data) => {
    expect(data[0].commit.committer.name).toEqual(committer);
  });
});
