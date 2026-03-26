export type DocsSection =
  | "foundations"
  | "components"
  | "icons"
  | "utilities";

export function getSection(path: string | undefined): DocsSection {
  if (!path) return "foundations";

  const [dir] = path.split("/", 1);
  if (!dir) return "foundations";

  switch (dir) {
    case "components":
    case "icons":
    case "utilities":
      return dir;
    default:
      return "foundations";
  }
}
