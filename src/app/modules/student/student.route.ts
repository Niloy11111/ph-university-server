import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { StudentControllers } from './student-controller';
import { updateStudentValidationSchema } from './student.zod.validation';

const router = express.Router();

router.get('/', StudentControllers.getAllStudents);

router.get('/:studentId', StudentControllers.getSingleStudent);

router.patch(
  '/:studentId',
  validateRequest(updateStudentValidationSchema),
  StudentControllers.updateStudent,
);

router.delete('/:studentId', StudentControllers.deleteStudent);

export const StudentRoutes = router;
