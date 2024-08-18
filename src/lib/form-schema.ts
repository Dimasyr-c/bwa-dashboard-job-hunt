import { JOBTYPES } from "@/constants"
import { z } from "zod"

const JobFormSchema = z.object({
  roles: z.string({required_error : 'Job Title Is Required'}).min(3, {message: 'Job Title must be at least 3 Characters'}),
  jobtype: z.enum(JOBTYPES, {message: 'You need to select a job type'}),
  salaryFrom: z.string({required_error: 'Salary from is required'}),
  salaryTo: z.string({required_error: 'Salary To is required'}),
  categoryId: z.string({required_error: 'You need to select a Category'}),
  requiredSkills : z.string().array().nonempty({message:'Required skills must be at least 1 skills'}),
  jobDescription : z
    .string({required_error: 'Job description is required'})
    .min(10, {message : 'Job Description must be at least 10 Characters'}),
    Responsibility : z
    .string({required_error: 'Job description is required'})
    .min(10, {message : 'Job Description must be at least 10 Characters'}),
    whoYouAre : z
    .string({required_error: 'Job description is required'})
    .min(10, {message : 'Job Description must be at least 10 Characters'}),
    niceToHaves : z
    .string({required_error: 'Job description is required'})
    .min(10, {message : 'Job Description must be at least 10 Characters'}),
    benefits : z.object({
        benefit: z.string(),
        description: z.string(),
    }).array().nonempty({message: 'Benefits must be at least 1 Benefits'})
})
