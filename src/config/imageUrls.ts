/**
 * Centralized Image URL Configuration
 *
 * This file manages all external image URLs (Vercel Blob Storage, etc.)
 * If the base URL changes, you only need to update it here.
 */

// Vercel Blob Storage base URL
const VERCEL_BLOB_BASE_URL =
  "https://aguxgwlixjmeuop8.public.blob.vercel-storage.com";

/**
 * Helper function to generate Vercel blob storage URLs
 * @param filename - The name of the file in blob storage
 * @returns Full URL to the blob storage file
 */
const getBlobUrl = (filename: string): string => {
  return `${VERCEL_BLOB_BASE_URL}/${filename}`;
};

/**
 * Leadership/Team Images
 */
export const leadershipImages = {
  ziyaadVahed: getBlobUrl("Ziyaad-Vahed.jpg"),
  shaheenShaikh: getBlobUrl("Shaheen-Shaikh.jpg"),
  farihaKhan: getBlobUrl("Fariha-Khan.jpeg"),
};

/**
 * Event Photos
 * These are the photos from /public/images/event-photos that will be migrated to blob storage
 */
export const eventPhotos = {
  photo01: getBlobUrl("event-photo-01.jpg"),
  photo02: getBlobUrl("event-photo-02.jpg"),
  photo03: getBlobUrl("event-photo-03.jpg"),
  photo04: getBlobUrl("event-photo-04.jpg"),
  photo05: getBlobUrl("event-photo-05.jpg"),
  photo06: getBlobUrl("event-photo-06.jpg"),
  photo07: getBlobUrl("event-photo-07.jpg"),
  photo08: getBlobUrl("event-photo-08.jpg"),
  photo09: getBlobUrl("event-photo-09.jpg"),
  photo10: getBlobUrl("event-photo-10.jpg"),
  photo11: getBlobUrl("event-photo-11.jpg"),
  photo12: getBlobUrl("event-photo-12.jpg"),
  photo13: getBlobUrl("event-photo-13.jpg"),
  photo14: getBlobUrl("event-photo-14.jpg"),
  photo15: getBlobUrl("event-photo-15.jpg"),
  photo16: getBlobUrl("event-photo-16.jpg"),
  photo17: getBlobUrl("event-photo-17.jpg"),
  photo18: getBlobUrl("event-photo-18.jpg"),
  photo19: getBlobUrl("event-photo-19.jpg"),
  photo20: getBlobUrl("event-photo-20.jpg"),
  photo21: getBlobUrl("event-photo-21.jpg"),
  photo22: getBlobUrl("event-photo-22.jpg"),
  photo23: getBlobUrl("event-photo-23.jpg"),
  photo24: getBlobUrl("event-photo-24.jpg"),
  photo25: getBlobUrl("event-photo-25.jpg"),
  photo26: getBlobUrl("event-photo-26.jpg"),
  photo27: getBlobUrl("event-photo-27.jpg"),
  photo28: getBlobUrl("event-photo-28.jpg"),
  photo29: getBlobUrl("event-photo-29.jpg"),
  photo30: getBlobUrl("event-photo-30.jpg"),
  photo31: getBlobUrl("event-photo-31.jpg"),
  photo32: getBlobUrl("event-photo-32.jpg"),
  photo33: getBlobUrl("event-photo-33.jpg"),
  photo34: getBlobUrl("event-photo-34.jpg"),
  photo35: getBlobUrl("event-photo-35.jpg"),
  photo36: getBlobUrl("event-photo-36.jpg"),
  photo37: getBlobUrl("event-photo-37.jpg"),
  photo38: getBlobUrl("event-photo-38.jpg"),
  photo39: getBlobUrl("event-photo-39.jpg"),
  photo40: getBlobUrl("event-photo-40.jpg"),
  photo41: getBlobUrl("event-photo-41.jpg"),
  photo42: getBlobUrl("event-photo-42.jpg"),
  photo43: getBlobUrl("event-photo-43.jpg"),
  photo44: getBlobUrl("event-photo-44.jpg"),
  photo45: getBlobUrl("event-photo-45.jpg"),
  photo46: getBlobUrl("event-photo-46.jpg"),
  photo47: getBlobUrl("event-photo-47.jpg"),
  photo48: getBlobUrl("event-photo-48.jpg"),
  photo49: getBlobUrl("event-photo-49.jpg"),
};

/**
 * Array of all event photos (for galleries)
 */
export const eventPhotosArray = Object.values(eventPhotos);

/**
 * Export the base URL and helper function for custom use cases
 */
export { getBlobUrl, VERCEL_BLOB_BASE_URL };
