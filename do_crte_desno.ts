
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

