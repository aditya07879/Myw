@import "tailwindcss";
@import "tw-animate-css";

/* `dark:` is parked on a data attribute nothing sets, so a stray .dark class on
   <html> can no longer flip shadows white on the white page. */
@custom-variant dark (&:is([data-mode="dark"] *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent-hover: var(--accent-hover);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);

  /* neo-brutalist palette: use as bg-ink, border-ink, bg-brut-pink, ... */
  --color-ink: var(--ink);
  --color-brut-pink: #ff90e8;
  --color-brut-yellow: #ffc900;
  --color-brut-blue: #90a8ed;

  /* neo-brutalism = square corners everywhere (rounded-full is untouched) */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-xl: 0px;
  --radius-2xl: 0px;
  --radius-3xl: 0px;
  --radius-4xl: 0px;
}

/* ================= PALETTE =================
   White paper + black ink. `.dark` shares it so the background stays white.
   To bring a real dark mode back, split `:root, .dark` into two blocks. */
:root,
.dark {
  --radius: 0px;

  /* ink = border + hard-shadow colour, sh = shadow colour used by the pages */
  --ink: #000000;
  --sh: #000000;

  /* background grid: make --grid-line rgb(0 0 0) for full-black lines */
  --grid-line: rgb(0 0 0 / 0.18);
  --grid-size: 40px;

  --background: #ffffff;        /* white paper */
  --foreground: #000000;

  --card: #ffffff;
  --card-foreground: #000000;

  --popover: #ffffff;
  --popover-foreground: #000000;

  --primary: #000000;           /* black surfaces */
  --primary-foreground: #ffffff;

  --secondary: #ffc900;         /* yellow */
  --secondary-foreground: #000000;

  --muted: #ececec;
  --muted-foreground: #404040;

  --accent: #e6007e;            /* hot pink (readable as text on paper) */
  --accent-hover: #ff3da1;
  --accent-foreground: #ffffff;

  --destructive: #dc2626;

  --border: #000000;
  --input: #000000;
  --ring: #e6007e;

  --chart-1: #ff90e8;
  --chart-2: #ffc900;
  --chart-3: #90a8ed;
  --chart-4: #23a094;
  --chart-5: #ff7a00;

  --sidebar: #ffffff;
  --sidebar-foreground: #000000;
  --sidebar-primary: #000000;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #ffc900;
  --sidebar-accent-foreground: #000000;
  --sidebar-border: #000000;
  --sidebar-ring: #e6007e;
}

/*
  Accent themes. These are solid colours now: a gradient can't be used as a
  background-color, so the old gradient values did not work with bg-accent.
*/
[data-theme="pink"] {
  --accent: #e6007e;
  --accent-hover: #ff3da1;
  --accent-foreground: #ffffff;
  --ring: #e6007e;
}

[data-theme="purple"] {
  --accent: #7c3aed;
  --accent-hover: #9d6bf5;
  --accent-foreground: #ffffff;
  --ring: #7c3aed;
}

[data-theme="blue"] {
  --accent: #2563eb;
  --accent-hover: #5b8df0;
  --accent-foreground: #ffffff;
  --ring: #2563eb;
}

[data-theme="green"] {
  --accent: #16a34a;
  --accent-hover: #3fc872;
  --accent-foreground: #ffffff;
  --ring: #16a34a;
}

[data-theme="orange"] {
  --accent: #ea580c;
  --accent-hover: #f97d3a;
  --accent-foreground: #ffffff;
  --ring: #ea580c;
}

@layer base {
  html,
  body {
    @apply bg-background text-foreground min-h-screen;
  }

  html {
    scrollbar-color: var(--ink) var(--background);
  }

  /* white paper with black grid lines */
  body {
    background-image:
      linear-gradient(var(--grid-line) 1px, transparent 1px),
      linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
    background-size: var(--grid-size) var(--grid-size);
  }

  ::selection {
    background: #ffc900;
    color: #000000;
  }

  :focus-visible {
    outline: 3px dashed var(--accent);
    outline-offset: 3px;
  }

  .h1 {
    @apply text-[48px] xl:text-[80px] leading-[1.1] font-extrabold tracking-tight;
  }
  .h2 {
    @apply text-[36px] xl:text-[48px] leading-[1.1] font-extrabold tracking-tight;
  }
  .h3 {
    @apply text-[20px] xl:text-[24px] leading-[1.1] font-bold;
  }
}

/* ================= GLOBAL DEFAULTS FOR THE SHARED UI COMPONENTS =================
   These live in the components layer, so any Tailwind class you put on a
   component (like the ones on the resume, work and contact pages) still wins. */
@layer components {
  [data-slot="button"] {
    border: 2px solid var(--ink);
    box-shadow: 4px 4px 0 0 var(--ink);
    font-weight: 700;
    transition:
      translate 0.15s ease,
      box-shadow 0.15s ease,
      background-color 0.15s ease,
      color 0.15s ease;
  }
  [data-slot="button"]:hover:not(:disabled) {
    translate: 2px 2px;
    box-shadow: 2px 2px 0 0 var(--ink);
  }
  [data-slot="button"]:active:not(:disabled) {
    translate: 4px 4px;
    box-shadow: none;
  }

  [data-slot="input"],
  [data-slot="textarea"],
  [data-slot="select-trigger"] {
    border: 2px solid var(--ink);
    transition: box-shadow 0.15s ease;
  }
  [data-slot="input"],
  [data-slot="textarea"] {
    color: var(--primary-foreground);
  }
  [data-slot="input"]:focus,
  [data-slot="textarea"]:focus-visible,
  [data-slot="select-trigger"]:focus {
    box-shadow: 4px 4px 0 0 var(--ink);
  }

  [data-slot="select-content"],
  [data-slot="tooltip-content"] {
    border: 2px solid var(--ink);
    box-shadow: 4px 4px 0 0 var(--ink);
  }

  [data-slot="tabs-trigger"] {
    border: 2px solid var(--ink);
    box-shadow: 4px 4px 0 0 var(--ink);
  }
}

/* Button is rounded-full by default; this one rule squares it everywhere */
[data-slot="button"] {
  border-radius: 0;
}

/* ================= TEXT OUTLINE ================= */

.text-outline {
  -webkit-text-stroke: 2px var(--ink);
  -webkit-text-fill-color: transparent;
  text-shadow: 3px 3px 0 var(--accent);
}

.group:hover .text-outline {
  -webkit-text-stroke: 2px var(--accent);
  text-shadow: 3px 3px 0 var(--ink);
}

@media (hover: none) {
  .text-outline {
    -webkit-text-stroke: 2px var(--ink);
  }
}