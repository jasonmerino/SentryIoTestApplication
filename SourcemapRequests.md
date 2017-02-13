# Create a new release

# Req
curl https://sentry.io/api/0/projects/jason-merino/test-application/releases/ \
  -X POST \
  -H 'Authorization: Bearer 7900bc830dbb452c9052b2000b659e9d23f133ab49734f52a2e9b7be9ade10be' \
  -H 'Content-Type: application/json' \
  -d '{"version": "1.0.1"}' \

# Res
{
  "dateCreated": "2016-01-27T04:51:32.723Z",
  "version": "1.0.1"
}

=================================================================================================================================

# Upload a file for the given release

# Req
curl https://sentry.io/api/0/projects/jason-merino/test-application/releases/1.0.1/files/ \
  -X POST \
  -H 'Authorization: Bearer 7900bc830dbb452c9052b2000b659e9d23f133ab49734f52a2e9b7be9ade10be' \
  -F file=@main.jsbundle.map \
  -F name="/main.jsbundle.map"

curl https://sentry.io/api/0/projects/jason-merino/test-application/releases/1.0.1/files/ \
  -X POST \
  -H 'Authorization: Bearer 7900bc830dbb452c9052b2000b659e9d23f133ab49734f52a2e9b7be9ade10be' \
  -F file=@main.jsbundle \
  -F name="/main.jsbundle"

# Res
{
  "dateCreated": "2015-03-06T04:53:00.308Z",
  "headers": {
    "Content-Type": "application/octet-stream"
  },
  "id": "1",
  "name": "http://example.com/app.js.map",
  "sha1": "1.0.1",
  "size": 452
}

# If you make a mistake, you can also simply clear out the release
curl https://sentry.io/api/0/projects/jason-merino/test-application/releases/1.0.1/ \
  -H 'Authorization: Bearer 7900bc830dbb452c9052b2000b659e9d23f133ab49734f52a2e9b7be9ade10be' \
  -X DELETE
