import { EnumSubjects } from "./enums";

export interface Lesson {
  subject: EnumSubjects;
  teacherId: number;
  classroomNum: number;
  lessonStart: string;
  lessonEnd: string;
  studentGroupId: number;
}
