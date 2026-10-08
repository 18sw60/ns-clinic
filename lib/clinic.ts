export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
export const business = {
  name: "NS Clinic",
  phone: "07453 296000",
  internationalPhone: "+447453296000",
  whatsapp: "447453296000",
  address: [
    "Swinnow Crescent",
    "Stanningley",
    "Pudsey",
    "Leeds",
    "LS28 6NZ",
    "United Kingdom",
  ],
  googlePlaceId: "ChIJRVzluXm1e0gRtuBS9_tnojw",
  googleRating: 5.0,
  googleReviewCount: 18,
  treatwellRating: 5.0,
  treatwellReviewCount: 14,
  verifiedOn: "2026-10-08",
  treatwellURL: "https://www.treatwell.co.uk/place/ns-clinic/",
  bookingURL: "https://www.treatwell.co.uk/place/ns-clinic/",
  googleMapsURL:
    "https://www.google.com/maps/search/?api=1&query=NS+Clinic+Swinnow+Crescent+Stanningley+Pudsey+Leeds+LS28+6NZ&query_place_id=ChIJRVzluXm1e0gRtuBS9_tnojw",
  mapEmbedURL:
    "https://www.google.com/maps?q=NS+Clinic,+Swinnow+Crescent,+Leeds+LS28+6NZ&output=embed",
  practitioner: { name: "Rosa", title: "Your practitioner" },
  openingHours: "Contact us for current appointment availability",
  siteURL: "https://ns-clinic-bradford.netlify.app",
  publicLaunch: false,
};
export const BOOKING_URL = business.bookingURL;
export const whatsapp = (t?: string) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(t ? `Hi NS Clinic, I'm interested in ${t} and would like some more information.` : "Hi NS Clinic, I'm interested in one of your treatments and would like some more information.")}`;
export const categories = [
  {
    slug: "facial-aesthetics",
    name: "Facial Aesthetics",
    filter: "Facial Aesthetics",
    title: "Facial Aesthetics in Leeds",
    seoTitle: "Facial Aesthetics Leeds | NS Clinic",
    intro:
      "Lip shape, facial balance and considered definition. Explore filler, anti-wrinkle and thread-based treatments with a consultation that starts with your features.",
    image: "/images/treatments/dermal-fillers.webp",
    focus: "A little definition. A considered approach.",
    concerns: [
      "Lip shape & volume",
      "Facial balance",
      "Volume loss",
      "Lines & wrinkles",
      "Cheek, chin & jaw contours",
      "Selected under-eye concerns",
    ],
  },
  {
    slug: "skin-treatments",
    name: "Skin & Skin Boosters",
    filter: "Skin",
    title: "Skin Treatments & Skin Boosters in Leeds",
    seoTitle: "Skin Treatments & Skin Boosters Leeds | NS Clinic",
    intro:
      "From skin boosters and microneedling to clinical facials and peels, find options for hydration, texture and uneven tone, with a plan for your individual skin.",
    image: "/images/treatments/clinical-facials.webp",
    focus: "Get to know your skin. Then make a plan.",
    concerns: [
      "Dehydrated-looking skin",
      "Uneven texture",
      "Dullness & tone",
      "Fine lines",
      "Appearance of stretch marks",
      "Your ongoing skin routine",
    ],
  },
  {
    slug: "hifu-advanced-skin",
    name: "HIFU & Advanced Skin",
    filter: "HIFU & Tightening",
    title: "HIFU & Skin Tightening in Leeds",
    seoTitle: "HIFU & Skin Tightening Leeds | NS Clinic",
    intro:
      "Explore HIFU, radiofrequency and advanced skin treatments for concerns around firmness and texture. Choose a focused area or discuss a carefully staged combination.",
    image: "/images/treatments/hifu-face.webp",
    focus: "Firmness, texture and the bigger picture.",
    concerns: [
      "Face & jawline firmness",
      "Neck concerns",
      "Skin texture",
      "Arms, back & legs",
      "Abdomen",
      "Treatment combinations",
    ],
  },
  {
    slug: "body-contouring",
    name: "Body Contouring",
    filter: "Body",
    title: "Body Contouring & Fat Dissolving in Leeds",
    seoTitle: "Body Contouring & Fat Dissolving Leeds | NS Clinic",
    intro:
      "A personal conversation about localised body concerns, shape and proportion. Explore fat-dissolving, contouring and enhancement options after an individual assessment.",
    image: "/images/treatments/body-contouring.webp",
    focus: "Your shape. Your goals. A realistic plan.",
    concerns: [
      "Abdomen & love handles",
      "Arms & back",
      "Upper & lower body",
      "Thighs & legs",
      "Buttock shape",
      "Hip proportion",
    ],
  },
  {
    slug: "laser-treatments",
    name: "Laser Treatments",
    filter: "Laser",
    title: "Laser Treatments in Leeds",
    seoTitle: "Laser Treatments Leeds | NS Clinic",
    intro:
      "Dedicated options for unwanted hair, tattoo removal and selected skin concerns. The starting point is a skin assessment and an explanation of your treatment course.",
    image: "/images/treatments/laser-hair-removal.webp",
    focus: "Different concerns. Carefully selected treatments.",
    concerns: [
      "Unwanted facial hair",
      "Body hair reduction",
      "Tattoo fading & removal",
      "Selected skin concerns",
      "Treatment courses",
      "Aftercare & sun exposure",
    ],
  },
  {
    slug: "beauty",
    name: "Beauty, Lashes & Brows",
    filter: "Beauty",
    title: "Beauty, Lashes & Brows in Leeds",
    seoTitle: "Lashes, Brows & Beauty Leeds | NS Clinic",
    intro:
      "Soft definition or a fuller finish: find your preferred lash and brow style. Explore extensions, lifts, tinting and shaping, alongside hair and scalp enquiries.",
    image: "/images/treatments/classic-lashes.webp",
    focus: "The details that make your look feel yours.",
    concerns: [
      "Everyday lash definition",
      "Fuller volume",
      "Natural lash curl",
      "Brow shape & colour",
      "Lash maintenance",
      "Hair & scalp concerns",
    ],
  },
];
type Entry = [
  name: string,
  description: string,
  photo: number | string,
  alt: string,
  variants?: string[],
];
const catalogue: Record<string, Entry[]> = {
  "facial-aesthetics": [
    [
      "Lip Fillers",
      "A personalised approach to lip shape, definition and volume. Your existing proportions, previous filler and preferred finish guide the assessment, with product choice, possible swelling and aftercare explained before you decide.",
      34220532,
      "Close-up of a lip injection procedure — illustrative stock",
    ],
    [
      "Lip Enhancement",
      "Focus on the shape and balance of your lips rather than choosing an amount in advance. Discuss border definition, the relationship between your upper and lower lip, and the subtle changes you have in mind.",
      4618549,
      "Side profile and natural lip detail — illustrative stock",
    ],
    [
      "Russian Lip Fillers",
      "A lip-shaping style that emphasises definition and height. It is a technique to discuss, rather than a result to assume: your anatomy, existing filler and treatment history determine whether it is appropriate.",
      7581581,
      "Lip-area cosmetic injection — illustrative stock",
    ],
    [
      "Dermal Fillers",
      "Explore selected areas of facial volume loss and definition with an assessment of the whole face. The consultation covers the proposed product, treatment area, limitations and risks, so you can make an informed choice.",
      4586709,
      "Practitioner carrying out a facial filler procedure — illustrative stock",
    ],
    [
      "Cheek Fillers",
      "Discuss cheek volume and contour in relation to your facial structure. The aim of planning is to consider proportions across the face, rather than treating the cheeks as an isolated feature.",
      7581579,
      "Cheek-area assessment during an injectable treatment — illustrative stock",
    ],
    [
      "Chin Fillers",
      "An option to discuss for selected chin proportion and profile concerns. Your practitioner considers the chin alongside the lips and jawline, then explains what filler may and may not achieve for you.",
      7581587,
      "Facial profile during aesthetic treatment — illustrative stock",
    ],
    [
      "Jawline Fillers",
      "Consider lower-face definition with a plan based on your existing jaw and chin. Different causes of a less defined jawline need different approaches; a consultation helps establish whether filler is a suitable option.",
      7581588,
      "Lower-face preparation for cosmetic treatment — illustrative stock",
    ],
    [
      "Nasolabial Fold Fillers",
      "Discuss the folds running from the nose towards the mouth and the surrounding facial support. Assessment helps distinguish a suitable filler approach from concerns better addressed with another treatment or no treatment.",
      7581589,
      "Cosmetic injection close to the lower cheek — illustrative stock",
    ],
    [
      "Marionette Line Fillers",
      "Explore options for lines beneath the corners of the mouth. Your treatment discussion considers facial movement, skin quality and volume, with a realistic explanation of the change that may be possible.",
      38796266,
      "Consultation and lower-face injectable treatment — illustrative stock",
    ],
    [
      "Full Face Filler",
      "A wider assessment of facial proportion, rather than a separate plan for every feature. Discuss how cheeks, chin, jawline and other suitable areas work together, with the amount and approach agreed individually.",
      29648624,
      "Whole-face assessment for a cosmetic procedure — illustrative stock",
    ],
    [
      "Tear Trough Treatment",
      "Selected under-eye concerns need particularly careful assessment. Puffiness, pigmentation and hollowness are different concerns; ask whether your anatomy is suitable and understand the specific risks before considering an injectable treatment.",
      7581582,
      "Close-up of a practitioner assessing the upper face — illustrative stock",
    ],
    [
      "Non-Surgical Rhinoplasty / Nose Filler",
      "Filler may be considered for selected nose-profile concerns. It adds volume and cannot make a nose physically smaller. This is an area requiring a detailed discussion of suitability, limitations and potentially serious complications.",
      7581583,
      "Facial profile and nose-area assessment — illustrative stock",
    ],
    [
      "Facial Contouring",
      "Discuss definition and balance across your features. A plan may consider more than one area, but it should start with your priorities, explain the options and give you time to choose a measured approach.",
      4586707,
      "Individual facial assessment in a clinical setting — illustrative stock",
    ],
    [
      "Non-Surgical Facelift",
      "A consultation-led discussion of non-surgical options for selected age-related facial changes. Filler, skin-quality treatments and threads have different roles and limitations; non-surgical treatment does not reproduce the results of surgery.",
      7581572,
      "Facial treatment planning — illustrative stock",
    ],
    [
      "PDO Thread Lift",
      "Explore thread-based options for selected facial concerns. Your consultation should explain the exact technique, practitioner experience, recovery and risks. Suitability depends on your skin, anatomy and the change you are hoping to see.",
      4586714,
      "Preparation for a facial aesthetic procedure — illustrative stock",
    ],
    [
      "Jaw Thread Lift",
      "A focused thread-treatment enquiry for the lower face. Discuss skin laxity, the proposed thread type and technique, possible bruising and recovery, and whether another approach would better suit your goals.",
      4586710,
      "Lower-face clinical treatment preparation — illustrative stock",
    ],
    [
      "Anti-Wrinkle Treatments",
      "Start with a consultation about lines, movement and the finish you prefer. Where a prescription-only treatment is considered, an appropriate prescribing assessment is required. Discuss the proposed treatment, alternatives and individual suitability.",
      7581577,
      "Upper-face cosmetic injection procedure — illustrative stock",
    ],
    [
      "Gummy Smile Treatment",
      "Discuss how much gum shows when you smile and whether a suitable non-surgical approach is available. Facial movement and dental factors both matter; the consultation explains the limits and any prescribing requirements.",
      4586713,
      "Assessment of facial expression during aesthetic care — illustrative stock",
    ],
  ],
  "skin-treatments": [
    [
      "Skin Boosters",
      "Injectable skin-quality treatments to discuss for hydration and fine-texture concerns. They have a different purpose from contouring fillers. Ask which formulation is proposed, how a course is planned and what aftercare your skin needs.",
      7581580,
      "Small cosmetic injection into facial skin — illustrative stock",
    ],
    [
      "Jalupro",
      "A skin-booster option within a personalised skin discussion. The clinic can explain the specific Jalupro formulation, suitable areas and proposed course, with attention to your skin concerns and previous injectable treatments.",
      7581584,
      "Professional skin injectable treatment preparation — illustrative stock",
    ],
    [
      "Sunekos",
      "Discuss this skin-quality injectable and the areas you would like to address. Formulation, course length and suitability should be explained individually; it is useful to distinguish hydration concerns from those requiring structural volume.",
      4586711,
      "Facial skin injectable consultation — illustrative stock",
    ],
    [
      "Pink Glow / Skin Glowing Booster",
      "An option listed by NS Clinic for skin-quality enquiries. Ask about the formulation, delivery method and recommended schedule, so you understand the proposed treatment rather than choosing solely by its product name.",
      4586708,
      "Skin treatment preparation with a practitioner — illustrative stock",
    ],
    [
      "Mesotherapy",
      "A treatment category covering targeted skin approaches. Discuss the exact product, ingredients, treatment method and intended area, particularly if you have sensitive skin, allergies or have recently had another aesthetic procedure.",
      4586712,
      "Close-up clinical facial care — illustrative stock",
    ],
    [
      "Microneedling",
      "A pen-based skin treatment to discuss for texture and selected scar concerns. Treatment depth, your skin history and recovery needs influence the plan. Your practitioner explains preparation, possible redness and the aftercare required.",
      29648626,
      "Microneedling pen being used on facial skin — illustrative stock",
    ],
    [
      "Dermaplaning",
      "A surface-exfoliation treatment using a specialised blade to remove superficial dead skin and fine facial hair. Discuss active breakouts, sensitivity and recent treatments first, then follow the aftercare recommended for your skin.",
      5069423,
      "Professional facial skin preparation — illustrative stock",
    ],
    [
      "Chemical Peels",
      "Selected peels can be discussed for texture and uneven-looking tone. Peel type and strength matter; your skin history, sensitivity and recovery plans guide the choice. Ask about preparation, sun protection and the expected skin response.",
      5069429,
      "Practitioner applying a facial treatment with a brush — illustrative stock",
    ],
    [
      "Clinical Facials",
      "A facial planned around how your skin feels and what it needs now. Discuss hydration, congestion or dullness, along with your home routine, so the treatment complements the products and other procedures you already use.",
      5659018,
      "Facial mask applied by a practitioner — illustrative stock",
    ],
    [
      "Hydra Facial",
      "A facial option mentioned in the clinic’s public treatment listing. Discuss cleansing, exfoliation and hydration, and ask about the precise equipment and products used. The right approach depends on your current skin and sensitivities.",
      5069430,
      "Clinical facial using a handheld skin-treatment tool — illustrative stock",
    ],
    [
      "Microdermabrasion",
      "A surface-exfoliation option for selected skin types and texture concerns. Ask how it compares with a peel or dermaplaning, what to expect afterwards and how to space it around your other skin treatments.",
      5069426,
      "Handheld exfoliation apparatus used on facial skin — illustrative stock",
    ],
    [
      "Skin Lightening Treatments",
      "Discuss uneven tone and areas of pigmentation with a skin assessment. The focus is your individual concern, with a clear explanation of available options and limits, rather than promises to change your natural skin colour.",
      5069412,
      "Facial mask and skin-care detail — illustrative stock",
    ],
    [
      "Stretch Mark Reduction",
      "Explore options for the appearance and texture of stretch marks. Their age, colour, location and your skin type influence the discussion. A course may be considered, with realistic expectations and no promise of complete removal.",
      5069433,
      "Skin assessment during a facial treatment — illustrative stock",
    ],
    [
      "B12 Injections",
      "A separately assessed injectable enquiry. Discuss the reason for treatment, medical history and the professional assessment needed. A consultation is the place to establish appropriateness; no general health benefit is promised.",
      8923183,
      "Practitioner preparing an injection in a clinic — illustrative stock",
    ],
    [
      "Vitamin C Treatments",
      "Ask about the exact product and delivery method offered by the clinic. Topical skincare and injectable products are different treatments; the consultation should explain the intended purpose, assessment, risks and available alternatives.",
      7581586,
      "Clinical treatment products and equipment — illustrative stock",
    ],
    [
      "Glutathione",
      "An individually assessed enquiry about the clinic’s current formulation and treatment method. Discuss evidence, risks and suitability before proceeding. This service is not presented as a cure, detox treatment or guaranteed skin-colour change.",
      7581585,
      "Practitioner preparing clinical products — illustrative stock",
    ],
  ],
  "hifu-advanced-skin": [
    [
      "HIFU Face",
      "Focused ultrasound treatment options for selected facial-firmness concerns. A consultation helps define the treatment area and explains what is realistic for your skin, including how changes may develop and whether further treatment is appropriate.",
      5069432,
      "Ultrasonic facial handpiece in use — illustrative stock, equipment may differ",
      ["Half-Face HIFU", "Full-Face HIFU"],
    ],
    [
      "HIFU Face & Neck",
      "Discuss the face and neck together when firmness is your priority. Assessment considers your skin and anatomy across both areas; the proposed settings, experience and aftercare should be explained before treatment.",
      5069431,
      "Professional facial treatment with a handpiece — illustrative stock",
      ["Face & Neck HIFU"],
    ],
    [
      "HIFU Body",
      "A body-focused ultrasound enquiry for selected areas. The plan is based on the area, your skin and treatment goals. Discuss the likely course and maintenance, with a realistic explanation of what this approach can achieve.",
      6560297,
      "Body area under professional care — illustrative stock",
      [
        "HIFU Arms",
        "HIFU Back",
        "HIFU Legs",
        "HIFU Tummy",
        "Multiple Body Areas",
      ],
    ],
    [
      "RF Microneedling",
      "Combines a needling approach with radiofrequency energy. Discuss texture and firmness concerns, the device used, treatment intensity and recovery. Suitability and session spacing need an individual assessment, especially alongside other procedures.",
      30809949,
      "Pen-based advanced facial treatment — illustrative stock; device may differ",
    ],
    [
      "RF Skin Tightening",
      "A radiofrequency-based option to discuss for selected firmness concerns. Your practitioner explains the available equipment, suitable treatment areas and possible skin response, with a plan that fits your wider skin routine.",
      5069425,
      "Practitioner preparing an ultrasonic facial handpiece — illustrative stock; device may differ",
    ],
    [
      "Endolift",
      "An advanced-treatment enquiry requiring a detailed consultation. Ask about the precise technique, practitioner training, risks and recovery before deciding. The clinic can advise on current availability and whether another option suits your concern.",
      4586718,
      "Advanced facial care setting — illustrative stock; not a specific Endolift device",
    ],
  ],
  "body-contouring": [
    [
      "Fat Dissolving",
      "Discuss selected localised fat concerns and the exact injectable product proposed. Your goals, treatment area and medical history guide assessment. Ask about swelling, recovery, course planning and risks; treatment is not a weight-loss programme.",
      6560290,
      "Back and body-area illustration — stock photograph",
      [
        "Love Handles",
        "Upper Body",
        "Lower Body",
        "Back",
        "Legs",
        "Multiple Body Areas",
      ],
    ],
    [
      "Body Contouring",
      "Explore the available approaches to selected shape and contour concerns. Different methods address different priorities, so the consultation explains the equipment or product proposed and the limits of the treatment.",
      33327686,
      "A body-contouring handpiece applied to the body — illustrative stock",
    ],
    [
      "Non-Surgical BBL",
      "A conversation about buttock shape using a non-surgical approach. The term covers different methods; establish the exact method, product and practitioner experience, and discuss potentially serious risks before choosing treatment.",
      6560294,
      "Tasteful body-treatment setting — illustrative stock",
    ],
    [
      "Buttock Enhancement",
      "Discuss the change in shape or proportion you have in mind. Assessment should explain the exact enhancement method, product, alternatives and recovery, with realistic expectations about the extent of a non-surgical result.",
      6560296,
      "Body-area illustration for shape enquiries — stock photograph",
    ],
    [
      "Hip Dip Enhancement",
      "Explore proportion-related concerns around the hip area. Your natural anatomy and proposed technique influence suitability. Ask about the product, treatment risks and recovery before agreeing to an enhancement plan.",
      6560293,
      "Hip-area treatment illustration — stock photograph",
    ],
    [
      "Body Filler",
      "An individually assessed enquiry about volume and contour in selected body areas. Understand the product, proposed amount, practitioner experience and complication management before deciding; suitability cannot be established from photographs alone.",
      6560291,
      "Close-up of a body area under care — illustrative stock",
    ],
    [
      "Buttock Lift",
      "Discuss available non-surgical approaches and what they may achieve for your anatomy. A lifting concern and a volume concern are different; the consultation explains the proposed method, limitations and any prescribing requirements.",
      7772658,
      "Clinical body-treatment setting — illustrative stock",
    ],
  ],
  "laser-treatments": [
    [
      "Laser Hair Removal",
      "Explore longer-term hair reduction for selected facial and body areas. Skin tone, hair characteristics and treatment history help determine suitability. A course and possible maintenance are discussed, alongside preparation and sun-exposure advice.",
      16032305,
      "Laser handpiece treating a leg — illustrative stock",
    ],
    [
      "Laser Tattoo Removal",
      "A dedicated consultation for the tattoo you would like to fade or remove. Colour, size, ink and skin response affect the plan. Multiple sessions may be needed, and complete clearance cannot be guaranteed.",
      35103914,
      "Laser handpiece targeting a tattoo — illustrative stock",
    ],
    [
      "Laser Skin Treatments",
      "Discuss selected skin concerns and the exact laser procedure available. Your skin type, treatment history and recovery plans guide assessment. Ask about preparation, the device used, possible complications and follow-up.",
      36930874,
      "Laser equipment applied to skin — illustrative stock",
      ["Laser Skin Resurfacing"],
    ],
  ],
  beauty: [
    [
      "Classic Lashes",
      "Individual lash extensions for a softly defined look. Discuss the length, curl and finish you prefer, with a style chosen around your natural lashes and a clear explanation of maintenance and aftercare.",
      5128234,
      "Tweezers applying individual eyelash extensions — illustrative stock",
    ],
    [
      "Hybrid Lashes",
      "A mix of classic and volume techniques for a fuller but varied finish. Bring your preferences to the appointment and discuss how the style can work with the length and condition of your natural lashes.",
      5128235,
      "Individual lash extension application — illustrative stock",
    ],
    [
      "Russian Lashes",
      "A fuller extension style with a considered approach to length and curl. Discuss whether you prefer soft fullness or a more noticeable finish, with your natural lashes guiding the final styling choice.",
      36930354,
      "Professional lash application close-up — illustrative stock",
    ],
    [
      "Russian Volume",
      "Volume lashes for clients looking for greater fullness. Your appointment includes a style discussion and advice on keeping extensions comfortable and well maintained, with infills planned around your individual lash cycle.",
      33723106,
      "Close-up of a professional volume lash application — illustrative stock",
    ],
    [
      "Wispy Lashes",
      "Varied lengths create a textured lash finish. Discuss where you want definition and how noticeable you would like it to be, so the styling suits your preferences and the condition of your natural lashes.",
      38194465,
      "Lash extensions applied with precision tweezers — illustrative stock",
    ],
    [
      "Lash Infills",
      "Maintenance for suitable existing extensions. Let the clinic know when your last set was applied and whether it was done elsewhere; the remaining lashes and their condition help determine the right appointment.",
      5128230,
      "Professional lash maintenance appointment — illustrative stock",
    ],
    [
      "Lash Lift",
      "An option for emphasising the curl of your own lashes. Discuss your natural lash length and preferred finish, along with patch testing, preparation and how to care for your lashes after the appointment.",
      5128232,
      "Natural lash and brow assessment — illustrative stock",
    ],
    [
      "Lash Tint",
      "Colour definition for natural lashes, often considered alongside a lift. Discuss your preferred depth of colour and any sensitivities; the clinic advises on patch testing and suitable spacing around other eye treatments.",
      5128233,
      "Practitioner working around the natural lashes — illustrative stock",
    ],
    [
      "Brow Tint",
      "Add definition with a shade chosen around your natural brow colour and preferred finish. Discuss sensitivity and patch testing before the appointment, and how tinting can fit alongside shaping or lamination.",
      8558249,
      "Close-up brow treatment — illustrative stock",
    ],
    [
      "Henna Brows",
      "A brow-colour option to discuss for a more defined finish. Your natural shape, skin and desired depth of colour guide the appointment. Ask about ingredients, patch testing and the aftercare for your skin.",
      8558247,
      "Practitioner defining eyebrow shape — illustrative stock",
    ],
    [
      "Brow Lamination",
      "A styling treatment for your brow hairs, planned around the direction and finish you prefer. Discuss hair condition, recent brow treatments and sensitivity, with patch-test and aftercare guidance before proceeding.",
      8558248,
      "Eyebrow styling procedure — illustrative stock",
    ],
    [
      "Brow Shaping",
      "A considered shape built around your existing brows. Talk through what you would like to keep or adjust, including thickness and arch, before the practitioner advises on the shaping method and finish.",
      8558244,
      "Professional eyebrow-shaping detail — illustrative stock",
    ],
    [
      "Brow Definition",
      "Explore shape and colour together for brows that suit your preferences. The appointment starts with your natural brow pattern and the finish you would like, rather than a single style for every face.",
      8558250,
      "Close-up eyebrow definition treatment — illustrative stock",
    ],
    [
      "Teeth Whitening",
      "An enquiry about whitening options and the dental assessment required. Confirm who provides the treatment and their General Dental Council registration before booking. Product suitability and dental health must be assessed by an appropriate dental professional.",
      5622271,
      "Dental professional carrying out a teeth-whitening session — illustrative stock",
    ],
    [
      "Hair & Scalp Treatments",
      "Discuss hair and scalp concerns and the exact approach available. A thinning-hair concern may need a medical assessment to understand its cause; the clinic can explain the offered treatment and when further advice is appropriate.",
      28994390,
      "Serum applied to the scalp with a dropper — illustrative stock",
      ["Hair Restoration", "Hair Regrowth Treatments"],
    ],
    [
      "Vein Treatments",
      "Ask about the type of vein concern, treatment method and assessment available. Some concerns require specialist medical advice; discuss suitability and the correct next step before choosing any cosmetic procedure.",
      6560295,
      "Leg-area illustration — stock photograph",
    ],
  ],
};
export const treatments = categories.flatMap((c) =>
  catalogue[c.slug].map(([name, description, photo, alt, variants]) => ({
    id: slugify(name),
    name,
    shortName: name,
    category: c.slug,
    description,
    image: `/images/treatments/${slugify(name)}.webp`,
    imageAlt: alt,
    photo,
    price: null as number | null,
    pricePrefix: "From",
    featured: [
      "Lip Fillers",
      "Anti-Wrinkle Treatments",
      "Dermal Fillers",
      "Skin Boosters",
      "HIFU Face",
      "Microneedling",
      "Fat Dissolving",
      "Laser Hair Removal",
    ].includes(name),
    link:
      name === "Lip Fillers"
        ? "/lip-fillers-leeds"
        : `/${c.slug}#${slugify(name)}`,
    whatsappMessage: `Hi NS Clinic, I'm interested in ${name} and would like some more information.`,
    status: "consultation",
    relatedTreatments: catalogue[c.slug]
      .filter((e) => e[0] !== name)
      .slice(0, 3)
      .map((e) => slugify(e[0])),
    variants: variants || [],
  })),
);
export type Treatment = (typeof treatments)[number];
export const reviews = [
  {
    name: "Linda",
    quote: "Very professional and knows her stuff",
    treatment: "Russian Volume Lashes",
    platform: "Treatwell",
    source: business.treatwellURL,
  },
  {
    name: "Lauren",
    quote: "I was put at ease and I am very happy with the results.",
    treatment: null,
    platform: "Treatwell",
    source: business.treatwellURL,
  },
  {
    name: "Helen",
    summary:
      "Helen praises Rosa’s professional approach, natural-looking filler result and helpful aftercare advice.",
    treatment: "Dermal Fillers",
    platform: "Treatwell",
    source: business.treatwellURL,
  },
];
export const portfolio = [
  {
    id: "15898782",
    category: "Lips",
    title: "Lip enhancement",
    alt: "Lip enhancement comparison published in the NS Clinic Treatwell portfolio",
  },
  {
    id: "15898844",
    category: "Lips",
    title: "Lip shape & definition",
    alt: "Lip treatment comparison from the NS Clinic public portfolio",
  },
  {
    id: "15898819",
    category: "Fillers",
    title: "Facial profile",
    alt: "Side-profile treatment comparison published by NS Clinic on Treatwell",
  },
  {
    id: "15898963",
    category: "Fillers",
    title: "Thread treatment",
    alt: "PDO thread-treatment comparison in the NS Clinic Treatwell portfolio",
  },
  {
    id: "15899004",
    category: "Skin",
    title: "Skin portfolio",
    alt: "Skin-treatment comparison published in the NS Clinic portfolio",
  },
  {
    id: "15898828",
    category: "Beauty",
    title: "Lash detail",
    alt: "Close-up of eyelash work in the NS Clinic Treatwell portfolio",
  },
  {
    id: "15898830",
    category: "Beauty",
    title: "Volume & definition",
    alt: "Volume lash photograph published by NS Clinic on Treatwell",
  },
];
export const guideLinks = [
  ["Lips & Facial Definition", "/facial-aesthetics"],
  ["Lines & Wrinkles", "/facial-aesthetics#anti-wrinkle-treatments"],
  ["Skin Hydration", "/skin-treatments#skin-boosters"],
  ["Texture & Tone", "/skin-treatments#microneedling"],
  ["Skin Tightening", "/hifu-advanced-skin"],
  ["Body Contouring", "/body-contouring"],
  ["Unwanted Hair", "/laser-treatments#laser-hair-removal"],
  ["Tattoo Removal", "/laser-treatments#laser-tattoo-removal"],
  ["Hair & Scalp", "/beauty#hair-scalp-treatments"],
  ["Lashes & Brows", "/beauty"],
];
export const areas = [
  "Pudsey",
  "Farsley",
  "Bramley",
  "Rodley",
  "Armley",
  "Horsforth",
  "Leeds",
  "Bradford",
  "Surrounding West Yorkshire",
];
export const pages: Record<
  string,
  { title: string; description: string; seoTitle: string }
