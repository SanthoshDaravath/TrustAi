// ── DATA ──────────────────────────────────────────────────────────────────────
const tools = [
  {
    id: 1,
    name: "ChatGPT",
    emoji: "🤖",
    description: "Advanced conversational AI for answering questions, writing, coding, research, and much more.",
    category: "Text",
    popularity: 99,
    rank: 100,
    url: "https://chat.openai.com",
    pricing: "Freemium",
    pricingDetails: {
      free: "Free tier – GPT-3.5 with limited GPT-4o usage daily",
      paid: "ChatGPT Plus at $20/month – GPT-4o, faster responses, priority access",
      credits: null,
      enterprise: "ChatGPT Team & Enterprise plans available for organizations"
    },
    founded: "2022",
    company: "OpenAI",
    features: [
      "Natural language conversations & Q&A",
      "Code generation, debugging & explanation",
      "Essay, email & creative writing",
      "Image analysis with GPT-4o vision",
      "Custom GPTs & plugin ecosystem",
      "Web browsing & real-time search",
      "DALL·E image generation (Plus users)"
    ],
    pros: ["Best overall conversational AI", "Huge plugin & GPT ecosystem", "Free tier is very generous", "Constant model improvements"],
    cons: ["GPT-4o limited on free tier", "Can hallucinate facts", "Privacy concerns with data", "Paid plan needed for best results"],
    useCases: ["Writing & Editing", "Coding Help", "Research", "Customer Support", "Education", "Brainstorming"]
  },
  {
    id: 2,
    name: "Midjourney",
    emoji: "🎨",
    description: "Generates high-quality images from text prompts with artistic flair and stunning visual quality.",
    category: "Image",
    popularity: 95,
    rank: 98,
    url: "https://www.midjourney.com",
    pricing: "Paid",
    pricingDetails: {
      free: null,
      paid: "Basic $10/mo · Standard $30/mo · Pro $60/mo · Mega $120/mo",
      credits: null,
      enterprise: "Enterprise plan available on request for commercial teams"
    },
    founded: "2022",
    company: "Midjourney Inc.",
    features: [
      "Photorealistic & artistic image generation",
      "Style blending and remixing",
      "Upscaling & variations",
      "Pan, zoom, and outpainting",
      "Multi-prompting & weights",
      "Discord-based workflow with web access"
    ],
    pros: ["Highest image quality available", "Unique artistic styles", "Active community on Discord", "Regular model updates (V6)"],
    cons: ["No free tier", "Discord-only (web beta available)", "Limited control vs Stable Diffusion", "Copyright ambiguity"],
    useCases: ["Digital Art", "Marketing Visuals", "Book Covers", "Game Assets", "Social Media Content", "Concept Art"]
  },
  {
    id: 3,
    name: "GitHub Copilot",
    emoji: "💻",
    description: "AI coding assistant that suggests code completions in real-time inside your editor.",
    category: "Code",
    popularity: 92,
    rank: 97,
    url: "https://github.com/features/copilot",
    pricing: "Paid",
    pricingDetails: {
      free: "Free for verified students & open-source maintainers",
      paid: "Individual $10/mo · Business $19/user/mo · Enterprise $39/user/mo",
      credits: null,
      enterprise: "Enterprise plan with policy controls & audit logs"
    },
    founded: "2021",
    company: "GitHub / Microsoft",
    features: [
      "Real-time code completions in VS Code, JetBrains, Neovim",
      "Whole-function and file generation",
      "Copilot Chat – explain, refactor, fix bugs",
      "Pull request summaries",
      "Multi-language support (Python, JS, Java, etc.)",
      "Security vulnerability filtering"
    ],
    pros: ["Deeply integrated into VS Code", "Extremely fast completions", "Supports 40+ languages", "Improves over time"],
    cons: ["Paid after free trial", "Can suggest insecure code", "Requires internet connection", "Sometimes wrong suggestions"],
    useCases: ["Code Completion", "Refactoring", "Bug Fixing", "Documentation", "Unit Testing", "Learning to Code"]
  },
  {
    id: 4,
    name: "Claude",
    emoji: "✨",
    description: "Next-generation AI assistant for task automation, writing, analysis, and nuanced conversations.",
    category: "Text",
    popularity: 90,
    rank: 96,
    url: "https://claude.ai",
    pricing: "Freemium",
    pricingDetails: {
      free: "Free tier – Claude 3 Haiku with daily usage limits",
      paid: "Claude Pro $20/month – Claude 3.5 Sonnet & Opus, 5× more usage",
      credits: null,
      enterprise: "Claude for Enterprise with SSO, audit logs & custom pricing"
    },
    founded: "2023",
    company: "Anthropic",
    features: [
      "200K token context window (longest available)",
      "Document & PDF analysis",
      "Code generation and review",
      "Constitutional AI for safer outputs",
      "Nuanced long-form writing",
      "Projects for persistent memory"
    ],
    pros: ["Very long context window", "Excellent at nuanced writing", "Strong safety alignment", "Great for document analysis"],
    cons: ["No image generation", "Web search limited", "Free tier usage limits", "Fewer plugins than ChatGPT"],
    useCases: ["Long Document Analysis", "Legal Drafting", "Research Summaries", "Coding", "Creative Writing", "Customer Support"]
  },
  {
    id: 5,
    name: "Canva Magic Studio",
    emoji: "🖌️",
    description: "Suite of AI design tools integrated into Canva – generate images, text, and entire designs instantly.",
    category: "Design",
    popularity: 96,
    rank: 95,
    url: "https://www.canva.com/magic-studio",
    pricing: "Freemium",
    pricingDetails: {
      free: "Free Canva account includes limited Magic Studio credits",
      paid: "Canva Pro $14.99/mo – unlimited AI generations & premium assets",
      credits: "Free users get 50 AI credits/month for Magic features",
      enterprise: "Canva for Teams from $29.99/mo"
    },
    founded: "2023",
    company: "Canva",
    features: [
      "Magic Design – generate full designs from a prompt",
      "Text to Image generation built-in",
      "Magic Write – AI copywriting inside designs",
      "Background Remover with one click",
      "Magic Expand – outpainting for images",
      "Brand Kit with AI styling and consistency"
    ],
    pros: ["All-in-one design platform", "No design experience needed", "Huge template library", "Affordable Pro plan"],
    cons: ["AI image quality below Midjourney", "Free tier credit limits", "Limited fine-grained control", "Requires Canva account"],
    useCases: ["Social Media Posts", "Presentations", "Marketing Materials", "Logo Design", "Video Thumbnails", "Infographics"]
  },
  {
    id: 6,
    name: "Jasper",
    emoji: "📝",
    description: "AI copywriter for marketing teams to create high-quality content, ads, and campaigns at scale.",
    category: "Marketing",
    popularity: 88,
    rank: 95,
    url: "https://www.jasper.ai",
    pricing: "Paid",
    pricingDetails: {
      free: "7-day free trial available",
      paid: "Creator $49/mo · Pro $69/mo · Business custom pricing",
      credits: null,
      enterprise: "Business plan with API, custom AI training & dedicated support"
    },
    founded: "2021",
    company: "Jasper AI",
    features: [
      "50+ marketing-specific content templates",
      "Brand voice training for consistency",
      "SEO mode with SurferSEO integration",
      "Multi-language support (30+ languages)",
      "Campaigns with multi-asset creation",
      "AI image generation built-in"
    ],
    pros: ["Built for marketing teams", "Brand voice consistency", "SEO integration", "High-quality output templates"],
    cons: ["Expensive vs general AI tools", "No free tier (trial only)", "Overkill for individuals", "Requires learning curve"],
    useCases: ["Blog Posts", "Ad Copy", "Email Campaigns", "Social Media", "Product Descriptions", "Landing Pages"]
  },
  {
    id: 7,
    name: "Grammarly",
    emoji: "✅",
    description: "AI writing assistant that checks grammar, spelling, tone, and style across all your writing.",
    category: "Text",
    popularity: 97,
    rank: 94,
    url: "https://www.grammarly.com",
    pricing: "Freemium",
    pricingDetails: {
      free: "Free tier – basic grammar & spelling checks",
      paid: "Premium $12/mo · Business $15/member/mo",
      credits: null,
      enterprise: "Grammarly Business with team analytics & style guides"
    },
    founded: "2009",
    company: "Grammarly Inc.",
    features: [
      "Real-time grammar & spell checking",
      "Tone detection and adjustment",
      "Clarity and conciseness suggestions",
      "Plagiarism detection (Premium)",
      "GrammarlyGO – generative AI rewrites",
      "Browser extension, MS Word & Google Docs add-in"
    ],
    pros: ["Works everywhere via browser extension", "Excellent grammar accuracy", "Free tier is very useful", "Easy to use"],
    cons: ["Premium needed for advanced features", "Plagiarism checker is basic", "Sometimes over-suggests changes", "Text privacy concerns"],
    useCases: ["Academic Writing", "Email Writing", "Professional Documents", "Social Media Posts", "ESL Learners", "Content Writing"]
  },
  {
    id: 8,
    name: "Synthesia",
    emoji: "🎬",
    description: "Create professional AI videos from text with realistic human avatars in 120+ languages.",
    category: "Video",
    popularity: 85,
    rank: 94,
    url: "https://www.synthesia.io",
    pricing: "Paid",
    pricingDetails: {
      free: "Free demo video (1 video, limited customization)",
      paid: "Starter $22/mo · Creator $67/mo · Enterprise custom pricing",
      credits: null,
      enterprise: "Enterprise with custom avatars, API access & SSO"
    },
    founded: "2017",
    company: "Synthesia",
    features: [
      "140+ AI avatars (diverse & realistic)",
      "120+ language voice support",
      "Custom personal AI avatar creation",
      "Screen recorder integration",
      "Brand kit and video templates",
      "Closed captions auto-generation"
    ],
    pros: ["No camera or studio needed", "120+ languages supported", "Professional quality videos", "Great for training content"],
    cons: ["Expensive for heavy use", "Avatars can look uncanny", "Limited animation control", "Video length limits on Starter"],
    useCases: ["Corporate Training", "Product Demos", "E-Learning", "Marketing Videos", "Internal Communications", "YouTube Content"]
  },
  {
    id: 9,
    name: "Stable Diffusion",
    emoji: "🖼️",
    description: "Open-source image generation model that turns text prompts into detailed artwork and photos.",
    category: "Image",
    popularity: 91,
    rank: 93,
    url: "https://stability.ai",
    pricing: "Free",
    pricingDetails: {
      free: "Fully open-source – run locally on your own hardware for free",
      paid: "Stability AI API from $0.002/image via DreamStudio",
      credits: "DreamStudio offers pay-per-image credit system",
      enterprise: "Enterprise licensing available for commercial deployments"
    },
    founded: "2022",
    company: "Stability AI",
    features: [
      "Open-source – self-host on your own GPU",
      "Highly customizable with LoRAs & fine-tuning",
      "Inpainting & outpainting support",
      "ControlNet for precise compositional control",
      "Thousands of community models on Civitai",
      "No content restrictions when self-hosted"
    ],
    pros: ["Completely free locally", "Maximum creative control", "Huge community model ecosystem", "Privacy – no data sent externally"],
    cons: ["Requires decent GPU (8GB+ VRAM)", "Technical setup needed", "Lower out-of-box quality vs Midjourney", "Steep learning curve"],
    useCases: ["Digital Art", "Character Design", "Photo Editing", "Research", "Game Asset Generation", "Fine-tuned Custom Models"]
  },
  {
    id: 10,
    name: "Perplexity AI",
    emoji: "🔎",
    description: "AI-powered search engine that gives direct answers with cited sources in real-time.",
    category: "Text",
    popularity: 87,
    rank: 93,
    url: "https://www.perplexity.ai",
    pricing: "Freemium",
    pricingDetails: {
      free: "Free tier – unlimited searches with basic models",
      paid: "Perplexity Pro $20/month – GPT-4o, Claude, Gemini & Sonar models",
      credits: null,
      enterprise: "Enterprise plan for teams with SSO and admin controls"
    },
    founded: "2022",
    company: "Perplexity AI",
    features: [
      "Real-time web search with cited sources",
      "Multiple AI models (GPT-4o, Claude, Gemini)",
      "Follow-up questions & conversation threads",
      "File and image upload analysis",
      "Spaces for collaborative research",
      "Focus modes (Academic, YouTube, Reddit, etc.)"
    ],
    pros: ["Free with generous limits", "Always up-to-date with citations", "Multiple AI models on Pro", "Clean minimal interface"],
    cons: ["Less creative than ChatGPT", "Can misread sources", "No image generation", "Pro needed for advanced models"],
    useCases: ["Research", "Fact Checking", "News Summaries", "Academic Research", "Product Research", "Quick Answers"]
  },
  {
    id: 11,
    name: "Runway ML",
    emoji: "🎞️",
    description: "AI creative suite for video editing, generation, and visual effects without technical expertise.",
    category: "Video",
    popularity: 83,
    rank: 92,
    url: "https://runwayml.com",
    pricing: "Credits",
    pricingDetails: {
      free: "Free tier – 125 one-time credits on signup",
      paid: "Standard $15/mo · Pro $35/mo · Unlimited $95/mo",
      credits: "Credits consumed per generation (~5–10 credits per Gen-3 video)",
      enterprise: "Enterprise with custom pricing & dedicated API access"
    },
    founded: "2018",
    company: "Runway AI",
    features: [
      "Gen-3 Alpha – text-to-video & image-to-video",
      "Video inpainting & object removal",
      "Green screen & background removal",
      "Motion tracking and professional VFX",
      "Collaboration tools for creative teams",
      "Frame interpolation & slow motion"
    ],
    pros: ["Best-in-class video generation quality", "No technical skills needed", "Powerful built-in VFX tools", "Good free starter credits"],
    cons: ["Credits run out fast on heavy use", "Expensive for high-volume work", "Video length limited per generation", "Processing can be slow"],
    useCases: ["Film Production", "Social Media Videos", "Music Videos", "Advertising", "Content Creation", "VFX Prototyping"]
  },
  {
    id: 12,
    name: "Notion AI",
    emoji: "📋",
    description: "Built-in AI that helps you write, summarize, brainstorm, and manage knowledge inside Notion.",
    category: "Productivity",
    popularity: 89,
    rank: 92,
    url: "https://www.notion.so/product/ai",
    pricing: "Freemium",
    pricingDetails: {
      free: "20 free AI responses on any Notion plan",
      paid: "Notion AI add-on $10/member/mo (requires a Notion subscription)",
      credits: null,
      enterprise: "Included in Notion Enterprise with unlimited AI usage"
    },
    founded: "2023",
    company: "Notion",
    features: [
      "AI writing directly inside Notion pages",
      "Summarize long documents instantly",
      "Q&A over your entire workspace",
      "Auto-fill databases with AI",
      "Translation in 10+ languages",
      "Meeting notes and action item extraction"
    ],
    pros: ["Seamlessly integrated into Notion", "Great for existing Notion users", "Q&A over workspace is very powerful", "Supports all content types"],
    cons: ["Requires Notion subscription base plan", "Add-on cost on top of base plan", "Limited use outside Notion", "Only 20 free AI responses"],
    useCases: ["Note Taking", "Project Management", "Knowledge Base", "Meeting Notes", "Document Drafting", "Team Wikis"]
  },
  {
    id: 13,
    name: "ElevenLabs",
    emoji: "🎙️",
    description: "Hyper-realistic AI voice generator for audiobooks, podcasts, and voice-overs in any language.",
    category: "Audio",
    popularity: 86,
    rank: 91,
    url: "https://elevenlabs.io",
    pricing: "Freemium",
    pricingDetails: {
      free: "Free tier – 10,000 characters/month",
      paid: "Starter $5/mo · Creator $22/mo · Pro $99/mo",
      credits: "Characters consumed per generation",
      enterprise: "Enterprise with custom voice cloning & dedicated API"
    },
    founded: "2022",
    company: "ElevenLabs",
    features: [
      "Ultra-realistic AI voice synthesis",
      "Voice cloning from a 1-minute audio sample",
      "29+ languages supported",
      "Emotion and pacing fine-grained control",
      "Video dubbing – translate & re-voice videos",
      "Projects for long-form audiobook production"
    ],
    pros: ["Most realistic AI voices available", "Voice cloning is impressive", "Generous free tier", "Dubbing feature is unique"],
    cons: ["Character limits on all tiers", "Cloned voices raise ethical concerns", "High-quality voices cost more", "Voice consistency can vary"],
    useCases: ["Audiobooks", "Podcasts", "YouTube Voice-Overs", "E-Learning", "Game Characters", "Accessibility Tools"]
  },
  {
    id: 14,
    name: "DALL·E 3",
    emoji: "🌈",
    description: "OpenAI's most advanced image generation model, tightly integrated with ChatGPT for natural prompting.",
    category: "Image",
    popularity: 93,
    rank: 91,
    url: "https://openai.com/dall-e-3",
    pricing: "Credits",
    pricingDetails: {
      free: "Available via free ChatGPT with very limited generations",
      paid: "Included in ChatGPT Plus $20/mo with higher limits",
      credits: "API: $0.04–$0.12 per image depending on size & quality",
      enterprise: "Available via OpenAI API for enterprise-scale usage"
    },
    founded: "2023",
    company: "OpenAI",
    features: [
      "Natural language prompting via ChatGPT",
      "High prompt adherence & detail accuracy",
      "Multiple styles: photorealistic, painting, cartoon",
      "Safe content policies built-in",
      "API access for developers and businesses",
      "Inpainting via ChatGPT canvas"
    ],
    pros: ["Best prompt understanding of any image AI", "Easily accessible via ChatGPT", "Great for accurate illustrations", "Fast generation speed"],
    cons: ["Strict content moderation", "No fine-tuning or LoRA support", "API credit costs add up", "Lower artistic uniqueness vs Midjourney"],
    useCases: ["Blog Illustrations", "Social Media Images", "Children's Books", "Product Mockups", "Presentations", "Marketing Visuals"]
  },
  {
    id: 15,
    name: "Cursor",
    emoji: "⚡",
    description: "AI-first code editor built on VS Code that understands your entire codebase and writes full features.",
    category: "Code",
    popularity: 88,
    rank: 90,
    url: "https://cursor.sh",
    pricing: "Freemium",
    pricingDetails: {
      free: "Free tier – 2,000 completions & 50 slow premium requests/month",
      paid: "Pro $20/mo – 500 fast premium requests · Business $40/user/mo",
      credits: null,
      enterprise: "Business plan with privacy mode & centralized team billing"
    },
    founded: "2023",
    company: "Anysphere",
    features: [
      "Codebase-aware AI completions",
      "Composer – write multi-file features from a single prompt",
      "Chat with your code and documentation",
      "Auto-apply bug fixes from terminal errors",
      "Built on VS Code – all extensions compatible",
      "Privacy mode – no code stored on servers"
    ],
    pros: ["Understands full codebase context", "Composer for large feature generation", "Built on VS Code", "Privacy mode available"],
    cons: ["Premium requests limited on free tier", "Can make large unwanted changes", "Subscription required for best models", "Heavy resource usage"],
    useCases: ["Full-Stack Development", "Codebase Refactoring", "Bug Fixing", "New Feature Development", "Code Review", "Learning Code"]
  },
  {
    id: 16,
    name: "Copy.ai",
    emoji: "🗒️",
    description: "AI marketing platform that automates content creation for social posts, emails, and blogs.",
    category: "Marketing",
    popularity: 82,
    rank: 90,
    url: "https://www.copy.ai",
    pricing: "Freemium",
    pricingDetails: {
      free: "Free forever plan – 2,000 words/month",
      paid: "Pro $49/mo · Team $249/mo",
      credits: null,
      enterprise: "Enterprise with custom workflows, API & dedicated support"
    },
    founded: "2020",
    company: "Copy.ai",
    features: [
      "90+ marketing copywriting templates",
      "Workflows – automate full content pipelines",
      "Chat interface for free-form copy generation",
      "Brand voice settings for consistency",
      "Multi-language support",
      "Team collaboration features"
    ],
    pros: ["Free plan available", "Many templates for marketing", "Workflow automation is powerful", "Very easy to use"],
    cons: ["Free plan word limit is very low", "Less powerful than Jasper for enterprises", "Quality varies by template", "Limited SEO features"],
    useCases: ["Social Media Captions", "Email Subject Lines", "Product Descriptions", "Ad Copy", "Blog Intros", "Sales Emails"]
  }
];

