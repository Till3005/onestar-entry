const review = {
  subject: "Sleep",
  complaints: [
    "eight-hour install",
    "terrible boot time",
    "mine crashes every night around 3am",
  ],
  verdict: "One star",
};

const list = (items) => `${items.slice(0, -1).join(", ")}, and ${items.at(-1)}`;

const format = ({ subject, complaints, verdict }) =>
  `${subject}: ${list(complaints)}. ${verdict}.`;

const NEWLINE = "\n";

const render = (line) => `${line}${NEWLINE}`;

process.stdout.write(render(format(review)));
