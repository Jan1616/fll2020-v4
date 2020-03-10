//VOZNJE
// MISIJA 2(JAJCA NA OKO)
brick.buttonDown.onEvent(ButtonEvent.Pressed, function () {
    jaja_na_oko()
})
// MISIJA 1(ORANŽNA ŽIRAFA)
brick.buttonUp.onEvent(ButtonEvent.Pressed, function () {
    oranzna_zirafa()
})
// MISIJA 4(PUKL)
brick.buttonLeft.onEvent(ButtonEvent.Pressed, function () {
    pukl()
})
// MISIJA 3(MIŠJA PAST)
brick.buttonEnter.onEvent(ButtonEvent.Pressed, function () {
    misja_past()
})

sensors.color1.calibrateLight(LightIntensityMode.Reflected)
sensors.color2.calibrateLight(LightIntensityMode.Reflected)

// KALIBRIRA GYRO
brick.buttonRight.onEvent(ButtonEvent.Pressed, function () {
    gyro_calibrate()
})

//SPREMENLJIVKE
let hitrost_obracanja = 0
let napaka = 0
let naprej = true
let moc = 0
let popravek = 0
let moc3 = 0
let i = 0
let svetlost = 0
let maxmoc = 0
let smer = 0
let kot = 0
sensors.color1.reflectedLight()
sensors.color2.reflectedLight()
sensors.gyro3.angle()
brick.setStatusLight(StatusLight.Orange)