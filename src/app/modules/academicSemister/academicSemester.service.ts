import { TAcademicSemester } from './academicSemister.interface';
import { AcademicSemester } from './academicSemister.model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  // vaiya TAcademicSemesterCode import kore pelse video 12.7 a
  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
};
