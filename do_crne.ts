
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

