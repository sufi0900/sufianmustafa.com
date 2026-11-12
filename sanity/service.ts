export const service = {
  name: "service",
  title: "Service Offering",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Service Title",
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
      title: "Badge / Tagline",
      type: "string",
    },
    {
      name: "price",
      title: "Investment / Price Range",
      type: "string",
    },
    {
      name: "cadence",
      title: "Timeline / Cadence",
      type: "string",
    },
    {
      name: "overview",
      title: "Overview",
      type: "text",
      rows: 3,
    },
    {
      name: "deliverables",
      title: "Deliverables",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "idealFor",
      title: "Ideal Client Profile",
      type: "text",
      rows: 2,
    },
    {
      name: "roi",
      title: "Expected ROI / Business Impact",
      type: "text",
      rows: 2,
    },
    {
      name: "content",
      title: "Detailed Description / Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
