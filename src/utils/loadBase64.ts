import uploadBase64 from './uploadBase64';

const loadbase64 = async () => {
  const file = await new Promise<File>((resolve) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = () => resolve(input.files![0]);
    input.click();
  });

  // insert image
  const data = await uploadBase64(file);

  return data?.data?.image?.url;
};

export default loadbase64;