// ── STATE ─────────────────────────────────────────────────────────────────────
let activeCategory = "All";
let activePricing  = "All";
let searchQuery    = "";
let sortMode       = "rank";

// ── DOM REFS ──────────────────────────────────────────────────────────────────
const toolGrid      = document.getElementById("toolGrid");
const emptyState    = document.getElementById("emptyState");
const resultsInfo   = document.getElementById("resultsInfo");
const sortSelect    = document.getElementById("sortSelect");
const heroSearch    = document.getElementById("heroSearch");
const heroSearchBtn = document.getElementById("heroSearchBtn");
const navSearch     = document.getElementById("navSearch");
const resetBtn      = document.getElementById("resetBtn");
const catPills      = document.querySelectorAll("#catPills .pill");
const pricePills    = document.querySelectorAll(".price-pill");
const toast         = document.getElementById("toast");

// modal refs
const modalOverlay = document.getElementById("modalOverlay");
const modalClose   = document.getElementById("modalClose");

// ── PRICING BADGE CONFIG ──────────────────────────────────────────────────────
const pricingConfig = {
  Free:      { label: "🆓 Free",         cls: "price-free"     },
  Freemium:  { label: "⚡ Freemium",     cls: "price-freemium" },
  Paid:      { label: "💳 Paid",         cls: "price-paid"     },
  Credits:   { label: "🪙 Credit-Based", cls: "price-credits"  }
};

