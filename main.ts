/*
MISIJE
*/
// MISIJA 2(JAJCA NA OKO)
brick.buttonDown.onEvent(ButtonEvent.Pressed, function () {
    motors.largeBC.setInverted(true)
    pospesevanje(20)
    motors.largeBC.tank(10, 10, 2.2, MoveUnit.Rotations)
    motors.largeC.run(30, 0.7, MoveUnit.Rotations)
    motors.largeBC.tank(100, 100, -3, MoveUnit.Rotations)
})


// MISIJA 1(ORANŽNA ŽIRAFA)
brick.buttonUp.onEvent(ButtonEvent.Pressed, function () {
    motors.largeBC.setInverted(true)
    pospesevanje(20)
    motors.largeBC.tank(30, 30, 1, MoveUnit.Rotations)
    do_crte(90, 20, 2)
    motors.largeBC.tank(10, 10, 0.35, MoveUnit.Rotations)
    control.waitMicros(100000)
    motors.largeBC.tank(30, 30, -0.1, MoveUnit.Rotations)
    motors.mediumD.run(30, 0.3, MoveUnit.Rotations)
    motors.stopAll()
})


// MISIJA 4(PUKL)
brick.buttonLeft.onEvent(ButtonEvent.Pressed, function () {
    motors.largeBC.setInverted(true)
    motors.largeBC.tank(30, 30, -3.75, MoveUnit.Rotations)
    motors.mediumA.run(100, 0.8, MoveUnit.Seconds)
    motors.largeB.run(30, 0.35, MoveUnit.Rotations)
    motors.largeBC.tank(30, 30, -0.9, MoveUnit.Rotations)
    do_crte(90, 30, 1)
    control.waitMicros(200000)
    motors.largeB.run(30, -0.9, MoveUnit.Rotations)
    motors.largeBC.tank(30, 30, 2.4, MoveUnit.Rotations)
})


// MISIJA 3(MIŠJA PAST)
brick.buttonEnter.onEvent(ButtonEvent.Pressed, function () {
    motors.largeBC.setInverted(true)
    pospesevanje(30)
    motors.largeBC.steer(0, 30, 1.5, MoveUnit.Rotations)
    motors.largeBC.tank(30, 30, -0.1, MoveUnit.Rotations)
    motors.largeB.setBrake(true)
    motors.largeB.run(50, 2.5, MoveUnit.Rotations)
    motors.largeBC.tank(100, 100, -0.5, MoveUnit.Rotations)
    motors.largeBC.tank(30, 30, 0.2, MoveUnit.Rotations)
    do_crne(2)
    motors.mediumD.run(100, -2, MoveUnit.Rotations)
    motors.largeB.run(30, -0.75, MoveUnit.Rotations)
    motors.largeBC.steer(0, 25, 3.4, MoveUnit.Rotations)
    motors.mediumD.run(100, 1.55, MoveUnit.Rotations)
    motors.largeBC.tank(30, 30, 0.25, MoveUnit.Rotations)
    motors.mediumD.run(100, -2.3, MoveUnit.Rotations)
    motors.largeBC.tank(20, 20, 0.25, MoveUnit.Rotations)
    motors.mediumD.run(100, 2.5, MoveUnit.Rotations)
    motors.largeBC.tank(30, 30, -0.65, MoveUnit.Rotations)
    do_crne_n(1)
    motors.mediumD.run(100, 1, MoveUnit.Rotations)
    sledenje(3, 1.6)
    motors.largeC.stop()
    motors.mediumD.run(100, -2, MoveUnit.Rotations)
    motors.largeBC.tank(100, 100, -6, MoveUnit.Rotations)
    motors.largeC.run(30, -0.5, MoveUnit.Rotations)
})


sensors.color1.calibrateLight(LightIntensityMode.Reflected)
sensors.color2.calibrateLight(LightIntensityMode.Reflected)


// KALIBRIRA GYRO
brick.buttonRight.onEvent(ButtonEvent.Pressed, function () {
    sensors.gyro3.calibrate()
    brick.showString("Gyro 3", 1)
    brick.showNumber(sensors.gyro3.angle(), 2)
})


/*
OD TU NAPREJ PODPROGRAMI 
*/

/*
PODPROGRAM ZA VOŽNJO NARAVNOST
*/
function vozi_ravno(cm: number) {
    popravek = 0
    sensors.gyro3.reset()
    motors.largeB.reset()
    motors.largeBC.setBrake(false)
    while (Math.abs(motors.largeB.angle()) < 360 * (cm / 29)) {
        popravek = sensors.gyro3.angle() * 1.5
        motors.largeBC.steer(popravek, 30)
        brick.showString("Popravek", 7)
        brick.showNumber(popravek, 8)
        brick.showString("360*cm/29", 9)
        brick.showNumber(Math.abs(motors.largeB.angle()), 10)
    }
}


