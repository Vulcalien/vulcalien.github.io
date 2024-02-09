+++
title = 'Minicraft for GBA v1.3'
date = '2024-02-09'
draft = true

showtoc = true
+++

A new version of Minicraft for GBA, my demake of
[Minicraft](https://en.wikipedia.org/wiki/Minicraft)
for the Game Boy Advance, has been released. In this post I will go into
detail regarding the changes made.

## Respawning

In previous versions, the player had no choise but to go back to the
start menu after dying. This meant losing all unsaved progress. This is
how it worked on the original version of Minicraft, but my demake is
meant to bring improvements to make playing Minicraft a better
experience. In version 1.3, the player will be able to respawn after
dying.

<center>
<img src="respawn.png"
     style="width: 30rem">
</center>

The player will always respawn on the surface level at a random
location. Because of this, going back to where you were can take some
time, but it seems like an appropriate incentive to stay alive. It's
also possible to choose whether or not to keep the inventory. By
default, *keep inventory* is enabled, but the option can be disabled in
the start menu.

Implementing this feature was not particularly difficult: first, the
surface level is cleared of all hostile entities (you don't want to be
attacked immediately after respawning!), then a new player entity is
created on that level at a location where he can walk (i.e. can't
respawn inside solid blocks).

## Save file verification

It is possible to lose some data when trying to save the current world
into file. For example, the saving procedure may be halted before it can
be completed, like when the GBA the game is running on loses power or,
if running on an emulator, when the emulator is closed.

<center>
<img src="saving.png"
     style="width: 30rem">
</center>

What usually happens in these situations is that the save data becomes
unusable. Receiving an hint that data corruption might have happened can
hopefully help the player understand what has happened to the save file.

<center>
<img src="invalid-checksum.png"
     style="width: 30rem">
</center>

### Implementation

The verification is a simple
[complement checksum](https://en.wikipedia.org/wiki/Checksum#Sum_complement).
Every time the world is saved, bytes that are written info file are
added together, so that at the end there is one 32-bit integer, the
*checksum*. The checksum is then written at the end of the file.

When the start menu (see the image above) is initialized, the save file
is checked before allowing the player to load it.
First, the code looks for a file signature, 'ZMCE'. If that is found,
then it goes further and calculates the checksum by reading all the
bytes of the save file and adding them together.

At the end, if the calculated checksum is equal to the one stored inside
the file, the file will be considered valid. If they are different, the
message shown above will appear. Note that the warning message does not
prevent the player from loading the world.

For those who already had a save file from an older version, don't
worry! The warning message will appear (because there is no checksum
written in the file) but the world should load without any problem.
