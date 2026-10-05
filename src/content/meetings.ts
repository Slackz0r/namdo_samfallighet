export type MeetingProtocol = {
  id: number;
  title: string;
  date: string;

  pdfUrl: string;
};

export const meetingProtocols: MeetingProtocol[] = [
  {
    id: 1,
    title: "Ordinarie föreningsstämma",
    date: "2025-09-20",
    pdfUrl: "/documents/protocols/stammoprotokoll-2025-09-20.pdf",
  },
  {
    id: 2,
    title: "Ordinarie föreningsstämma",
    date: "2026-09-05",
    pdfUrl: "/documents/protocols/stammoprotokoll-2026-09-05.pdf",
  },
];
