/*
 * Dependencies: glob, ssh2
 *
 * npm i -D glob ssh2
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { Client } = require('ssh2');

require('dotenv').config();

/*
 * settings
 */
// connection settings
const connectOption = {
  host: process.env.DEPLOY_HOST,
  port: parseInt(process.env.DEPLOY_PORT, 10),
  username: process.env.DEPLOY_USER,
  password: process.env.DEPLOY_PASS
};
// upload remote path
const uploadRemoteDirectory = process.env.DEPLOY_TARGET;
// upload local directory
const uploadLocalFilePath = path.join(process.cwd(), process.env.DEPLOY_DIR_FROM_ROOT);

/*
 * methods
 */
const conn = new Client();
conn.on('ready', () => conn.sftp(upload))
  .connect(connectOption);

function upload (err, sftp) {
  if (err) {
    throw err;
  }

  const files = glob.sync(path.join(uploadLocalFilePath, '**', '*'), { dot: true });
  files.forEach(localFilePath => {
    const remoteFilePath = localFilePath.replace(uploadLocalFilePath, uploadRemoteDirectory);
    const isDir = fs.existsSync(localFilePath) && fs.statSync(localFilePath).isDirectory();
    if (isDir) {
      createRemoteDirectory(sftp, remoteFilePath);
    } else {
      uploadFile(sftp, localFilePath, remoteFilePath);
    }
  });
}

function createRemoteDirectory (sftp, filePath) {
  const createDirectoryResult = sftp.mkdir(filePath);
  console.log(`create directory: ${filePath}, ${createDirectoryResult}`);
}

function uploadFile (sftp, localPath, remotePath) {
  sftp.fastPut(localPath, remotePath, {}, error => {
    if (error) {
      console.log(`Failure. From[${localPath}] To[${remotePath}], `, error);
    } else {
      console.log(`Success. From[${localPath}] To[${remotePath}]`);
    }
  });
}
