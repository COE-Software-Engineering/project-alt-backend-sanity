import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({
      name: 'courseName',
      title: 'CourseName',
      type: 'string',
    }),
    defineField({
      name: 'courseBio',
      title: 'Course Bio',
      type: 'string',
    }),
    defineField({
      name: 'courseImage',
      title: 'CourseImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'courseCode',
      title: 'Course Code',
      type: 'string',
    }),
    defineField({
      name: 'creditHours',
      title: 'Credit Hours',
      type: 'string',
    }),
    defineField({
      name: 'courseFiles',
      title: 'Course Files',
      type: 'array',
      of: [{type: 'file'}],
    }),
    defineField({
      name: 'userId',
      title: 'UserId',
      type: 'string',
    }),
  ],
})
