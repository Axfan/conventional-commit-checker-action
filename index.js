const core = require("@actions/core");
const github = require("@actions/github");
import { validatePR } from "./ccc";

try {
  const title = github.context.payload.pull_request.title;
  const prTitleRegexPattern = /^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test){1}(\([\w\-\.]+\))?(!)?: ([\w ])+([\s\S]*)/gm;

  const result = validatePR({
    title,
    prTitleRegexPattern,
  });
  if (result.status !== "success") {
    throw result;
  }
  console.log(result.message);
} catch (error) {
  core.setFailed(error.message);
}
