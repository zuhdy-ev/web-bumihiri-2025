export const GA_TRACKING_ID = 'G-ZGHHL0HXBP' // ganti dengan ID kamu dari Google Analytics

// Log halaman yang dikunjungi
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}
