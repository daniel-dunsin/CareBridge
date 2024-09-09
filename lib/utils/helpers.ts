export const getBase64 = (file: File) => {
  return new Promise((resolve) => {
    let baseURL = "";
    let reader = new FileReader();

    // Convert the file to base64 text
    reader.readAsDataURL(file);

    reader.onload = () => {
      // @ts-ignore
      baseURL = reader.result;
      resolve(baseURL);
    };
  });
};