// ── FILTER ────────────────────────────────────────────────────────────────────
function getFiltered() {
  return tools.filter(t => {
    const matchCat   = activeCategory === "All" || t.category === activeCategory;
    const matchPrice = activePricing  === "All" || t.pricing  === activePricing;
    const q          = searchQuery.toLowerCase();
    const matchQ     = !q ||
      t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q) ||
      t.pricing.toLowerCase().includes(q);
    return matchCat && matchPrice && matchQ;
  });
}

function getSorted(list) {
  return [...list].sort((a, b) => {
    if (sortMode === "rank")       return b.rank - a.rank;
    if (sortMode === "rankAsc")    return a.rank - b.rank;
    if (sortMode === "popularity") return b.popularity - a.popularity;
    if (sortMode === "name")       return a.name.localeCompare(b.name);
    return 0;
  });
}

// ── RENDER CARDS ─────────────────────────────────────────────────────────────
function renderCards() {
  const filtered = getSorted(getFiltered());
  toolGrid.innerHTML = "";

  if (filtered.length === 0) {
    emptyState.classList.remove("hidden");
    resultsInfo.textContent = "No results found.";
    return;
  }

  emptyState.classList.add("hidden");
  resultsInfo.textContent = `Showing ${filtered.length} of ${tools.length} tools`;

  filtered.forEach((tool, idx) => {
    const pc = pricingConfig[tool.pricing] || pricingConfig.Paid;

    const card = document.createElement("div");
    card.className = "tool-card";
    card.setAttribute("data-cat", tool.category);
    card.setAttribute("data-id", tool.id);

    card.style.opacity   = "0";
    card.style.transform = "translateY(16px)";
    card.style.transition = `opacity .4s ease ${idx * 0.04}s, transform .4s ease ${idx * 0.04}s, background .25s, border-color .25s, box-shadow .25s`;

    card.innerHTML = `
      <div class="tool-thumb">${tool.emoji}</div>
      <div class="tool-info">
        <div class="tool-name-row">
          <span class="tool-name">${tool.name}</span>
          <span class="tool-rank">RANK <span>#${tool.rank}</span></span>
        </div>
        <p class="tool-desc">${tool.description}</p>
        <div class="tool-meta">
          <div class="col">
            <span class="label">Category</span>
            <span class="cat-badge cat-${tool.category}">${tool.category}</span>
          </div>
          <div class="col">
            <span class="label">Pricing</span>
            <span class="price-badge ${pc.cls}">${pc.label}</span>
          </div>
          <div class="col">
            <span class="label">Popularity</span>
            <span class="value">${tool.popularity}</span>
          </div>
          <div class="col pop-bar-wrap">
            <span class="label">&nbsp;</span>
            <div class="pop-bar-bg">
              <div class="pop-bar-fill" data-pop="${tool.popularity}" style="width:0%"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="details-btn">Details</button>
        <a class="visit-btn" href="${tool.url}" target="_blank" rel="noopener noreferrer">Visit</a>
      </div>
    `;

    // Click anywhere on card (except Visit) → open modal
    card.addEventListener("click", (e) => {
      if (e.target.closest(".visit-btn")) {
        showToast("Opening " + tool.name + "…");
        return;
      }
      openModal(tool.id);
    });

    toolGrid.appendChild(card);

    requestAnimationFrame(() => {
      card.style.opacity   = "1";
      card.style.transform = "translateY(0)";
    });

    setTimeout(() => {
      const bar = card.querySelector(".pop-bar-fill");
      if (bar) bar.style.width = bar.dataset.pop + "%";
    }, 100 + idx * 40);
  });
}

