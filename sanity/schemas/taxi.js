export default {
  name: "taxi",
  title: "Taxi",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name of taxi",
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
      title: "Price of the Taxi",
      type: "number",
    },
    {
      name: "image",
      title: "Image of the Taxi",
      type: "image",
    },
  ],
};
