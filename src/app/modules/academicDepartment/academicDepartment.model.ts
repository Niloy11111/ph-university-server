import httpStatus from 'http-status';
import { model, Schema } from 'mongoose';
import { AppError } from '../../errors/AppError';
import { TAcademicDepartment } from './academicDepartment.interface';
const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
    },
  },
  {
    timestamps: true,
  },
);

academicDepartmentSchema.pre('save', async function (next) {
  const isDepartmentExist = await AcademicDepartment.findOne({
    name: this.name,
  });
  if (isDepartmentExist) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This department is already exist!',
    );
  }
  next();
});

// query middleware

// academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
//   const query = this.getQuery(); // get the {_id : 289374892343282394324} from update services

//   const isDepartmentExist = await AcademicDepartment.findOne(query);

//   if (!isDepartmentExist) {
//     // throw new Error('This department does not exist');
//     throw new AppError(httpStatus.NOT_FOUND, 'This department does not exist!');
//   }
//   next();
// });

export const AcademicDepartment = model<TAcademicDepartment>(
  'AcademicDepartment',
  academicDepartmentSchema,
);
