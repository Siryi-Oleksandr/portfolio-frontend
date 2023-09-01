import { toast } from 'react-hot-toast';
import { ChangeEvent } from 'react';

export function handleFormikImageUpload(
  event: ChangeEvent<HTMLInputElement>,
  formikProps: any,
  fieldFileName: string,
  funcSetFileState: (method: any) => void
) {
  const files = event.currentTarget.files;

  if (!files || files.length === 0) {
    toast.error('File not selected!');
    return;
  }

  const image = files[0];
  if (
    image.type !== 'image/png' &&
    image.type !== 'image/jpeg' &&
    image.type !== 'image/webp'
  ) {
    toast.error(
      `Invalid file format! Please choose a WEBP, PNG or JPEG image!`
    );
    return;
  }

  if (image.size >= 5000000) {
    toast.error(
      `Selected file is too large! Please select a file under 5MB in size!`
    );
    return;
  }

  if (image) {
    formikProps.setFieldValue(fieldFileName, image);
    funcSetFileState(URL.createObjectURL(image));
  }
}
