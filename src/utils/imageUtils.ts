export const getImagePath = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

// For Git LFS files like videos that might need special handling in production
export const getLFSFilePath = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Check if we're in production
  if (import.meta.env.PROD) {
    // You may need to adjust this URL based on your hosting setup
    // This is just an example structure for GitHub LFS
    return `https://media.githubusercontent.com/media/aSriram199/Avishkar/main/public/${cleanPath}`;
  }
  
  // Use standard path in development
  return `${import.meta.env.BASE_URL}${cleanPath}`;
}; 