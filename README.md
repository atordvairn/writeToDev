# writeToDev

_only posts requests to the api will be processed_

endpoint:
```
https://write-to-dev.vercel.app/api/publish
```

post a request as;
``` json
{
    "title": "test",
    "body": "this is markdown for the body",
    "api_key": "<YOU API KEY FROM DEV.TO>",
    "tags": ["webdev", "JavaScript", "test", "only4"]
}
```