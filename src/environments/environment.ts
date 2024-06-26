// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  MQTT_SERVICE_OPTIONS: {
    hostname: 'igbt.eesc.usp.br',
    port: 1883,
    /** path: '/mqtt',**/
    user: 'mqtt',
    password: 'mqtt_123_abc',
  },

  MONGO_DB: {
    MONGODB_URI: `mongodb+srv://${encodeURIComponent(
      'SharpProbeBridgeServer'
    )}:${encodeURIComponent(
      ',2D5$i40%B0c9*Ae/4_lsdYo'
    )}@climateproblecluster.qieglpc.mongodb.net/?retryWrites=true&w=majority&appName=ClimateProbleCluster`,
    MONGO_DBNAME: 'ClimateProbeProject',
    MONGO_COLLECTIONNAME: 'ProbeData',
    APP_ID: 'application-0-qxiuzfq',
  },
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
