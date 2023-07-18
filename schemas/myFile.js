import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'myFile',
  title: 'MyFile',
  type: 'document',
  fields: [
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'userId',
      title: 'UserId',
      type: 'string',
    }),
  ],
})