// ── MODAL ─────────────────────────────────────────────────────────────────────
function openModal(id) {
  const tool = tools.find(t => t.id === id);
  if (!tool) return;

  const pc = pricingConfig[tool.pricing] || pricingConfig.Paid;

  document.getElementById("mEmoji").textContent = tool.emoji;
  document.getElementById("mName").textContent  = tool.name;
  document.getElementById("mRank").innerHTML    = `RANK <strong>#${tool.rank}</strong>`;
  document.getElementById("mDesc").textContent  = tool.description;
  document.getElementById("mVisitBtn").href     = tool.url;

  // badges
  document.getElementById("mBadges").innerHTML = `
    <span class="cat-badge cat-${tool.category}">${tool.category}</span>
    <span class="price-badge ${pc.cls}">${pc.label}</span>
  `;

  // pricing breakdown
  const pd = tool.pricingDetails;
  let pricingHTML = `<h3>💰 Pricing Breakdown</h3><div class="pricing-tiers">`;
  if (pd.free)       pricingHTML += `<div class="tier tier-free"><span class="tier-icon">🆓</span><div><strong>Free</strong><p>${pd.free}</p></div></div>`;
  if (pd.paid)       pricingHTML += `<div class="tier tier-paid"><span class="tier-icon">💳</span><div><strong>Paid</strong><p>${pd.paid}</p></div></div>`;
  if (pd.credits)    pricingHTML += `<div class="tier tier-credits"><span class="tier-icon">🪙</span><div><strong>Credits</strong><p>${pd.credits}</p></div></div>`;
  if (pd.enterprise) pricingHTML += `<div class="tier tier-enterprise"><span class="tier-icon">🏢</span><div><strong>Enterprise</strong><p>${pd.enterprise}</p></div></div>`;
  pricingHTML += `</div>`;
  document.getElementById("mPricing").innerHTML = pricingHTML;

  // stats
  document.getElementById("mStats").innerHTML = `
    <div class="stat-box"><div class="stat-val">${tool.popularity}<span>/100</span></div><div class="stat-lbl">Popularity</div></div>
    <div class="stat-box"><div class="stat-val">#${tool.rank}</div><div class="stat-lbl">Rank</div></div>
    <div class="stat-box"><div class="stat-val">${tool.founded}</div><div class="stat-lbl">Founded</div></div>
    <div class="stat-box"><div class="stat-val" style="font-size:.8rem;line-height:1.3">${tool.company}</div><div class="stat-lbl">Company</div></div>
  `;

  // features
  document.getElementById("mFeatures").innerHTML = tool.features.map(f => `<li>${f}</li>`).join("");

  // pros & cons
  document.getElementById("mPros").innerHTML = tool.pros.map(p => `<li>${p}</li>`).join("");
  document.getElementById("mCons").innerHTML = tool.cons.map(c => `<li>${c}</li>`).join("");

  // use cases
  document.getElementById("mUseCases").innerHTML = tool.useCases.map(u => `<span class="use-tag">${u}</span>`).join("");

  modalOverlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.add("hidden");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

// ── TOAST ─────────────────────────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add("hidden"), 2500);
}

