export const COMMAND_PALETTE_EVENT = 'f3router:command-palette'

export function openCommandPalette() {
  window.dispatchEvent(new CustomEvent(COMMAND_PALETTE_EVENT))
}
