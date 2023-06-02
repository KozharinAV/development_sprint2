import { AnalogClockAdapter, AnalogClock, DigitalClock } from "../patterns/adapterClasses"

const digitalClock = new DigitalClock(10, 45, 25)
const analogClock = new AnalogClock(90, 180, 270)
const adapter = new AnalogClockAdapter(analogClock)

digitalClock.displayTime()
analogClock.displayTime()

adapter.displayTime();
adapter.setTime(12, 25, 45)
adapter.displayTime()
adapter.getAnalogTime()