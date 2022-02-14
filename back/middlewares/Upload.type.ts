import { Request } from 'express';
import multer, { FileFilterCallback } from 'multer';

export type DestinationCallback = (error: Error | null, destination: string) => void;
export type FileNameCallback = (error: Error | null, result: boolean) => void;
