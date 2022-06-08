export default function Index() {
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
      <h1 class="display-1 m-3">writeToDev</h1>
      <i class="m-3 text-muted">only posts requests to the api will be processed</i>
      <br/>
      <code class="m-3">
         endpoint : https://write-to-dev.vercel.app/api/publish
      </code>
      <p class="mt-4 m-3">
        post a request as;
        <br />
        <code>
          {`{`}<br />
          <span class="m-3">"title": "test",</span><br />
          <span class="m-3">"body": "this is markdown for the body",</span><br />
          <span class="m-3">"api_key": {`"<YOU API KEY FROM DEV.TO>"`},</span><br />
          <span class="m-3">"tags": {`["webdev", "JavaScript", "test", "only4"]`}</span><br />
          {`}`}
        </code>
      </p>
    </>
  );
}
