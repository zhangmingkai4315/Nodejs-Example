var zlib = require('zlib');
var crypto = require('crypto');
var multipipe = require('multipipe');
var fs = require('fs');

module.exports.compressAndEncrypt=function(password){
  return multipipe(zlib.createGzip(),crypto.createCipher("aes192",password));
};

module.exports.decryptAndDecompress=function(password){
  return multipipe(crypto.createDecipher('aes192',password), zlib.createGunzip())
}
