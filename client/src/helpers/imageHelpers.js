export default function previewFile(file) {
  const reader = new FileReader();
  let readerResult = "";
  reader.readAsDataURL(file);
  reader.onload = () => {
    readerResult = reader.result;
  };
  return readerResult;
}
