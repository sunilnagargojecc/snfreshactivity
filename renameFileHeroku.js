let Client = require('ssh2-sftp-client');
let sftp = new Client();

sftp.connect({
  host: process.env.FTP_HOST,
  port: process.env.FTP_PORT,
  username: process.env.FTP_USERNAME,
  password: process.env.FTP_PASSWORD
}).then(() => {
	console.log('connected...');
	return sftp.end();
}).catch(err => {
  console.log(err, 'catch error');
})