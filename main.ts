//VOZNJE
brick.buttonEnter.onEvent(ButtonEvent.Pressed, function () {
    if (m == 0) {
        control.panic(5)
    }
    //MISIJA 1(ORANZNA ZIRAFA)
    if (m == 1) {
        oranzna_zirafa()
    }
    //MISIJA 2(JAJA NA OKO)
    if (m == 2) {
        jaja_na_oko()
    }
    //MISIJA 3(DREVA)
    if (m == 3) {
        dreva()
    }
    //MISIJA 4(PUKL)
    if (m == 4) {
        pukl()
    }
})

// MISIJA 3(MIŠJA PAST)-REZERVA
//misja_past()

//KALIBRIRA LIGHT
brick.buttonDown.onEvent(ButtonEvent.Pressed, function () {
    sensors.color1.reflectedLight()
    sensors.color2.reflectedLight()
})

// KALIBRIRA GYRO
brick.buttonUp.onEvent(ButtonEvent.Pressed, function () {
    gyro_calibrate()
})

sensors.color1.calibrateLight(LightIntensityMode.Reflected)
sensors.color2.calibrateLight(LightIntensityMode.Reflected)

brick.buttonRight.onEvent(ButtonEvent.Pressed, function () {
    m = m + 1
    brick.showNumber(m, 1)
})

brick.buttonLeft.onEvent(ButtonEvent.Pressed, function () {
    m = m - 1
    brick.showNumber(m, 1)
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
let m = 0

sensors.gyro3.angle()
brick.setStatusLight(StatusLight.Orange)