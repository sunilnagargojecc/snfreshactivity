let Client = require('ssh2-sftp-client');
let sftp = new Client();

sftp.connect({
  host: '199.241.140.134',
  port: '4522',
  username: 'ccengage',
  password: 'CcEng#19Urls'
}).then(() => {
	// Push SMS file to ICS SFTP /upload/IN Folder
	 return sftp.rename('/ccengage/After30/Sunil.txt','/ccengage/After30/Sunil.csv')
	 	
  //return sftp.list('/ccengage/After30');
}).then(() => {
  console.log('Closing SFTP');
   //return sftp.rename('/ccengage/After30/Sunil.txt','/ccengage/After30/Sunil.csv')
   return sftp.end();
   
}).catch(err => {
  console.log(err, 'catch error');
});