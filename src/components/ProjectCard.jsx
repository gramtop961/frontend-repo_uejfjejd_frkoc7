import { ExternalLink, FolderIcon } from "lucide-react";

export default function ProjectCard({ title, description, tags = [], href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative block rounded-xl border border-black/10 bg-white p-5 shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-white">
            <FolderIcon className="h-4 w-4 text-purple-600" />
          </span>
          <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        </div>
        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
      </div>
      <p className="mt-3 text-sm text-gray-600">{description}</p>
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full border border-black/10 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}
