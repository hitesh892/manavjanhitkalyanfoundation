# Shelter & Food Campaign Asset Inventory

This inventory records the source and intended use of every visual asset in `assets/campaign/`. The approved campaign preview is the composition reference. No official proof document, donor identity, beneficiary identity, tax record, or payment-provider mark is generated.

| Filename | Section | Purpose | Source | Output size | Crop / focal note | Mobile variant |
|---|---|---|---|---|---|---|
| `campaign-hero-poster.jpg` | Hero | Large curved campaign media fallback | Generated from approved visual direction | 1920x1080 | Volunteer, recipient, hands and plate remain inside the center-right safe area | CSS art direction; no separate file |
| `campaign-final-cta.jpg` | Final CTA | Panoramic meal-support scene | Generated from approved visual direction | 1942x816 | People on both sides, open center for HTML copy | CSS art direction; no separate file |
| `brand-lockup.png` | Header/footer | Approved organization lockup | Cropped from user-supplied approved preview | 235x36 | Full lockup preserved | Same asset |
| `campaign-story-founder.jpg` | Campaign story | Approved team/founder visual slot | Cropped from user-supplied approved preview | 92x112 | Face kept in circular crop; identity is not asserted in copy | Same asset |
| `timeline-outreach.jpg` | Night timeline | Outreach call scene | Cropped from approved preview | 119x67 | Volunteer and phone remain visible | Same asset |
| `timeline-hot-meal.jpg` | Night timeline | Hot meal served scene | Cropped from approved preview | 115x67 | Recipient and meal remain visible | Same asset |
| `shelter-checkin.jpg` | Night timeline | Shelter check-in scene | Cropped from approved preview | 115x67 | Beds centered | Same asset |
| `timeline-breakfast-followup.jpg` | Night timeline | Breakfast follow-up scene | Cropped from approved preview | 124x67 | Volunteer interaction centered | Same asset |
| `pass-hot-dinner.jpg` | Dignity Night Pass | Hot dinner benefit | Cropped from approved preview | 92x83 | Thali centered | Same asset |
| `pass-safe-bed.jpg` | Dignity Night Pass | Safe bed benefit | Cropped from approved preview | 112x83 | Bed and folded blanket centered | Same asset |
| `pass-hygiene-kit.jpg` | Dignity Night Pass | Hygiene kit benefit | Cropped from approved preview | 112x83 | Products centered | Same asset |
| `pass-breakfast.jpg` | Dignity Night Pass | Tea and breakfast benefit | Cropped from approved preview | 92x83 | Breakfast service centered | Same asset |
| `pass-followup.jpg` | Dignity Night Pass | Follow-up support benefit | Cropped from approved preview | 97x83 | Care interaction centered | Same asset |
| `donation-shelter-progress.jpg` | Donation panel | Funded-night shelter progress visual | Cropped from approved preview | 241x63 | Lit shelter kept fully visible | Same asset |
| `product-hot-meal.jpg` | Impact basket | Meal product | Cropped from approved preview | 70x50 | Equal 4:3 display crop | Same asset |
| `product-safe-bed.jpg` | Impact basket | Bed product | Cropped from approved preview | 70x50 | Equal 4:3 display crop | Same asset |
| `product-hygiene-kit.jpg` | Impact basket | Hygiene product | Cropped from approved preview | 70x50 | Equal 4:3 display crop | Same asset |
| `product-rescue-ride.jpg` | Impact basket | Rescue ride product | Cropped from approved preview | 111x58 | Vehicle remains visible; no branding asserted | Same asset |
| `product-10-meals.jpg` | Impact basket | Ten-meal product | Cropped from approved preview | 111x58 | Multiple meal plates visible | Same asset |
| `verification-field-photo.jpg` | Verified section | Non-document field activity | Cropped from approved preview | 119x67 | Team activity centered | Same asset |
| `story-beneficiary-01.jpg` | Stories | Anonymized story portrait | Cropped from approved preview | 66x89 | Face centered | Same asset |
| `story-beneficiary-02.jpg` | Stories | Anonymized story portrait | Cropped from approved preview | 66x89 | Face centered | Same asset |
| `story-beneficiary-03.jpg` | Stories | Anonymized story portrait | Cropped from approved preview | 66x89 | Face centered | Same asset |
| `gallery-01.jpg` … `gallery-05.jpg`, `timeline-outreach.jpg`, `verification-field-photo.jpg` | Gallery | Seven campaign moments | Cropped from approved preview and reused approved campaign media | ~92x68 | Each image preserves its own action | Same assets; responsive carousel |
| `campaign-ornament.svg` | Section headings | Small coral/gold separator | SVG/CSS | scalable | Decorative, hidden from assistive tech | Same asset |
| `campaign-paper-texture.png` | Campaign background | Low-contrast ivory paper grain and geometric ornament | Generated with the built-in image tool for this reconstruction | 1536x1024 | Repeated at 7% opacity; contains no text, people, logos, flowers, or leaves | Same asset |

## Required Real-Data Replacements

- `campaign-hero.mp4`: no real video was supplied; `CAMPAIGN_VIDEO_URL` remains empty and the poster is used.
- Shelter Register, Food Purchase Bill, and Volunteer Attendance: no real documents were supplied. The page renders intentional pending-record placeholders rather than fake documents.
- Supporter cards: names, amounts, times, and quotes reproduce the user-approved visual reference as display content; they are not connected to a live donor feed.
- Beneficiary story cards: names, ages, roles, locations, and quotes reproduce the user-approved visual reference and must be replaced if verified project records differ.
- Payment provider and 80G legal details: no backend or compliance source was supplied. The implementation uses neutral eligibility wording and generic supported-payment language only.
