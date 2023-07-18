import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'lecturer',
  title: 'Lecturer',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
    }),
    defineField({
      name: 'staffId',
      title: 'Staff Id',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'string',
    }),
    defineField({
      name: 'avatarImage',
      title: 'AvatarImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'password',
      title: 'Password',
      type: 'string',
    }),
    defineField({
      name: 'officeNumber',
      title: 'OfficeNumber',
      type: 'string',
    }),
  ],
})
