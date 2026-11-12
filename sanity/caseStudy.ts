export const caseStudy = {
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "badge",
      title: "Badge / Category",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 2,
    },
    {
      name: "clientOrPlatform",
      title: "Platform / Organization",
      type: "string",
    },
    {
      name: "externalUrl",
      title: "External Platform URL",
      type: "url",
    },
    {
      name: "metrics",
      title: "Key Metrics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "value", title: "Value", type: "string" },
          ],
        },
      ],
    },
    {
      name: "stack",
      title: "Technology Stack",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "content",
      title: "Case Study Body",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
