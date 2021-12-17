// this is like enums but defined on the fly
// useful if you just want string enums
type Status = 'idle' | 'downloading' | 'complete';

function downloadStatus(status : Status) {
  if (status == 'idle') {
    console.log('Download');
  }
  if (status == 'downloading') {
    console.log('Downloading...');
  }
  if (status == 'complete') {
    console.log('Your download is complete!');
  }
}

downloadStatus('downloading');