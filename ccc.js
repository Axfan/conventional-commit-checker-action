export function validatePR({
  title,
  prTitleRegexPattern,
}) {
  const prTitleRegExp = new RegExp(prTitleRegexPattern);
  const prTitleMatchResult = prTitleRegExp.test(title);
  if (!prTitleMatchResult) {
    return {
      status: "failure",
      message: `Pull request title 
      **************************************************************************************
      ${title}
      ************************************************************************************** 
      does not match ${prTitleRegexPattern}`,
    };
  }

  return {
    status: "success",
    message: `
      Pull request title is valid under convetional commits
      **************************************************************************************
      ${title}
      **************************************************************************************
      matches ${prTitleRegexPattern}
      `,
  };
}
