let Client = require("ssh2-sftp-client");
const path = require("path");



let sftp = new Client();

  try {
		sftp.connect({
		host: '199.241.140.134',
		port: '4522',
		username: 'ccengage',
		password: 'CcEng#19Urls'
     
    });
	console.log("connected");
	sftp.end();
	
    //const list = await sftp.list(process.env.FTP_FOLDER);
    //const sortedList = sortListByDate(list);
    /*if(sortedList.length < 1){
      res.sendStatus(404);
      return;
    }
    const remotePath = process.env.FTP_FOLDER + sortedList[0].name;
    await sftp.get(remotePath, localPath);
    res.sendFile(localPath);*/
  } catch (error) {
    console.log(error, "catch error");
  }


