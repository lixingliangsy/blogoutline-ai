export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  "name": "BlogOutline AI",
  "slug": "blogoutline-ai",
  "tagline": "A blog outline in seconds",
  "description": "Turn a topic, audience, and tone into a publish-ready blog outline - hook, sections, examples, CTA. For writers and marketers who hate the blank page.",
  "toolTitle": "Generate your outline",
  "resultLabel": "Your outline",
  "ctaLabel": "Generate outline",
  "features": [
    "Hook + structure",
    "SEO section order",
    "Tone-aware",
    "Copy anywhere"
  ],
  "inputs": [
    {
      "key": "topic",
      "label": "Topic",
      "type": "input",
      "placeholder": "e.g. How to start a newsletter"
    },
    {
      "key": "audience",
      "label": "Audience",
      "type": "input",
      "placeholder": "e.g. Beginners"
    },
    {
      "key": "tone",
      "label": "Tone",
      "type": "select",
      "options": [
        "Friendly",
        "Professional",
        "Casual",
        "Authoritative"
      ]
    }
  ],
  "systemPrompt": "You are a blog outline assistant. Given a topic, audience, and tone, produce a 7-section outline: hook, why-it-matters, core method, example, mistakes, quick win, summary+CTA.",
  "pricing": [
    {
      "tier": "Free",
      "price": "$0",
      "desc": "5 outlines/month"
    },
    {
      "tier": "Plus",
      "price": "$9/mo",
      "desc": "Unlimited, export"
    },
    {
      "tier": "Team",
      "price": "$29/mo",
      "desc": "Bulk, brand voice, API"
    }
  ],
  mock: (inputs: Record<string, string>): string => {
  const topic = inputs['topic'] || 'How to start a newsletter'
  const audience = inputs['audience'] || 'Beginners'
  const tone = inputs['tone'] || 'Friendly'
  return `# Blog Outline: ${topic}
Audience: ${audience} | Tone: ${tone}

1. Hook - open with a relatable pain point
2. Why it matters now
3. The core method (3-5 steps)
4. A simple example
5. Common mistakes to avoid
6. Quick win to try today
7. Summary + CTA

---
(Mock outline. Add OPENAI_API_KEY for a topic-specific, SEO-aware outline.)`
  }
}
