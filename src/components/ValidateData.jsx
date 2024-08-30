export const validateData = (type, qrData) => {
    switch (type) {
      case 'url':
        return !!qrData.field_url; // Check if URL is present
      // Add other types and their validation rules here
      default:
        return true;
    }
  };
  