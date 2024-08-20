import { EnumValues } from "zod";

export const JOBTYPES: EnumValues = [
    'Full time',
    'Part time',
    'Remote', 
    'Internship'
]

export const JOB_LISTING_COLUMNS: string[] = [
    'Roles',
    'Status',
    'Date Posted',
    'Due Dated',
    'Job Type',
    'Applicants',
    'Needs'
]

export const JOB_LISTING_DATA=[
    {
    roles: 'Software Engineer',
    status: 'Live',
    datePosted: '12 Aug 2024',
    dueDated: '12 Sept 2024',
    jobType: 'Full Time',
    applicants: 1,
    needs: 10
    }
]