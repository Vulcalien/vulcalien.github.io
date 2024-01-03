+++
title = '6502 emulators'
date = '2023-12-14'
+++

Over the years, in order to better understand how CPUs work, I've made
two emulators for the 8-bit processor
[MOS 6502](https://en.wikipedia.org/wiki/MOS_Technology_6502).
This processor was widely used in the 1980s and 1990s, being employed in
famous machines such as the Nintendo Entertainment System.

These two projects emulate a simplified version of the 6502: one 'clock'
for the emulators corresponds to an entire instruction, while a real
6502 would require many (and a different amount of) clocks to execute an
instruction.

---

The first of my 6502 emulators,
[lib6502-emulator](https://github.com/Vulcalien/6502-emulator),
was written in C and is built as a library. The application using the
library is responsible for handling the memory itself (RAM, ROM,
disk, hardware registers...) while the library focuses on emulating the
6502 operations.

The library's interface is designed to be very simple. To "wire" the
system memory to the 6502, the developer must set the functions
`cpu_read_byte` and `cpu_write_byte`. Each of the 6502's interrupts
(RESET, IRQ and NMI) can be triggered by the corresponding function
(`cpu_reset`, `cpu_irq`, `cpu_nmi`). Finally, to tell the library to
simulate one instruction, `cpu_clock` can be called.

---

My second 6502 emulator,
[6502-gba](https://github.com/Vulcalien/6502-gba),
was written in ARM assembly for the Game Boy Advance console. This
project was made for a class in university in which computer
architecture and assembly are taught.

The emulator is compiled into a Game Boy Advance ROM and can run
programs put in the GBA cartridge's save memory. It has access to the
console's hardware (display, buttons...) with many intended limitations,
making it a sort of
[Fantasy
Console](https://en.wikipedia.org/wiki/Fantasy_video_game_console)
based on the 6502 processor.

---

I found most of the knowledge I needed to make the emulators in
[this website](http://www.6502.org/users/obelisk/6502/).\
View on GitHub:
[lib6502-emulator](https://github.com/Vulcalien/6502-emulator),
[6502-gba](https://github.com/Vulcalien/6502-gba)
