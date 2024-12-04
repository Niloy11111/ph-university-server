import { Router } from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemister/academicSemester.route';
import { StudentRoutes } from '../modules/student/student.route';
import { UserRoutes } from '../modules/user/user.route';

const router = Router();

const modulesRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
];

// router.use('/users', UserRoutes);
// router.use('/students', StudentRoutes);

modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
