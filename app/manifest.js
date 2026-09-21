export default function manifest() {
  return {
    name: 'Ayush Mitra',
    short_name: 'AyushMitra',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2E7D32',
    icons: [
      {
        src: '/icon-192x192.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
        purpose: 'any maskable',
      },
      {
        src: '/icon-512x512.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
        purpose: 'any maskable',
      },
    ],
    screenshots: [
      {
        src: '/screenshot-desktop.svg',
        sizes: '1280x720',
        type: 'image/svg+xml',
        form_factor: 'wide',
      },
      {
        src: '/screenshot-mobile.svg',
        sizes: '750x1334',
        type: 'image/svg+xml',
        form_factor: 'narrow',
      },
    ],
  }
}
