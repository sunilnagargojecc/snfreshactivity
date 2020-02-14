let Client = require('ssh2-sftp-client');
let sftp = new Client();

sftp.connect({
  host: process.env.FTP_HOST,
  port: process.env.FTP_PORT,
  username: process.env.FTP_USERNAME,
  password: process.env.FTP_PASSWORD
}).then(() => {
	// Push SMS file to ICS SFTP /upload/IN Folder
	 return sftp.rename(process.env.Source_File,process.env.Dest_File)
	 	
  //return sftp.list('/ccengage/After30');
}).then(() => {
  console.log('Closing SFTP');
   //return sftp.rename('/ccengage/After30/Sunil.txt','/ccengage/After30/Sunil.csv')
   return sftp.end();
   
}).catch(err => {
  console.log(err, 'catch error');
})