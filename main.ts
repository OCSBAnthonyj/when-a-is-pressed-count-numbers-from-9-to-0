input.onButtonPressed(Button.A, function () {
    num = 0
    basic.showNumber(num)
    for (let index = 0; index < 9; index++) {
        num += 1
        basic.showNumber(num)
    }
    if (num == 9) {
        num += 0
    }
    basic.clearScreen()
    basic.pause(100)
    num = randint(0, 9)
    basic.showString("Guess ")
})
input.onButtonPressed(Button.AB, function () {
    if (guess == num) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.showString("correct!")
        basic.clearScreen()
    }
    if (guess != num) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showString("wrong")
        basic.clearScreen()
        control.reset()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(guess)
    guess += 1
    basic.showNumber(guess)
    if (guess == 9) {
        num += 0
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("thanks ")
    basic.showString("for")
    basic.showString("playing")
    control.reset()
})
let guess = 0
let num = 0
music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.ForeverInBackground)
num = 0
basic.showNumber(num)
