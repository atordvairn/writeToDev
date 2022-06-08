export default function Index() {
  return (
<>
    <h1>writeToDev</h1>

<i>only posts requests to the api will be processed</i>

endpoint:
<code>
https://write-to-dev.vercel.app/api/publish
</code>
<p>
post a request as;
<code>
{
    "title": "test",
    "body": "this is markdown for the body",
    "api_key": "<YOU API KEY FROM DEV.TO>",
    "tags": ["webdev", "JavaScript", "test", "only4"]
}
</code>
</p>
</>
  );
}
