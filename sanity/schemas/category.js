export default {
  name: "category",
  title: "Menu Category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Category name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      title: "Short description",
      type: "string",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      title: "Image of Category",
      type: "image",
    },
  ],
  orderings: [
    {
      title: "Category name, New",
      name: "nameDesc",
      by: [{ field: "name", direction: "desc" }],
    },
  ],
};
