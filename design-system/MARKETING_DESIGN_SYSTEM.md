# ESPEFAWIS Global Nig Ltd — Brand & Marketing Design System

A single source of truth for every marketing touchpoint: social media, digital ads, email,
print, and the website. Use it to keep the brand consistent, credible, and recognizable across
a full campaign.

- **Brand:** ESPEFAWIS Global Nig Ltd
- **Sector:** Agro‑allied / agricultural supply chain (Nigeria)
- **Website:** https://www.espefawis.com
- **Tokens:** `design-tokens.css` (CSS variables) · `design-tokens.json` (raw)

---

## 1. Brand Foundations

### Positioning
A premier agro‑allied and multi‑sector solutions firm **bridging the gap between the farm and the
wider economy** through reliable, sustainable supply chains.

### Brand personality
Trustworthy · Grounded · Forward‑looking · Warm · Professional. We sound like a dependable partner
who knows Nigerian agriculture deeply — confident but never corporate‑cold.

### Taglines
- **Primary:** *Bridging Farm & Economy*
- **Supporting:** *Building Reliable Agro Supply Chains for Nigeria*
- **Action:** *From Farm to Market, We Deliver Value*

### Messaging pillars
Every campaign asset should ladder up to one of these four pillars:

| Pillar | What it means | Sample headline |
|--------|---------------|-----------------|
| **Bridging Farm & Economy** | We connect farmers to markets and the wider economy | "From the field to the wider economy." |
| **Reliability & Quality** | Global‑standard, end‑to‑end, dependable | "Quality commodities, reliable supply." |
| **Sustainability & Impact** | Long‑term value for people and planet | "Growth that lasts — for farmers and the future." |
| **Partnership & Empowerment** | Collaboration with farmers, businesses, government | "Building strong relationships for sustainable growth." |

---

## 2. Logo

The leaf + "E" mark with the wordmark **ESPEFAWIS / GLOBAL NIG LTD**.

**Do**
- Keep clear space around the logo equal to the height of the leaf mark.
- Use the full‑color logo on white or very light (`--bg-subtle`) backgrounds.
- Use a white/knockout version on the green (`--bg-inverse`) or dark photo backgrounds.
- Maintain minimum size: **120px wide** (digital) / **25mm** (print).

**Don't**
- Don't stretch, rotate, recolor, or add effects (shadows/gradients) to the logo.
- Don't place the full‑color logo on busy photos without a solid chip behind it.
- Don't reconstruct the wordmark in another font.

---

## 3. Color

### Core palette

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| **Primary — Green** | `--primary` | `#1A5C2A` | Main brand color: headers, buttons, key fills, backgrounds |
| **Highlight — Bright green** | `--primary-emphasis` | `#5DC264` | Emphasis words on dark/photo backgrounds |
| **Accent — Gold** | `--accent` | `#8B7D3A` | Eyebrow labels, dividers, secondary accents |
| **CTA — Orange** | `--cta` | `#F5A623` | Promotions, "limited" badges, attention moments |
| **Ink** | `--text` | `#2C2C2C` | Body text |
| **Light surface** | `--bg-subtle` | `#F8F7F5` | Alternating section / card backgrounds |
| **White** | `--bg` | `#FFFFFF` | Primary background |

Full tints/shades (green 50–900, gold, orange, neutrals) are in `design-tokens.css`.

### Usage ratio (the 60‑30‑10 rule)
- **60%** neutral (white / `#F8F7F5`) — keeps assets clean and readable.
- **30%** brand green — anchors identity.
- **10%** gold + orange — accents only; never large text in these.

### Contrast & accessibility (WCAG)

