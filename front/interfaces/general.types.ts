export type DateString = string;

export interface BaseModelType {
  id: number;
  createdAt: DateString;
  updatedAt: DateString;
  deletedAt?: DateString | null;
}
