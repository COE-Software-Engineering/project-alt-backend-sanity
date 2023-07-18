import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'student',
  title: 'Student',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
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
      name: 'indexNumber',
      title: 'Index Number',
      type: 'string',
    }),
    defineField({
      name: 'referenceNumber',
      title: 'Reference Number',
      type: 'string',
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
  ],
})