> = {
  treatments: {
    title: "Treatments at NS Clinic",
    description:
      "A considered collection of facial aesthetics, advanced skin, body, laser and beauty treatments. Find a starting point for your goals.",
    seoTitle: "Aesthetic & Skin Treatments Leeds | NS Clinic",
  },
  results: {
    title: "The NS Clinic Treatment Gallery",
    description:
      "A closer look at work published in our clinic portfolio, from lip enhancement and facial aesthetics to skin and lashes.",
    seoTitle: "Treatment Gallery & Results Leeds | NS Clinic",
  },
  about: {
    title: "A personal approach to aesthetics.",
    description:
      "Meet NS Clinic: a broad range of aesthetic, skin, body, laser and beauty treatments, with Rosa in Stanningley, Leeds.",
    seoTitle: "About NS Clinic | Aesthetics Clinic Leeds",
  },
  reviews: {
    title: "What Clients Say About NS Clinic",
    description:
      "Read genuine client feedback and explore the NS Clinic reviews on Google and Treatwell.",
    seoTitle: "NS Clinic Reviews | Aesthetics Clinic Leeds",
  },
  prices: {
    title: "Prices & treatment options",
    description:
      "Plan your appointment with a clear understanding of your treatment, course and quote. Check current prices and offers directly with NS Clinic.",
    seoTitle: "Treatment Prices & Offers Leeds | NS Clinic",
  },
  areas: {
    title: "Your local clinic. A wider welcome.",
    description:
      "Based in Stanningley, NS Clinic welcomes clients from Pudsey, Leeds, Bradford and across West Yorkshire.",
    seoTitle: "Aesthetics Clinic Stanningley & Pudsey | NS Clinic",
  },
  contact: {
    title: "Let’s talk about you.",
    description:
      "Book with NS Clinic, ask a treatment question or plan your visit to Swinnow Crescent, Stanningley, Leeds.",
    seoTitle: "Contact NS Clinic | Stanningley, Leeds",
  },
  "lip-fillers-leeds": {
    title: "Lip Fillers in Leeds",
    description:
      "Shape, definition, volume and balance. A personalised lip-enhancement consultation with NS Clinic in Stanningley.",
    seoTitle: "Lip Fillers Leeds | NS Clinic",
  },
  privacy: {
    title: "Your privacy",
    description:
      "How information is handled when you use this website and contact NS Clinic.",
    seoTitle: "Privacy | NS Clinic",
  },
  cookies: {
    title: "Cookies & third-party services",
    description:
      "Information about browser storage, maps and external booking services.",
    seoTitle: "Cookies | NS Clinic",
  },
  terms: {
    title: "Website & appointment terms",
    description: "Using this website and arranging a treatment with NS Clinic.",
    seoTitle: "Terms | NS Clinic",
  },
  "treatment-disclaimer": {
    title: "Treatment information",
    description:
      "Consultation, individual suitability and realistic treatment expectations.",
    seoTitle: "Treatment Information | NS Clinic",
  },
};
