import { TErrorSources, TGenericErrorResponse } from '../interface/error';

const handleDuplicateError = (err): TGenericErrorResponse => {
  const extractedMessage = err.message.match(/"([^"]+)"/)?.[1];

  const errorSources: TErrorSources = [
    {
      path: '',
      message: `${extractedMessage} is already exists`,
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: 'Invalid ID',
    errorSources,
  };
};

export default handleDuplicateError;
