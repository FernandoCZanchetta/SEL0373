/*
import * as Realm from 'realm-web'
import { environment } from '../../environments/environment'
import { ProbeDataModel } from '@models'

export class getDataService {
  private app = new Realm.App<Realm.App>({ id: environment.MONGO_DB.APP_ID })
  private credentials = Realm.Credentials.anonymous()
  private user = Realm.User

  initialiseMongoConnection() {
    // Authenticate the user
    return this.app.logIn(this.credentials)
  }

  async getProbeDatas(data: ProbeDataModel[]): Promise<ProbeDataModel[]> {
    const user = await this.initialiseMongoConnection()
    data = await user.callFunction('getProbeData')
    return data
  }
}
*/
