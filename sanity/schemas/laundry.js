export default {
  name: "laundry",
  title: "Laundry",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name of item",
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
      name: "price",
      title: "Price of the item",
      type: "number",
    },
    {
      name: "image",
      title: "Image of the item",
      type: "image",
    },
  ],
};