| Pairing | Ratio | Verdict |
|---------|-------|---------|
| White text on Green `#1A5C2A` | ~8:1 | ✅ AAA — primary combo for dark sections |
| Green `#1A5C2A` text on White | ~8:1 | ✅ AAA — headings/links on light |
| Ink `#2C2C2C` on White | ~12:1 | ✅ AAA — body text |
| Bright green `#5DC264` on Green `#1A5C2A` | ~3:1 | ✅ large text/emphasis only |
| Gold `#8B7D3A` on White | ~3.9:1 | ⚠️ large text / UI only — not body copy |
| Orange `#F5A623` on White | ~1.9:1 | ❌ never for text — fills/icons with **dark** text only |

> Rule of thumb: **orange and gold are decoration, green and ink are communication.**

---

## 4. Typography

Two typefaces, both free on Google Fonts.

- **Headings — Merriweather** (serif, weight 700). Authority, warmth, credibility.
- **Body / UI — Inter** (sans, 400/500/600). Clarity and legibility.

### Type scale

| Style | Size | Font / Weight | Line height | Use |
|-------|------|---------------|-------------|-----|
| Display | 56px | Merriweather 700 | 1.15 | Hero / billboard headline |
| H1 | 40px | Merriweather 700 | 1.15 | Page / poster title |
| H2 | 32px | Merriweather 700 | 1.3 | Section title |
| H3 | 24px | Merriweather 700 | 1.3 | Card / sub‑section |
| Lead | 18px | Inter 400 | 1.6 | Intro paragraph |
| Body | 16px | Inter 400 | 1.6 | Default copy (min for mobile body) |
| Small | 14px | Inter 500 | 1.5 | Captions, labels |
| Eyebrow | 12px | Inter 600, UPPERCASE, +tracking | 1.4 | Section kicker (in gold/green) |

**Pairing pattern:** gold uppercase eyebrow → Merriweather headline → Inter body. (Seen across the site.)

---

## 5. Spacing & Layout

- **4px base unit.** Spacing scale: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96.
- **Section rhythm:** 64–96px vertical padding between major blocks.
- **Grid:** 12‑column on desktop, max content width ~1280px; single column on mobile.
- **Radius:** cards/inputs 12px, buttons 8px, pills/avatars full.
- **Elevation:** subtle green‑tinted shadows (`--shadow-sm/md/lg`) — never harsh black.
- **Generous whitespace.** Let imagery and headlines breathe; avoid clutter.

---

## 6. Iconography

