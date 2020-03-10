
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
