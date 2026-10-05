export const navigation = [
  ["01", "Products"],
  ["02", "Projects"],
  ["03", "About"],
  ["04", "Contact"],
] as const;

export const capabilities = [
  {
    number: "01",
    title: "Engineering",
    description:
      "Technical thinking built around precision, performance and the demands of real industrial environments.",
  },
  {
    number: "02",
    title: "Manufacturing",
    description:
      "From technical requirements to physical production, every stage is approached as part of one system.",
  },
  {
    number: "03",
    title: "Technology",
    description:
      "Practical technologies and engineered solutions designed to improve how complex systems perform.",
  },
] as const;

export const projects = [
  {
    number: "01",
    category: "Industrial Systems",
    title: "Precision in practice.",
    meta: "Engineering / Manufacturing",
  },
  {
    number: "02",
    category: "Technical Development",
    title: "Built around the problem.",
    meta: "Technology / Engineering",
  },
  {
    number: "03",
    category: "Manufacturing",
    title: "From concept to reality.",
    meta: "Manufacturing / Production",
  },
] as const;

export const products = [
  ["01", "Industrial Components"],
  ["02", "Technical Systems"],
  ["03", "Manufactured Solutions"],
  ["04", "Engineering Products"],
] as const;
