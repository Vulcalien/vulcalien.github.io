+++
title = 'libcliscreen'
date = '2023-11-16'
+++

**libcliscreen** is a small C library useful for drawing on the terminal
window as if it were a raster screen. Its original purpose was to be
used for terminal games, but it may also be used for building simple
[TUI](https://en.wikipedia.org/wiki/Text-based_user_interface)
applications.

A key feature of the library is that the screen's size can be fixed. For
example, if a game needs a screen of exactly 60x20 characters but the
terminal window is larger than that, the library will add a margin
around those 60x20 characters.

<center>
<figure>
<img src="/images/snake-cli.png"
     style="width: 40rem">
<figcaption style="font-weight: normal">
Snake-CLI, a small terminal game I made using libcliscreen
</figcaption>
</figure>
</center>

_libcliscreen_ offers functions to clear the screen, set a single
character, fill a rectangle and write strings. It's also possible to use
[ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors) 
to add colors to the characters.

I've also written manpages for most of the library's functions. These
may be useful when using them.

<center>
<figure>
<img src="/images/libcliscreen-manpage.png"
     style="width: 40rem">
<figcaption style="font-weight: normal">
Manpage for the cliscreen_create function
</figcaption>
</figure>
</center>

---

View on GitHub:
[click here](https://github.com/vulcalien/libcliscreen)
