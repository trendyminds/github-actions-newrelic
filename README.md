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

      - name: Webhook
        uses: trendyminds/github-actions-newrelic@master
        env:
          url: https://my.webhook.url/path/to/my/action
          method: POST
          data: '{"favorite_color":"blue","message":"Hello!"}'
```
