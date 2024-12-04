import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemister.interface';
import { AcademicSemester } from './academicSemister.model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  // vaiya TAcademicSemesterCode import kore pelse video 12.7 a

  // academicSemesterNameCodeMapper['Fall'] = 3
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
};
