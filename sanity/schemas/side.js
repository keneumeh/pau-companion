export default {
  name: "side",
  title: "Side",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name of side",
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
      title: "Price of the side",
      type: "number",
    },
    {
      name: "image",
      title: "Image of the side",
      type: "image",
    },
  ],
};
