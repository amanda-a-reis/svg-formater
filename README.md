## Format SVG files to replace kebab-case to camelCase
___

### Usage

Create a file with an svg code and save it with the name you want, for example: `my-file.svg`

Then run the command:

```bash
node svgFormater.js my-file.svg
```

It will generate a new file with the name "my-file-updated.svg"

If you want to provide another type of file (ex: txt or jsx) it should work too.
The output file will have the same extension as the input file.

### Example

Input file:

```bash
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="" clip-path="">
<path id="" fill-rule="" clip-rule="" d="-2005" fill=""/>
</g>
<defs>
<clipPath id="clip0_4383_4712">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
```

Output file:

```bash
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="" clipPath="">
<path id="" fillRule="" clipRule="" d="-2005" fill=""/>
</g>
<defs>
<clipPath id="clip0_4383_4712">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
```
