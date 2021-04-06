# Newrelic Insights Action

Sends Lighthouse Performance Data to Newrelic Insights

## Required arguments

| Argument  | Description                                                                       |
|-----------|-----------------------------------------------------------------------------------|
| `url`     | The URL endpoint for your Newrelic Insights api                                   |
| `apikey`  | The Newrelic Insights API key                                                     |
| `data`    | Raw Lighthouse report data                                                        |

## Example usage

```yml
name: Test PR

on: pull_request

jobs:
  test-pr:
    name: Test PR
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v1

      - name: Lighthouse Check
        uses: trendyminds/github-actions-newrelic@master
        env:
          url: ${{ secrets.NEWRELIC_INSIGHTS_API_URL }} # ex. https://insights-collector.newrelic.com/v1/accounts/0000000/events
          apikey: ${{ secrets.NEWRELIC_INSIGHTS_API_KEY }}
          data: ${{ steps.lighthouseCheck.outputs.lighthouseCheckResults }}
```
