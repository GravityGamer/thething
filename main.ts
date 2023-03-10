radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        motion.driveWheel(Motor.LEFT, 50)
    }
    if (receivedNumber == 1) {
        motion.driveWheel(Motor.RIGHT, 50)
    }
    if (receivedNumber == 2) {
        motion.driveWheel(Motor.LEFT, 0)
    }
    if (receivedNumber == 3) {
        motion.driveWheel(Motor.RIGHT, 0)
    }
    if (receivedNumber == 4 && speed == 50) {
        speed = 100
    }
    if (receivedNumber == 4 && speed == 100) {
        speed = 50
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(4)
})
let speed = 0
speed = 50
radio.setGroup(63)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(0)
    }
    if (!(input.buttonIsPressed(Button.A))) {
        radio.sendNumber(3)
    }
    if (!(input.buttonIsPressed(Button.B))) {
        radio.sendNumber(2)
    }
})
