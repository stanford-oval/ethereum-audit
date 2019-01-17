
const EthAudit = require('../lib/eth_audit');
const config = require('../data/config.json');
const _ethaudit = new EthAudit(config);

// fake data for testing
const reqbody = require('./reqbody.json');

const option = process.argv[2];
testSelect();

async function testSelect() {
  switch (option) {
    case '-u':
      try {
        let result = await _ethaudit.unlockEthAccount();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    break;
    case '-a':
      try {
        let result = await _ethaudit.retrieveEthAccounts();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
      break;
    case '-i':
      try {
        let result = await _ethaudit.insertAuditData(reqbody);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
      break;
    case '-d':
      try {
        let result = await _ethaudit.getAuditDataByKey(reqbody);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    break;
    case '-c':
      try {
        let result = await _ethaudit.getAuditDataCount();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
      break;
    case '-k':
      try {
        let result = await _ethaudit.getAuditKey(reqbody);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
      break;
    case '-o':
      try {
        let result = await _ethaudit.addNewOwner(reqbody);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
      break;
    case '-w':
      try {
        let result = await _ethaudit.checkIsOwner(reqbody);
        console.log(result);
      } catch (error) {
        console.log(error);
      }     
      break;
    case '-l':
      try {
        let result = await _ethaudit.getAuditDataAll();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
      break;
    default:
      // test_eth_audit.js -a
      // DEBUG=* node test_eth_audit.js -a
      // DEBUG=eth_audit_log node test_eth_audit.js -a
      let msg = 'Usage: node test_eth_audit.js [options]\n';
      msg += '       DEBUG=eth_audit_log node test_eth_audit.js [options]\n'
      msg += 'Options: \n';
      msg += '  -u\tunlock the ETH account for sending transactions\n';
      msg += '  -a\tquery the ETH accounts in the node\n';
      msg += '  -i\tinsert audit data (reqbody.key, reqbody.data)\n';
      msg += '  -d\tget audit data (reqbody.key)\n';
      msg += '  -c\tget audit data count\n';
      msg += '  -k\tget audit key (reqbody.index)\n';
      msg += '  -o\tadd a new owner who is authorized to insert audit data (reqbody.addr)\n';
      msg += '  -w\tcheck whether the account address is one of the owners (reqbody.addr)\n';
      msg += '  -l\tget all audit data\n';
      console.log(msg);
      break;
  }
}