/**
 * Commodity content — one entry per commodity page.
 * Each entry becomes a page at /commodities/<slug>/ with its own
 * SEO title, meta description and long-form copy.
 */
export interface Commodity {
  slug: string;
  name: string;
  kannada: string;
  emoji: string;
  card: string; // short blurb on cards
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string[];
  varieties: string[];
  forBuyers: string[];
  forSellers: string[];
  closing: string;
}

export const commodities: Commodity[] = [
  {
    slug: 'rice',
    name: 'Rice',
    kannada: 'ಅಕ್ಕಿ',
    emoji: '🍚',
    card: 'Sona Masoori, steam and raw rice from Karnataka mills, matched with wholesale buyers across South India.',
    seoTitle: 'Rice Broker in Challakere, Karnataka | Subbaraju Brokerage',
    seoDescription:
      'Trusted rice broker in Challakere connecting rice mills with wholesale buyers and distributors. Sona Masoori, steam rice, raw rice. Post your requirement today.',
    h1: 'Rice Broker in Challakere, Karnataka',
    intro: [
      'Subbaraju Brokerage connects rice mills and processors with wholesale rice buyers, distributors and retailers across Karnataka and neighbouring states. Working from Challakere in Chitradurga district, we sit at the crossroads of Karnataka’s rice trade — with milling belts in Davanagere, Raichur and Gangavathi to the north and large consumption markets in Bengaluru, Tumakuru and beyond to the south.',
      'Whether you need a steady monthly supply of Sona Masoori for your retail chain or you are a miller looking for reliable buyers who lift material on time and pay on schedule, we match both sides, negotiate a fair market rate and stay involved until the lorry is unloaded and the payment is settled.',
    ],
    varieties: [
      'Sona Masoori (steam and raw)',
      'RNR and BPT varieties',
      'Boiled rice for institutional buyers',
      'Broken rice for flour mills and feed units',
    ],
    forBuyers: [
      'Direct access to rice mills — no long chain of middlemen inflating the price',
      'Quality checked before dispatch: moisture, broken percentage and polish as agreed',
      'Flexible quantities from a few quintals to full lorry loads',
    ],
    forSellers: [
      'Verified wholesale buyers, distributors and retail chains',
      'Price discovery based on live market rates in Karnataka mandis',
      'We follow up on payments so you can focus on milling',
    ],
    closing:
      'Post your rice requirement below or message us on WhatsApp — tell us the variety, quantity and location, and we will come back with a workable rate the same day.',
  },
  {
    slug: 'groundnut',
    name: 'Groundnut',
    kannada: 'ಶೇಂಗಾ / ಕಡಲೆಕಾಯಿ',
    emoji: '🥜',
    card: 'Challakere is Karnataka’s groundnut heartland — we broker pods, kernels and oil-mill quality lots.',
    seoTitle: 'Groundnut Broker in Challakere | Peanut Buyers & Sellers Karnataka',
    seoDescription:
      'Groundnut broker in Challakere, the groundnut hub of Karnataka. We connect farmers, traders and oil mills with kernel and pod buyers. Post your requirement.',
    h1: 'Groundnut Broker in Challakere — the Groundnut Hub of Karnataka',
    intro: [
      'Challakere is one of Karnataka’s most important groundnut markets — the town’s economy has run on the groundnut trade for generations, and the Challakere APMC yard handles significant volumes every season. Subbaraju Brokerage works at the centre of this trade, brokering groundnut pods, kernels and oil-quality lots between growers, traders, decorticating units and oil mills.',
      'Because we are physically present in the market, we know the day’s rates, which lots are moving, and which buyers are actively lifting material. That local knowledge is what gets sellers a better price and gets buyers genuine quality at a fair rate.',
    ],
    varieties: [
      'Groundnut pods (unshelled) for traders and decorticators',
      'Groundnut kernels — bold and java types',
      'Oil-mill quality lots for expeller and cold-press units',
      'Seed-quality groundnut in season',
    ],
    forBuyers: [
      'Lots inspected in person at the Challakere market before you commit',
      'Direct sourcing from the growing belt — Challakere, Sira, Hiriyur, Pavagada',
      'Kernel counts, moisture and oil content communicated honestly up front',
    ],
    forSellers: [
      'Access to oil mills, exporters’ agents and out-of-state kernel buyers',
      'Same-day rate quotes based on the Challakere APMC market',
      'Assistance with weighment, bagging standards and dispatch',
    ],
    closing:
      'If you trade groundnut in any form — pods, kernels or oil-quality — post your requirement below and we will respond with current Challakere market rates.',
  },
  {
    slug: 'maize',
    name: 'Maize',
    kannada: 'ಮೆಕ್ಕೆಜೋಳ',
    emoji: '🌽',
    card: 'Feed-grade and starch-grade maize from Karnataka’s growing belt for poultry, feed and starch units.',
    seoTitle: 'Maize Buyers & Sellers in Karnataka | Maize Broker Challakere',
    seoDescription:
      'Maize broker in Challakere connecting maize farmers and traders with poultry feed mills, starch units and bulk buyers across South India. Get today’s rate.',
    h1: 'Maize Broker in Challakere — Buyers & Sellers Across Karnataka',
    intro: [
      'Karnataka is one of India’s largest maize-producing states, and the districts around Challakere — Chitradurga, Davanagere and Ballari — grow substantial volumes in both kharif and rabi seasons. Subbaraju Brokerage brokers maize between farmers, aggregators and traders on one side and poultry feed mills, cattle feed plants, starch units and bulk consumers on the other.',
      'Maize is a fast-moving, price-sensitive commodity. Rates can shift within a day based on poultry demand and arrivals. We track the market daily so both sides transact at a genuine, current price — not last week’s number.',
    ],
    varieties: [
      'Feed-grade maize for poultry and cattle feed mills',
      'Starch-grade maize with controlled moisture',
      'Bilty/direct-lift lots from village aggregation points',
    ],
    forBuyers: [
      'Consistent supply lines through the season from the Chitradurga–Davanagere belt',
      'Moisture and damage percentage agreed before dispatch',
      'Full lorry loads (25–30 MT) arranged with reliable transport',
    ],
    forSellers: [
      'Direct connection to feed mills and starch units — better than gate prices',
      'Quick lifting so you avoid storage losses and weight shrinkage',
      'Transparent weighment and prompt payment follow-up',
    ],
    closing:
      'Tell us your maize quantity, moisture level and location — post your requirement below and we will quote a realistic rate the same day.',
  },
  {
    slug: 'toor-dal',
    name: 'Toor Dal',
    kannada: 'ತೊಗರಿ ಬೇಳೆ',
    emoji: '🫘',
    card: 'Toor (pigeon pea) and toor dal from Karnataka’s pulse belt, brokered between dal mills and wholesalers.',
    seoTitle: 'Toor Dal Broker in Karnataka | Toor Buyers & Sellers Challakere',
    seoDescription:
      'Toor dal broker in Challakere, Karnataka. We connect toor growers and dal mills with wholesale dal buyers and distributors. Post your toor requirement today.',
    h1: 'Toor Dal Broker in Challakere, Karnataka',
    intro: [
      'North Karnataka — Kalaburagi in particular — is famous across India for its toor, and strong volumes also move through central Karnataka’s markets. Subbaraju Brokerage brokers both raw toor (pigeon pea) for dal mills and finished toor dal for wholesalers, distributors and retail chains.',
      'Pulses are a trust business: polish, grain size and mixing decide the real value of a lot. We describe every lot exactly as it is, so buyers know what is arriving and sellers get paid for the quality they actually deliver.',
    ],
    varieties: [
      'Raw toor (whole pigeon pea) for dal mills',
      'Toor dal — fatka and regular polish',
      'Desi and Maruti-type toor from Karnataka mandis',
    ],
    forBuyers: [
      'Sourcing from dal mills and mandis across Karnataka’s pulse belt',
      'Sample-first trading — approve the sample, then the lot moves',
      'Consistent grading between repeat orders',
    ],
    forSellers: [
      'Wholesale and semi-wholesale buyers across South India',
      'Honest price discovery pegged to major pulse markets',
      'Dispatch and payment coordination handled end to end',
    ],
    closing:
      'Whether you mill toor or stock it wholesale, post your requirement below with quantity and quality details — we will match you with the other side quickly.',
  },
  {
    slug: 'gram',
    name: 'Gram (Chana)',
    kannada: 'ಕಡಲೆ',
    emoji: '🌾',
    card: 'Bengal gram (chana) and chana dal moved between growers, mills and wholesale buyers.',
    seoTitle: 'Gram (Chana) Broker in Karnataka | Bengal Gram Buyers & Sellers',
    seoDescription:
      'Bengal gram (chana) broker in Challakere, Karnataka. Connecting chana growers and traders with dal mills, roasters and wholesale buyers. Post your requirement.',
    h1: 'Gram (Bengal Gram / Chana) Broker in Challakere',
    intro: [
      'Bengal gram is a core rabi crop across the central Karnataka plains, and Chitradurga district’s black-soil pockets produce dependable chana volumes every year. Subbaraju Brokerage brokers whole chana, chana dal and roasting-quality gram between farmers, traders, dal mills and roasted-gram units.',
      'Gram moves in several distinct quality lanes — milling, roasting and besan — and each lane pays differently. We help sellers place their lot in the lane where it earns the most, and help buyers get exactly the grade their process needs.',
    ],
    varieties: [
      'Whole chana (desi Bengal gram) for milling',
      'Chana dal for wholesale and distribution',
      'Roasting-quality gram for fried gram (hurigadale) units',
      'Besan-quality gram for flour mills',
    ],
    forBuyers: [
      'Grade-specific sourcing: milling, roasting or besan quality as required',
      'Sample approval before dispatch on every new lot',
      'Steady seasonal supply lines from the Chitradurga belt',
    ],
    forSellers: [
      'Multiple buyer categories mean better price competition for your lot',
      'Rates benchmarked to major chana markets, quoted the same day',
      'We coordinate lifting quickly after the deal is fixed',
    ],
    closing:
      'Post your chana requirement below — mention whether it is whole gram or dal, the grade and quantity, and we will revert with a workable rate.',
  },
  {
    slug: 'fried-gram',
    name: 'Fried Gram',
    kannada: 'ಹುರಿಗಡಲೆ',
    emoji: '🥣',
    card: 'Hurigadale (roasted gram) — a Karnataka staple — brokered from roasting units to wholesalers and namkeen makers.',
    seoTitle: 'Fried Gram (Hurigadale) Broker Challakere | Roasted Gram Suppliers',
    seoDescription:
      'Fried gram (hurigadale / roasted gram) broker in Challakere, Karnataka. We connect roasting units with wholesale buyers, namkeen and chutney-powder makers.',
    h1: 'Fried Gram (Hurigadale) Broker in Challakere',
    intro: [
      'Fried gram — hurigadale in Kannada, also called roasted gram or putani — is an everyday staple in South Indian kitchens, ground into chutneys, mixed into namkeen and sold loose in every kirana store. Karnataka has a strong network of traditional roasting units, and Subbaraju Brokerage brokers their output to wholesalers, distributors, namkeen manufacturers and chutney-powder makers.',
      'Fried gram quality is judged on split ratio, crispness, uniform roasting and freedom from husk dust. We inspect lots before recommending them, so buyers receive material that sells and sellers build repeat business.',
    ],
    varieties: [
      'Split fried gram (standard grade for chutney and grinding)',
      'Whole roasted gram with skin (for namkeen mixes)',
      'Premium double-roasted grades',
    ],
    forBuyers: [
      'Direct supply from established roasting units — fresher stock, better crispness',
      'Consistent grading across repeat orders for your brand or shop',
      'Small semi-wholesale lots to full loads, as your business needs',
    ],
    forSellers: [
      'Access to out-of-state buyers beyond your local circle',
      'Fair rates that account for your roasting yield and quality',
      'Steady order flow through the year, not just in season',
    ],
    closing:
      'If you buy or produce hurigadale, post your requirement below with grade and monthly quantity — we will connect you to the right counterparty.',
  },
  {
    slug: 'husk',
    name: 'Husk',
    kannada: 'ಹೊಟ್ಟು',
    emoji: '🌿',
    card: 'Pulse husk and chuni from dal mills — nutritious cattle-feed ingredients supplied in bulk.',
    seoTitle: 'Pulse Husk (Chuni) for Cattle Feed | Feed Husk Broker Challakere',
    seoDescription:
      'Feed husk broker in Challakere, Karnataka — pulse husk and chuni from dal mills for cattle feed manufacturers, dairies and feed mixers. Bulk supply. Post your requirement.',
    h1: 'Feed Husk Broker in Challakere — Pulse Husk & Chuni in Bulk',
    intro: [
      'Husk is no longer a throwaway by-product. Pulse husk and chuni — the by-products of dal milling — are valuable, nutritious cattle-feed ingredients in steady demand from dairies, feed manufacturers and feed mixers. Subbaraju Brokerage brokers feed husk in bulk between dal mills on the supply side and feed merchants, dairies and cattle-feed plants on the demand side.',
      'The husk trade runs on logistics — the material is light, bulky and margin-sensitive, so the right lorry at the right rate decides whether a deal works. With our transport contacts around Challakere and the mill belts, we quote landed rates you can actually plan around.',
    ],
    varieties: [
      'Toor husk and chuni for cattle feed mixing',
      'Gram (chana) husk from dal and roasting units',
      'Groundnut shell in season for feed filler and mulch',
    ],
    forBuyers: [
      'Regular weekly or monthly supply schedules from working dal mills',
      'Landed-cost quotes including transport to your unit',
      'Dry, well-stored material — not rain-damaged stock',
    ],
    forSellers: [
      'Turn your mill by-product into a steady revenue line',
      'Bulk buyers who lift on schedule and clear your storage space',
      'Transport arranged so you are not chasing lorries',
    ],
    closing:
      'Post your husk requirement below — tell us the type, monthly volume and delivery point, and we will send a landed rate.',
  },
  {
    slug: 'ragi',
    name: 'Ragi',
    kannada: 'ರಾಗಿ',
    emoji: '🌾',
    card: 'Finger millet from central Karnataka’s ragi belt for flour mills, health-food brands and wholesalers.',
    seoTitle: 'Ragi (Finger Millet) Broker Karnataka | Ragi Buyers & Sellers',
    seoDescription:
      'Ragi broker in Challakere, Karnataka — the heart of the state’s finger millet belt. We connect ragi farmers and traders with flour mills and bulk buyers.',
    h1: 'Ragi (Finger Millet) Broker in Challakere, Karnataka',
    intro: [
      'Central Karnataka — Chitradurga, Tumakuru and the surrounding dryland districts — is the heart of India’s ragi cultivation. Ragi mudde is the region’s staple food, and demand from flour mills, health-food brands and millet-based snack makers has grown steadily as millets gain national attention. Subbaraju Brokerage brokers ragi between farmers, village aggregators and traders on one side and mills and institutional buyers on the other.',
      'Good ragi is judged by grain colour, boldness, cleanliness and moisture. We check lots before recommending them and quote rates in line with the day’s market across Karnataka’s ragi mandis.',
    ],
    varieties: [
      'Bold, deep-brown ragi for flour milling',
      'Cleaned and graded lots for packaged millet brands',
      'Seed-quality ragi in season',
    ],
    forBuyers: [
      'Sourcing from the core ragi belt around Challakere and Chitradurga',
      'Cleaned, uniform lots suitable for branded flour and health mixes',
      'Season-long supply planning so your mill never runs dry',
    ],
    forSellers: [
      'Growing demand from millet brands means better rates for quality lots',
      'Honest weighment and grading at the market yard',
      'Quick deals during arrival season when prices move fast',
    ],
    closing:
      'Post your ragi requirement below with quantity and grade — we will match you with buyers or sellers from our network the same day.',
  },
  {
    slug: 'gram-dal',
    name: 'Gram Dal',
    kannada: 'ಕಡಲೆ ಬೇಳೆ',
    emoji: '🍛',
    card: 'Chana dal from Karnataka dal mills, brokered to wholesalers, distributors and food processors.',
    seoTitle: 'Gram Dal (Chana Dal) Broker Karnataka | Wholesale Buyers & Sellers',
    seoDescription:
      'Gram dal (chana dal) broker in Challakere, Karnataka. We connect dal mills with wholesale chana dal buyers and distributors across Karnataka, Andhra Pradesh and Tamil Nadu.',
    h1: 'Gram Dal (Chana Dal) Broker in Challakere, Karnataka',
    intro: [
      'Gram dal — split and polished Bengal gram — is a daily-consumption staple across South India, moving in steady volumes from dal mills to wholesale mandis, distributors and food processors. Subbaraju Brokerage brokers chana dal between milling units in Karnataka’s pulse belt and buyers across Karnataka, Andhra Pradesh and Tamil Nadu.',
      'Dal quality is judged on polish, uniformity of split, grain size and freedom from broken and foreign matter — and different markets pay for different specs. We know which mills produce which grade and which buyers pay best for each, so both sides get a deal that fits.',
    ],
    varieties: [
      'Standard chana dal for wholesale distribution',
      'Fine-polish premium dal for branded packing',
      'Mill-run grades for food processing and repacking',
    ],
    forBuyers: [
      'Direct supply from working dal mills — consistent grade, fresher stock',
      'Sample-first trading on every new mill connection',
      'Regular monthly supply lines for distributors and packers',
    ],
    forSellers: [
      'Wholesale buyers across Karnataka, Andhra Pradesh and Tamil Nadu',
      'Grade-appropriate placement so premium dal earns its premium',
      'Payment follow-up handled as part of the deal',
    ],
    closing:
      'Post your chana dal requirement below with grade and monthly quantity — we will match you with mills or buyers the same day.',
  },
  {
    slug: 'peas',
    name: 'Peas',
    kannada: 'ಬಟಾಣಿ',
    emoji: '🫛',
    card: 'Dried white and green peas (batani) for flour mills, snack makers and wholesale traders.',
    seoTitle: 'Dried Peas (Batani) Broker Karnataka | White & Green Peas Wholesale',
    seoDescription:
      'Dried peas (batani) broker in Challakere, Karnataka — white peas and green peas for wholesalers, snack manufacturers and flour mills across South India.',
    h1: 'Dried Peas (Batani) Broker in Challakere, Karnataka',
    intro: [
      'Dried peas — batani in Kannada — move in serious volumes across South India: white peas into chaat and street-food supply chains, green peas into namkeen mixtures and snack manufacturing, and both into flour milling. Subbaraju Brokerage brokers dried peas between importers, traders and processors on one side and wholesalers, snack makers and mills on the other.',
      'Peas are a price-driven trade where quality slips easily — weevil damage, shrivelled grain and mixing decide whether a lot is worth the quote. We describe lots as they are and quote rates pegged to the major pulse markets, so both sides can commit with confidence.',
    ],
    varieties: [
      'White peas (safed vatana / bili batani) for chaat and flour',
      'Green peas (hara vatana / hasiru batani) for namkeen and mixtures',
      'Split peas for processing and repacking',
    ],
    forBuyers: [
      'Sourcing from established pulse traders — clean, machine-graded lots',
      'Sample approval before dispatch on every new lot',
      'Quantities from semi-wholesale to full lorry loads',
    ],
    forSellers: [
      'Snack manufacturers, flour mills and wholesale buyers in three states',
      'Honest lot description so your quality earns repeat orders',
      'Quick lifting and payment follow-up',
    ],
    closing:
      'Post your peas requirement below — white or green, quantity and grade — and we will respond with a current market rate.',
  },
  {
    slug: 'gram-flour',
    name: 'Gram Flour',
    kannada: 'ಕಡಲೆ ಹಿಟ್ಟು',
    emoji: '🫓',
    card: 'Besan (gram flour) from flour mills to sweet makers, namkeen units and wholesale distributors.',
    seoTitle: 'Gram Flour (Besan) Broker Karnataka | Wholesale Besan Suppliers',
    seoDescription:
      'Gram flour (besan) broker in Challakere, Karnataka. We connect besan mills with sweet manufacturers, namkeen units and wholesale distributors across South India.',
    h1: 'Gram Flour (Besan) Broker in Challakere, Karnataka',
    intro: [
      'Besan — gram flour, kadle hittu in Kannada — feeds an enormous everyday market: sweet shops, namkeen and bakery units, hotels and household kitchens. Subbaraju Brokerage brokers besan between flour mills and this demand — wholesale distributors, sweet manufacturers, snack units and institutional kitchens across Karnataka, Andhra Pradesh and Tamil Nadu.',
      'Besan quality shows up instantly in the final product — colour, fineness, purity and freshness decide whether a sweet maker comes back. We work with mills whose grinding and raw material we know, and we place each grade with buyers whose use matches it.',
    ],
    varieties: [
      'Fine besan for sweets and bakery use',
      'Standard besan for wholesale and retail packing',
      'Coarse (laddu/mote) besan for namkeen and boondi units',
    ],
    forBuyers: [
      'Fresh stock direct from grinding mills — not aged godown material',
      'Consistent fineness and colour between repeat orders',
      'Supply scheduled around your production calendar and festival peaks',
    ],
    forSellers: [
      'Steady offtake from sweet and namkeen manufacturers year-round',
      'Better realisation than dumping into a single local market',
      'We handle buyer-side negotiation and payment follow-up',
    ],
    closing:
      'Post your besan requirement below with grade and monthly volume — we will connect you with the right mill or buyer quickly.',
  },
  {
    slug: 'cashew-cake',
    name: 'Cashew Cake',
    kannada: 'ಗೇರು ಹಿಂಡಿ',
    emoji: '🔥',
    card: 'Cashew shell cake — a high-calorific boiler fuel — brokered in bulk from processing units to industries.',
    seoTitle: 'Cashew Shell Cake for Burning | Boiler Fuel Supplier Karnataka',
    seoDescription:
      'Cashew cake (de-oiled cashew shell cake) broker in Challakere, Karnataka — high-calorific-value boiler and furnace fuel supplied in bulk to industries across South India.',
    h1: 'Cashew Cake (Shell Cake) for Burning — Bulk Boiler Fuel',
    intro: [
      'Cashew shell cake — the residue left after cashew nut shell liquid (CNSL) is extracted — is one of the best biomass fuels available: high calorific value, low moisture and steady burning make it a favourite for industrial boilers, furnaces, brick kilns and drying units. Subbaraju Brokerage brokers cashew cake in bulk between cashew processing and CNSL units on the supply side and fuel-consuming industries on the demand side.',
      'Like all fuel trades, cashew cake runs on landed cost per unit of heat. Oil content, moisture and transport distance decide the real economics — we quote landed rates to your unit so you can compare it honestly against firewood, briquettes or coal.',
    ],
    varieties: [
      'De-oiled cashew shell cake for boilers and furnaces',
      'Cashew shell (whole) for kilns and open burning',
      'Regular weekly or monthly bulk supply contracts',
    ],
    forBuyers: [
      'Consistent supply lines from cashew processing clusters',
      'Landed-cost quotes to your factory gate, transport included',
      'Dry, well-stored material with dependable calorific value',
    ],
    forSellers: [
      'Industrial buyers who lift in bulk on fixed schedules',
      'Turn processing residue into a reliable revenue stream',
      'Transport arranged from your unit',
    ],
    closing:
      'Post your cashew cake requirement below — monthly volume and delivery location — and we will send a landed rate for your unit.',
  },
];

export function getCommodity(slug: string): Commodity | undefined {
  return commodities.find((c) => c.slug === slug);
}
