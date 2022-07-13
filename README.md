# Conventional Commit Checker GitHub Action

This action is a [conventional commit](https://www.conventionalcommits.org/en/v1.0.0-beta.4/#summary) validator

- validates PR title with conventional commit title
- The regex can be overridden with github action inputs

## Inputs

### `pr-title-regex`

**Optional** Regex to match PR title. Default `"^(.+)(?:(([^)s]+)))?: (.+)"`.

## Example usage

```yaml
name: CI

on:
  pull_request:
    branches: [master]
    types: [opened, edited, synchronize]

jobs:
  check-for-cc:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: check-for-cc
        id: check-for-cc
        uses: axfan/conventional-commit-checker-action@v2.0.0
```