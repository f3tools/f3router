/** Fired to open the Updates dialog from anywhere (the ⋯ menu, the update pill). */
export const OPEN_UPDATES_EVENT = 'f3router:open-updates'

export function openUpdates(): void {
  window.dispatchEvent(new Event(OPEN_UPDATES_EVENT))
}

export const RELEASES_URL = 'https://github.com/f3tools/f3router/releases/latest'
