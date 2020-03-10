
function sledenje(cas: number, obcutljivost: number, senzor: number) {
    control.timer1.reset()
    while (control.timer1.seconds() < cas) {
        motors.largeBC.setInverted(true)
        if (senzor == 1) {
            napaka = 50 - sensors.color1.light(LightIntensityMode.Reflected)
            hitrost_obracanja = obcutljivost * napaka
            motors.largeBC.steer(hitrost_obracanja, 15)
        }
        if (senzor == 2) {
            napaka = 50 - sensors.color2.light(LightIntensityMode.Reflected)
            hitrost_obracanja = obcutljivost * napaka
            motors.largeBC.steer(hitrost_obracanja, 15)
        }
        brick.showNumber(sensors.color1.light(LightIntensityMode.Reflected), 1)
        brick.showNumber(sensors.color2.light(LightIntensityMode.Reflected), 2)
        brick.showNumber(hitrost_obracanja, 3)
    }

}

