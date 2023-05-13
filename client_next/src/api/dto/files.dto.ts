import { UserDto } from "./user.dto";

export interface FileItem {
  fileName: string;
  originalName: string;
  size: number;
  mimeType: string;
  user: UserDto;
  deletedAt: string | null;
  id: number;
}
