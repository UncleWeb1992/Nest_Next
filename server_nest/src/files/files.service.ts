import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileEntity } from './entities/file.entity';
import { Repository } from 'typeorm';
import { FileType } from './entities/file.entity';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FileEntity)
    private repository: Repository<FileEntity>,
  ) {}

  async findAll(userId: number, fileType: FileType) {
    const qb = this.repository.createQueryBuilder('file');

    qb.where('file.userId = :userId', { userId });

    if (fileType === FileType.PHOTOS) {
      qb.andWhere('file.mimeType ILIKE :type', { type: '%image%' });
    } else if (fileType === FileType.TRASH) {
      qb.withDeleted().andWhere('file.deletedAt IS NOT NULL');
    }

    return qb.getMany();
  }

  async create(file: Express.Multer.File, userId: number) {
    const {
      filename: fileName,
      originalname: originalName,
      size,
      mimetype: mimeType,
    } = file;
    return this.repository.save({
      fileName,
      originalName,
      size,
      mimeType,
      user: { id: userId },
    });
  }

  async remove(userId: number, id: string) {
    const qb = this.repository.createQueryBuilder('file');

    qb.where('id = :id AND userId = :userId', {
      id,
      userId,
    });

    return qb.softDelete().execute();
  }
}
