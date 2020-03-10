function oranzna_zirafa() {
    motors.largeBC.setInverted(true)
    pospesevanje(20)
    motors.largeBC.tank(30, 30, 1, MoveUnit.Rotations)
    do_crte(90, 20, 2)
    motors.largeBC.tank(10, 10, 0.35, MoveUnit.Rotations)
    control.waitMicros(100000)
    motors.largeBC.tank(30, 30, -0.1, MoveUnit.Rotations)
    motors.mediumD.run(30, 0.3, MoveUnit.Rotations)
    motors.stopAll()
}
