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