// ── EVENTS ────────────────────────────────────────────────────────────────────

// category pills
catPills.forEach(pill => {
  pill.addEventListener("click", () => {
    catPills.forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    activeCategory = pill.dataset.cat;
    renderCards();
  });
});

// pricing pills
pricePills.forEach(pill => {
  pill.addEventListener("click", () => {
    pricePills.forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    activePricing = pill.dataset.price;
    renderCards();
  });
});

// sort
sortSelect.addEventListener("change", () => {
  sortMode = sortSelect.value;
  renderCards();
});

// hero search
heroSearchBtn.addEventListener("click", () => {
  searchQuery = heroSearch.value.trim();
  renderCards();
});
heroSearch.addEventListener("keydown", e => {
  if (e.key === "Enter") { searchQuery = heroSearch.value.trim(); renderCards(); }
});
heroSearch.addEventListener("input", () => {
  searchQuery = heroSearch.value.trim();
  renderCards();
});

// nav search
navSearch.addEventListener("input", () => {
  searchQuery = navSearch.value.trim();
  heroSearch.value = navSearch.value;
  renderCards();
});

// reset
resetBtn.addEventListener("click", () => {
  searchQuery    = "";
  activeCategory = "All";
  activePricing  = "All";
  sortMode       = "rank";
  heroSearch.value = "";
  navSearch.value  = "";
  sortSelect.value = "rank";
  catPills.forEach(p   => p.classList.toggle("active", p.dataset.cat   === "All"));
  pricePills.forEach(p => p.classList.toggle("active", p.dataset.price === "All"));
  renderCards();
});

// nav links
document.getElementById("navCategories").addEventListener("click", e => {
  e.preventDefault();
  document.querySelector(".pill-row").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("navTop").addEventListener("click", e => {
  e.preventDefault();
  sortMode = "rank"; sortSelect.value = "rank";
  activeCategory = "All";
  catPills.forEach(p => p.classList.toggle("active", p.dataset.cat === "All"));
  document.getElementById("featured").scrollIntoView({ behavior: "smooth" });
  renderCards();
});

// ── INIT ──────────────────────────────────────────────────────────────────────
renderCards();
