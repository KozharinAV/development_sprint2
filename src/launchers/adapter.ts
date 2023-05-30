import { AnalogClock, AnalogClockAdapter } from "../patterns/adapterClasses"

const analogClock = new AnalogClock();
analogClock.setHourArrowRotation(90);
analogClock.setMinuteArrowRotation(180);
analogClock.setSecondArrowRotation(270);

const adapter = new AnalogClockAdapter(analogClock);

adapter.displayTime();