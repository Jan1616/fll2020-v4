
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