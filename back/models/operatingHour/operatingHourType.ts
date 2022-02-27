import { Model, Optional } from 'sequelize/types';

export interface OperatingHourAttributes {
  id?: number;
  // 위도, 경도
  placeId: number;
  default: string[];
  breakTime: string[];
  Monday: string[];
  Tuesday: string[];
  Wednesday: string[];
  Thursday: string[];
  Friday: string[];
  Saturday: string[];
  Sunday: string[];
}

interface OperatingHourCreationAttributes
  extends Optional<
    OperatingHourAttributes,
    | 'id'
    | 'breakTime'
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday'
  > {}

export interface OperatingHourInterface
  extends Model<OperatingHourAttributes, OperatingHourCreationAttributes>,
    OperatingHourAttributes {}
