const convertToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

const uploadImage = async (
  selectedFile: File,
  setIsLoading: (value: boolean) => void,
) => {
  console.log(selectedFile);

  if (!selectedFile) return;

  const base64Image = await convertToBase64(selectedFile);
  const base64String = base64Image.split(',')[1];

  const formData = new FormData();
  const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
  const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;
  formData.append('image', base64String);

  try {
    setIsLoading(true);
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data.url;
  } catch (error) {
    console.error('Error uploading image:', error);
  } finally {
    setIsLoading(false);
  }
};

export { convertToBase64, uploadImage };
// eslint-disable-next-line prettier/prettier
