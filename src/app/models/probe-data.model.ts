import * as MongoDB from 'mongodb'

export interface ProbeDataModel {
  latitude: number
  longitude: number
  altitude: number
  year: number
  month: number
  day: number
  hour: number
  minutes: number
  seconds: number
  pressure: number
  altitudeBME: number
  humidityBME: number
  acelerationx: number
  acelerationy: number
  acelerationz: number
  anglex: number
  angley: number
  anglez: number
  temperaturempu: number
  humiditydht: number
  temperaturedht: number
  heatindex: number
}
