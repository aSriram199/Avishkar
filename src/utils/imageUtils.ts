export const getImagePath = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

// For Git LFS files like videos that might need special handling in production
export const getLFSFilePath = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Check if we're in production
  if (import.meta.env.PROD) {
    // Use direct path to the file in the dist folder
    return `/${cleanPath}`;
  }
  
  // Use standard path in development
  return `${import.meta.env.BASE_URL}${cleanPath}`;
}; 