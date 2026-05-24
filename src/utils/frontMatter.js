function parseScalar(value) {
  const trimmed = String(value ?? "").trim();

  if (!trimmed) return "";
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (trimmed === "null") return null;

  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    return trimmed
      .slice(1, -1)
      .split(",")
      .map((item) => parseScalar(item))
      .filter((item) => item !== "");
  }

  return trimmed;
}

function parseFrontMatterBlock(frontMatterText) {
  const data = {};
  let currentListKey = null;

  frontMatterText.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) return;

    const listItemMatch = line.match(/^\s*-\s+(.*)$/);
    if (listItemMatch && currentListKey) {
      data[currentListKey].push(parseScalar(listItemMatch[1]));
      return;
    }

    const keyValueMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!keyValueMatch) return;

    const [, key, value] = keyValueMatch;
    if (value === "") {
      data[key] = [];
      currentListKey = key;
      return;
    }

    data[key] = parseScalar(value);
    currentListKey = null;
  });

  return data;
}

export function parseFrontMatter(rawMarkdown) {
  const normalized = String(rawMarkdown ?? "").replace(/^\uFEFF/, "");
  const match = normalized.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);

  if (!match) {
    return {
      data: {},
      content: normalized.trim(),
    };
  }

  return {
    data: parseFrontMatterBlock(match[1]),
    content: normalized.slice(match[0].length).trim(),
  };
}
