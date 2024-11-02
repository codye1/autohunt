import { ChangeEvent } from 'react';

const convertFormDataToSearchParams = (e: ChangeEvent<HTMLFormElement>) => {
  const formData = new FormData(e.currentTarget);

  const params = new URLSearchParams();

  formData.forEach((value, key) => {
    if (value) {
      params.append(key, value.toString());
    }
  });

  return params;
};

export default convertFormDataToSearchParams;
