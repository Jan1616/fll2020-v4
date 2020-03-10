function jaja_na_oko() {
    motors.largeBC.setInverted(true)
    pospesevanje(20)
    motors.largeBC.tank(10, 10, 2.2, MoveUnit.Rotations)
    motors.largeC.run(30, 0.7, MoveUnit.Rotations)
    motors.largeBC.tank(100, 100, -3, MoveUnit.Rotations)
}
