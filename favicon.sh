#!/bin/sh

# Automatically generate favicons for the site.
# Requires the 'inkscape' and 'convert' command.

cd static

# generate 16x16 and 32x32 PNG files
inkscape -w 16 -h 16 favicon.svg -o favicon-16x16.png
inkscape -w 32 -h 32 favicon.svg -o favicon-32x32.png

# generate ICO file
inkscape -w 48 -h 48 favicon.svg -o tmp-48.png
convert favicon-16x16.png favicon-32x32.png tmp-48.png favicon.ico
rm tmp-48.png

# generate Apple touch icon
inkscape -w 180 -h 180 favicon.svg -o apple-touch-icon.png -b "#ffffff"
