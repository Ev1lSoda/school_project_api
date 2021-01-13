import { EnumSex, EnumSubjects } from "./enums";

export default interface Teacher {
  teacherId?: number;
  age?: number;
  sex?: EnumSex;
  yearsOfExperience?: number;
  workedInUniversity?: number;
  canTeachSubjects?: EnumSubjects[];
  teacherName?: string;
}
