import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { SemesterRegistrationControllers } from './semesterRegistration.controller';
import { SemesterRegsitrationValidation } from './semesterRegistration.validation';

const router = express.Router();

router.post(
  '/create-semester-registration',
  validateRequest(
    SemesterRegsitrationValidation.createSemesterRegistrationValidationSchema,
  ),
  SemesterRegistrationControllers.createSemesterRegistration,
);

router.get(
  '/:id',
  SemesterRegistrationControllers.getSingleSemesterRegistration,
);

router.patch(
  '/:id',
  validateRequest(
    SemesterRegsitrationValidation.updateSemesterRegistrationValidationSchema,
  ),
  SemesterRegistrationControllers.updateSemesterRegistration,
);

router.get('/', SemesterRegistrationControllers.getAllSemesterRegistrations);

// router.get('/', StudentControllers.getAllStudents);
// router.get('/:studentId', StudentControllers.getSingleStudent);
// router.delete('/:studentId', StudentControllers.deleteStudent);
export const SemesterRegistrationRoutes = router;
