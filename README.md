# Webhook Action

Sends Lighthouse Performance Data to Newrelic Insights

## Required arguments

| Argument  | Description                                                                       |
|-----------|-----------------------------------------------------------------------------------|
| `url`     | The URL endpoint for your Newrelic Insights api                                   |
| `apikey`  | The Newrelic Insights API key                                                     |
| `data`    | Raw Lighthouse report data                                                        |

## Example usage

```yml
name: Create Sandbox

on: pull_request

jobs:
  deploy:
    name: Deploy
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v1

      - name: Lighthouse Check
        uses: trendyminds/github-actions-newrelic@master
        env:
          url: ${{ secrets.LIGHTHOUSE_CHECK_AWS_REGION }} # ex. https://insights-collector.newrelic.com/v1/accounts/0000000/events
          apikey: ${{ secrets.LIGHTHOUSE_CHECK_AWS_REGION }}
          data: ${{ steps.lighthouseCheck.outputs.lighthouseCheckResults }}
```
