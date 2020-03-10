
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
