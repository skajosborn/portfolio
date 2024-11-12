export async function uploadImage(file: File): Promise<string> {
  try {
    // Create FormData
    const formData = new FormData();
    formData.append('file', file);

    // Upload to our API endpoint
    const response = await fetch('/api/blogs/uploadImage', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload image');
    }

    const data = await response.json();
    return data.url;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
}