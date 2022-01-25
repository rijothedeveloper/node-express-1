const axios = require('axios').default;
const fs = require('fs');

filename = process.argv[2]
if(!filename) {
    process.exit(1)
}

readAndParseFile(filename)

async function readAndParseFile(filename) {

    try {
        // store the read file contents
        var contents = fs.readFileSync(filename, 'utf8');
        const urlArray = contents.split("\n")
        for (let url of urlArray) {
            await getAndSaveURLContent(url)
        }
      } catch (error) {
        // errors thrown by fs will be caught here
        console.error(error);
        // kill the process and tell the shell it errored
        process.exit(1);
      }

}

async function getAndSaveURLContent(url) {
    try {
        const response = await axios.get(url);
        const data = response.data
        const fileurl = new URL(url)
        const hostname = fileurl.hostname
        saveToFile(hostname, data)
      } catch (error) {
        console.error(error);
      }
}

function saveToFile(filename, content) {
  fs.writeFile(`./files/${filename}.txt`, content, "utf8", function(err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log('Successfully wrote to file!');
  });
}