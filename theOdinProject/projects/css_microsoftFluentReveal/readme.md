Wanting to start doing more MS style fluent work in CSS. Was hoping I could have avoided anything in JS but it does not seem likely as there is no way to get access to the mouse pointer in just CSS.


The idea is if I can understand how to implement it once, I can translate that to other controls.

# Reveal Effect
The basis of this seems to be just a radial gradient of some size that follows the mouse pointer. Some things to consider:
1. How big is the gradient - is its size relative to the container or the item the effect is applied on
2. Color of it (maybe based on theme)
3. Is it animated
4. It should only be shown on certain controls - like buttons but **not** on containers of those controls 