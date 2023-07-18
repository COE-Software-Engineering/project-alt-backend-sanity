import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'string',
    }),
    defineField({
      name: 'userId',
      title: 'UserId',
      type: 'string',
    }),
  ],
})
