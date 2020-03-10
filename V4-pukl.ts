 function pukl() {
     motors.largeBC.setInverted(true)
     motors.largeBC.tank(30, 30, -3.75, MoveUnit.Rotations)
     motors.mediumA.run(100, 0.8, MoveUnit.Seconds)
     motors.largeB.run(30, 0.35, MoveUnit.Rotations)
     motors.largeBC.tank(30, 30, -0.9, MoveUnit.Rotations)
     do_crte(90, 30, 1)
     control.waitMicros(200000)
     motors.largeB.run(30, -0.9, MoveUnit.Rotations)
     motors.largeBC.tank(30, 30, 2.4, MoveUnit.Rotations)
 }