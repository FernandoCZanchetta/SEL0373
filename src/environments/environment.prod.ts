export const environment = {
  production: true,

  MONGO_DB: {
    MONGODB_URI: `mongodb+srv://${encodeURIComponent(
      'SharpProbeBridgeServer'
    )}:${encodeURIComponent(
      ',2D5$i40%B0c9*Ae/4_lsdYo'
    )}@climateproblecluster.qieglpc.mongodb.net/?retryWrites=true&w=majority&appName=ClimateProbleCluster`,
    MONGO_DBNAME: 'ClimateProbeProject',
    MONGO_COLLECTIONNAME: 'ProbeData',
  },
}
