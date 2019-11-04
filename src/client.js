import { MTProto } from 'telegram-mtproto';

export const api = {
  layer: 105,
  initConnection: 0x69796de9,
  api_id: 1023699,
}

export const server = {
  dev: true //We will connect to the test server.
}           //Any empty configurations fields can just not be specified

export class Client {

  constructor(phone, server, api) {
    this.api_id = 1023699;
    this.api_hash = '7bc11ea3a1de65c529b93c3aa5dc5c22';
    this.phone = phone;
    this.client = MTProto({ server, api });
  }

  async sendCode() {
    this.sentCode = await this.client('auth.sendCode', {
      phone_number: this.phone,
      current_number: false,
      api_id: this.api_id,
      api_hash: this.api_hash
    });
  }

  async signIn(code, phoneHash) {
    return await this.client('auth.signIn', {
      phone_number: this.phone,
      phone_code_hash: this.sentCode.phone_code_hash,
      phone_code: code
    });
  }
}
