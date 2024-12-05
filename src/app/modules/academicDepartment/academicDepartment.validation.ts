import { z } from 'zod';

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Department name must be a string',
      required_error: 'Name is requried',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic Department name must be a string',
      required_error: 'Faculty is requried',
    }),
  }),
});
const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Academic Department name must be a string',
        required_error: 'Name is requried',
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: 'Academic Department name must be a string',
        required_error: 'Faculty is requried',
      })
      .optional(),
  }),
});

export const AcademicDepartmentValidation = {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
};
