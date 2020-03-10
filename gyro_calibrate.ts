function gyro_calibrate() {
    sensors.gyro3.calibrate()
    brick.showString("Gyro 3", 1)
    brick.showNumber(sensors.gyro3.angle(), 2)
}