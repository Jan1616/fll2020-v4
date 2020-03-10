function pospesevanje(maxmoc: number) {
    moc = 0
    motors.largeBC.setBrake(false)
    while (moc < maxmoc) {
        motors.largeBC.tank(moc, moc)
        moc = moc + 2
        control.waitMicros(100000)
    }
}