/*
PODPROGRAM ZA POSPEŠEVANJE
*/
function pospesevanje(maxmoc: number) {
    moc = 0
    motors.largeBC.setBrake(false)
    while (moc < maxmoc) {
        motors.largeBC.tank(moc, moc)
        moc = moc + 2
        control.waitMicros(100000)
    }
}


/*
PODPROGRAM ZA VOŽNJO DO CRTE
*/
function do_crte(svetlost: number, moc: number, senzor: number) {
    motors.largeBC.setInverted(true)
    motors.largeBC.setBrake(true)
    // če rabimo senzor ena
    if (senzor == 1) {
        while (sensors.color1.light(LightIntensityMode.Reflected) < svetlost) {
            motors.largeBC.tank(moc, moc)
        }
        motors.stopAll()
    }
    // če rabimo senzor dva
    if (senzor == 2) {
        while (sensors.color2.light(LightIntensityMode.Reflected) < svetlost) {
            motors.largeBC.tank(moc, moc)
        }
        motors.stopAll()
    }
}


/*
PODPROGRAM ZA OBRAČANJE PO KOTIH
*/
function obracanje_po_kotih(smer: number, kot: number, naprej: boolean) {
    if (naprej == true) {
        motors.largeBC.setInverted(true)
    }
    else {
        motors.largeBC.setInverted(false)
    }
    motors.largeBC.steer(smer, 15)
    sensors.gyro3.pauseUntilRotated(kot)
    motors.largeBC.stop()
    motors.stopAll()
}


/*
PODPROGRAM ZA VOŽNJO DO CRNE CRTE
*/
function do_crne(senzor: number) {
    motors.largeBC.setInverted(true)
    motors.largeBC.setBrake(true)
    motors.largeBC.steer(0, 20)
    if (senzor == 1) {
        sensors.color1.pauseUntilColorDetected(ColorSensorColor.Black)
        motors.largeBC.stop()
    }
    if (senzor == 2) {
        sensors.color2.pauseUntilColorDetected(ColorSensorColor.Black)
        motors.largeBC.stop()
    }
}


/*
PODPROGRAM ZA VOŽNJO DO CRNE CRTE NAZAJ
*/
function do_crne_n(senzor: number) {
    motors.largeBC.setInverted(true)
    motors.largeBC.setBrake(true)
    motors.largeBC.steer(0, -20)
    brick.showNumber(senzor, 1)
    if (senzor == 1) {
        sensors.color1.pauseUntilColorDetected(ColorSensorColor.Black)
        motors.largeBC.stop()
    }
    brick.showNumber(senzor, 1)
    if (senzor == 2) {
        sensors.color2.pauseUntilColorDetected(ColorSensorColor.Black)
        motors.largeBC.stop()
    }
}

/*
PODPROGRAM ZA VOŽNJO DO CRNE CRTE V LEVO SMER
*/
function do_crne_l(senzor: number) {
    motors.largeB.setInverted(true)
    motors.largeB.setBrake(true)
    motors.largeB.run(-20)
    if (senzor == 1) {
        sensors.color1.pauseUntilColorDetected(ColorSensorColor.Black)
        motors.largeBC.stop()
    }
    if (senzor == 2) {
        sensors.color2.pauseUntilColorDetected(ColorSensorColor.Black)
        motors.largeBC.stop()
    }
}


/*
SLEDENJE ČRTI
*/
function sledenje(cas: number, obcutljivost: number) {
    control.timer1.reset()
    while (control.timer1.seconds() < cas) {
        motors.largeBC.setInverted(true)
        napaka = 50 - sensors.color1.light(LightIntensityMode.Reflected)
        hitrost_obracanja = obcutljivost * napaka
        motors.largeBC.steer(hitrost_obracanja, 15)
        brick.showNumber(sensors.color1.light(LightIntensityMode.Reflected), 1)
        brick.showNumber(sensors.color2.light(LightIntensityMode.Reflected), 2)
        brick.showNumber(hitrost_obracanja, 3)
    }

}


/*
PODPROGRAM ZA VOŽNJO DO CRNE CRTE V DESNO SMER
*/
function do_crne_d(senzor: number) {
    motors.largeC.setInverted(true)
    motors.largeC.setBrake(true)
    motors.largeC.run(-20)
    if (senzor == 1) {
        sensors.color1.pauseUntilColorDetected(ColorSensorColor.Black)
        motors.largeBC.stop()
    }
    if (senzor == 2) {
        sensors.color2.pauseUntilColorDetected(ColorSensorColor.Black)
        motors.largeBC.stop()
    }
}


/*
PODPROGRAM ZA IZPIS POMEMBNIH VREDNOSTI SENZORJEV
forever(function () {
    brick.showString("Color 1", 1)
    brick.showNumber(sensors.color1.light(LightIntensityMode.Reflected), 2)
    brick.showString("Color 2", 3)
    brick.showNumber(sensors.color2.light(LightIntensityMode.Reflected), 4)
    brick.showString("Gyro 3", 5)
    brick.showNumber(sensors.gyro3.angle(), 6)

})
*/

/*
SPREMENLJIVKE
*/
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