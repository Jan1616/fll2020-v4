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