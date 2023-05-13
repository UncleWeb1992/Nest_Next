import { diskStorage } from 'multer';

type FileNameFuncType = (
  req: any,
  file: Express.Multer.File,
  callback: (error: Error | null, filename: string) => void,
) => void;

const randomId = () =>
  Array(18)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');

const normalizeFileName: FileNameFuncType = (req, file, cb) => {
  const fileExtName = file.originalname.split('.').pop();
  cb(null, `${randomId()}.${fileExtName}`);
};

export const fileStorage = diskStorage({
  destination: './uploads',
  filename: normalizeFileName,
});
