# Mickey Puri

## Encode a Long URL and get a Short URL

Route: /api/encode

Uses a https POST with your url to be shortened

Body
``` Body

{
    "url": "https://github.com/mickeypuri/axios-token-manager"
}

```

Will return a JSON with the shortUrl string value
```
{
    "shortUrl": "1"
}
```

## Decode a Short URL and get back the corresponding Long URL

Route: /api/decode

Uses a https POST with the short url to be decoded

Body
```
{
    "shortUrl": "1"
}
```

Will return a JSON with the corresponding full url
```
{
    "fullUrl": "https://github.com/mickeypuri/axios-token-manager"
}
```

