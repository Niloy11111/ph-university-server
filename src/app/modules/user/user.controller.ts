import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserService } from './user.service';
const createStudent = catchAsync(async (req, res, next) => {
  //creating schema validation with zod

  const { password, student: studentData } = req.body;

  //data validation using joi
  // const { error, value } = studentValidationSchema.validate(studentData);

  // const result = await StudentServices.createStudentIntoDB(studentData);

  // if (error) {
  //   res.status(500).json({
  //     success: false,
  //     message: 'something wrong',
  //     error,
  //   });
  // }

  //data validation using zod
  //   const zodparsedData = studentValidationSchema.parse(studentData);

  const result = await UserService.createStudentIntoDB(password, studentData);

  // res.status(200).json({
  //   success: true,
  //   message: 'student is created',
  //   data: result,
  // });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student created successfully',
    data: result,
  });
});

export const UserControllers = {
  createStudent,
};
