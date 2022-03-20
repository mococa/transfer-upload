# transfer-upload
Using transfer.sh for unlimited uploads :O

### What is it:
This is a rest API with one endpoint (POST /), which will receive a base64, an extension and will return a url hosting the file on transfer.sh

Example of usage (Axios - Javascript):
```js
  const binary = "data:audio/webm;codecs=opus;base64,GkXfo59ChoEBQv...";
  const extension = "webm";
 
  axios.post(THIS_API_URL, { binary, extension }).then(({ data: hostedUrl }) => {
    console.log(`File sucessfully hosted on ${hostedUrl}`)
  })
```
