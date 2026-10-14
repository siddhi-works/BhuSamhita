import { esc } from "./ui.js";

// Minimal, safe rendering of the assistant's plain-text answer (paragraphs, bullet lines, citations).
export function renderAnswer(text) {
  return esc(text).split(/\n{2,}/).map(block => {
    const lines = block.split("\n");
    const bullet = (l) => /^\s*[-*•]\s+/.test(l);
    const list = (ls) => `<ul>${ls.map(l => `<li>${l.replace(/^\s*[-*•]\s+/, "")}</li>`).join("")}</ul>`;
    if (lines.every(bullet)) return list(lines);
    if (lines.length > 1 && !bullet(lines[0]) && lines.slice(1).every(bullet)) return `<p>${lines[0]}</p>${list(lines.slice(1))}`;
    return `<p>${lines.join("<br>")}</p>`;
  }).join("").replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\[([^\]]+)\]/g, '<code class="cite">$1</code>');
}