- **Library:** [Lucide](https://lucide.dev) — one set, consistent stroke.
- **Stroke width:** 1.5–2px. **Sizes:** 16 / 20 / 24 / 32 (token‑based, no random values).
- Icons in **green** on light, **white** on dark. Avoid emoji as structural icons.
- Recurring motifs: sprout/leaf, truck, warehouse, shield‑check, store, handshake, package.

---

## 7. Imagery & Photography

The brand is photography‑led. Visuals carry the "authentic Nigerian agriculture" feeling.

**Style direction**
- **Authentic & local:** real Nigerian farms, farmers, crops, livestock, markets, logistics — not generic stock.
- **Warm, natural light:** golden‑hour fields, daylight operations.
- **Subjects:** crops (maize, rice, cassava, sesame, cocoa, cashew), livestock, harvest, warehousing,
  trucks/ports/export, people and partnerships.
- **Tone:** open, welcoming, optimistic, dignified. Show people and scale.

**Treatment**
- Full‑bleed photos with a **green‑to‑dark gradient overlay** when text sits on top
  (`from-black/65 → black/55`), so white text stays legible.
- Rounded corners (12px) for in‑card images; full‑bleed for heroes/banners.
- Keep a consistent, slightly warm color grade across a campaign.

**Avoid:** stiff corporate stock, heavy filters, cluttered compositions, low‑res or text‑baked images.

---

## 8. Voice & Tone

**Voice:** confident, clear, credible, warm. Plain English, short sentences, active verbs.

| Do | Don't |
|----|-------|
| "We connect farmers to reliable markets." | "We leverage synergistic agro‑ecosystems." |
| Lead with the benefit to the customer/farmer. | Lead with jargon or buzzwords. |
| Be specific ("end‑to‑end supply chain"). | Be vague ("solutions for everything"). |
| Sound human and proud of the work. | Sound cold or boastful. |

**Tone shifts by channel:** website/print = measured & authoritative; social = warmer & more
energetic; ads = punchy & benefit‑first.

---

## 9. Components (campaign building blocks)

### Buttons
| Variant | Fill | Text | Use |
|---------|------|------|-----|
| Primary | Green `#1A5C2A` | White | Main action ("Our Services", "Contact Us") |
| Secondary | White, green border | Green | Lower‑priority action |
| CTA / Promo | Orange `#F5A623` | Ink `#2C2C2C` | Limited‑time / attention ("Become a Partner") |

States: hover = darker fill + subtle lift; one **primary** action per layout.

### Cards
White surface, 1px `#E8E7E5` border, 12px radius, `--shadow-sm`, image on top, gold eyebrow →
H3 → body. Hover: lift + soft shadow.

### Badges / pills
Full‑radius. Use `--bg-subtle` with green text for neutral, orange for promo.

---

## 10. Per‑Channel Marketing Specs

> Safe area: keep text/logo within the centre 90%. Always end with one clear CTA + the URL
> **espefawis.com**.

### Social media

| Platform | Asset | Dimensions |
|----------|-------|-----------|
| Instagram | Feed (square) | 1080 × 1080 |
| Instagram / Facebook | Portrait | 1080 × 1350 |
| Instagram / WhatsApp | Story / Status | 1080 × 1920 |
| Facebook | Link/feed image | 1200 × 630 |
| Facebook | Cover | 1640 × 624 |
| LinkedIn | Feed image | 1200 × 627 |
| LinkedIn | Company banner | 1128 × 191 |
| X (Twitter) | In‑stream | 1600 × 900 |
| YouTube | Thumbnail | 1280 × 720 |

**Template recipe:** green or photo background → gold eyebrow → Merriweather headline (1 idea) →
short Inter sub‑line → logo (corner) → CTA chip. ≤ 12 words on a single graphic.

### Digital ads (Google Display)
Core sizes: **300×250, 336×280, 728×90, 300×600, 320×100, 320×50, 970×250.**
Headline ≤ 30 chars, description ≤ 90 chars, visible CTA button (green or orange), logo present.

### Email
- Width **600px**, single column, body text 16px Inter, headings Merriweather.
- Green header band with knockout logo; CTA as a green button (bulletproof/table button).
- Alt text on every image; legible without images loaded.

### Print (use CMYK + 3mm bleed)
| Asset | Size |
|-------|------|
| Business card | 85 × 55 mm |
| Flyer | A5 / A4 |
| Roll‑up banner | 850 × 2000 mm |
| Brochure | A4 tri‑fold |

Convert brand hexes to nearest CMYK at production; keep logo ≥ 25mm; embed/outline fonts.

---

## 11. Campaign Asset Checklist

Before publishing any asset, confirm:
- [ ] Uses brand green/gold/orange per the 60‑30‑10 ratio
- [ ] Merriweather headline + Inter body
- [ ] Logo present with clear space and correct color version
- [ ] Text meets contrast (white on green / ink on light) — no text in orange
- [ ] Authentic, on‑grade photography (no baked‑in text)
- [ ] One clear message + one CTA + **espefawis.com**
- [ ] Correct dimensions/safe area for the channel
- [ ] Matches voice & tone (clear, warm, credible)

---

## 12. Quick Reference

```
PRIMARY   #1A5C2A   green     headers, buttons, brand fills
HIGHLIGHT #5DC264   bright    emphasis words on dark
ACCENT    #8B7D3A   gold      eyebrows, dividers
CTA       #F5A623   orange    promos / attention (dark text only)
INK       #2C2C2C   text      body copy
SURFACE   #F8F7F5   off‑white alt sections
HEADINGS  Merriweather 700
BODY      Inter 400/500/600
TAGLINE   Bridging Farm & Economy
```
