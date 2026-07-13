// OKS product-page links on oks-germany.com, scraped from
// https://www.oks-germany.com/en/products/ (2026-07-13). Products sold by
// Oilkey but no longer listed on the OKS site simply have no entry here
// and render as plain text.
const BASE = 'https://www.oks-germany.com';

export const oksProductUrls: Record<string, string> = {
  '100': `${BASE}/en/products/oks-100-mos-powder-high-degree-of-purity/`,
  '110': `${BASE}/en/products/oks-110-mos-powder-microsize/`,
  '200': `${BASE}/en/products/oks-200-mos-assembly-paste/`,
  '220': `${BASE}/en/products/oks-220-mos-rapid-paste/`,
  '221': `${BASE}/en/products/oks-221-mos-rapid-paste-spray/`,
  '230': `${BASE}/en/products/oks-230-mos-high-temperature-paste/`,
  '235': `${BASE}/en/products/oks-235-aluminium-paste-anti-seize-paste/`,
  '240': `${BASE}/en/products/oks-240-copper-paste/`,
  '241': `${BASE}/en/products/oks-241-copper-paste-spray/`,
  '245': `${BASE}/en/products/oks-245-copper-paste-with-high-corrosion-protection/`,
  '250': `${BASE}/en/products/oks-250-white-allround-paste-metal-free/`,
  '252': `${BASE}/en/products/oks-252-white-high-temperature-paste-for-food-processing-technology/`,
  '260': `${BASE}/en/products/oks-260-white-assembly-paste/`,
  '265': `${BASE}/en/products/oks-265-chuck-jaw-paste/`,
  '270': `${BASE}/en/products/oks-270-white-grease-paste/`,
  '280': `${BASE}/en/products/oks-280-white-high-temperature-paste/`,
  '300': `${BASE}/en/products/oks-300-mos-mineral-oil-concentrate/`,
  '310': `${BASE}/en/products/oks-310-mos-high-temperature-lubricant/`,
  '350': `${BASE}/en/products/oks-350-mos-high-temperature-chain-oil-synthetic/`,
  '352': `${BASE}/en/products/oks-352-high-temperature-chain-oil-synthetic/`,
  '371': `${BASE}/en/products/oks-371-multipurpose-oil-for-food-processing-technology-spray/`,
  '390': `${BASE}/en/products/oks-390-cutting-fluid-for-all-metals/`,
  '391': `${BASE}/en/products/oks-391-cutting-fluid-for-all-metals-spray/`,
  '400': `${BASE}/en/products/oks-400-mos-multipurpose-high-performance-grease/`,
  '402': `${BASE}/en/products/oks-402-ball-bearing-high-performance-grease/`,
  '403': `${BASE}/en/products/oks-403-marine-grease/`,
  '404': `${BASE}/en/products/oks-404-high-performance-and-high-temperature-grease/`,
  '410': `${BASE}/en/products/oks-410-mos-high-pressure-long-life-grease/`,
  '416': `${BASE}/en/products/oks-416-low-temperature-and-high-speed-grease/`,
  '418': `${BASE}/en/products/oks-418-mos-high-temperature-grease/`,
  '420': `${BASE}/en/products/oks-420-high-temperature-multipurpose-grease-1/`,
  '422': `${BASE}/en/products/oks-422-universal-grease-for-long-life-lubrication/`,
  '424': `${BASE}/en/products/oks-424-high-temperature-grease-synthetic/`,
  '428': `${BASE}/en/products/oks-428-fluid-grease-for-gears-synthetic/`,
  '432': `${BASE}/en/products/oks-432-high-melting-point-grease-1/`,
  '450': `${BASE}/en/products/oks-450-chain-and-adhesive-lubricant/`,
  '451': `${BASE}/en/products/oks-451-chain-and-adhesive-lubricant-spray/`,
  '469': `${BASE}/en/products/oks-469-plastic-and-elastomer-grease/`,
  '470': `${BASE}/en/products/oks-470-white-universal-high-performance-grease/`,
  '471': `${BASE}/en/products/oks-471-white-universal-high-performance-grease-spray/`,
  '475': `${BASE}/en/products/oks-475-high-performance-grease/`,
  '476': `${BASE}/en/products/oks-476-multipurpose-grease-for-food-processing-technology/`,
  '477': `${BASE}/en/products/oks-477-valve-grease/`,
  '479': `${BASE}/en/products/oks-479-high-temperature-grease-for-food-processing-technology/`,
  '490': `${BASE}/en/products/oks-490-toothed-gearing-grease-sprayable/`,
  '491': `${BASE}/en/products/oks-491-open-gear-spray-dry/`,
  '495': `${BASE}/en/products/oks-495-adhesive-lubricant/`,
  '536': `${BASE}/en/products/oks-536-high-temperature-dry-lubricant-for-chains-graphite-based-concentrate/`,
  '600': `${BASE}/en/products/oks-600-multi-oil/`,
  '601': `${BASE}/en/products/oks-601-multi-oil-spray/`,
  '611': `${BASE}/en/products/oks-611-mos-rust-remover-spray/`,
  '670': `${BASE}/en/products/oks-670-high-performance-lube-oil-with-white-solid-lubricants/`,
  '671': `${BASE}/en/products/oks-671-high-performance-lube-oil-with-white-solid-lubricants-spray/`,
  '700': `${BASE}/en/products/oks-700-fine-care-oil-synthetic/`,
  '701': `${BASE}/en/products/oks-701-fine-care-oil-synthetic-spray/`,
  '1103': `${BASE}/en/products/oks-1103-heat-sink-paste-electr-insulating/`,
  '1110': `${BASE}/en/products/oks-1110-multi-silicone-grease/`,
  '1133': `${BASE}/en/products/oks-1133-low-temperature-silicone-grease/`,
  '1140': `${BASE}/en/products/oks-1140-extreme-temperature-silicone-grease/`,
  '1144': `${BASE}/en/products/oks-1144-universal-silicone-grease/`,
  '1155': `${BASE}/en/products/oks-1155-adherent-silicone-grease/`,
  '1301': `${BASE}/en/products/oks-1301-sliding-film-for-plastics-and-metals-wax-based-spray/`,
  '1360': `${BASE}/en/products/oks-1360-silicone-release-agent/`,
  '1361': `${BASE}/en/products/oks-1361-silicone-release-agent-spray/`,
  '1511': `${BASE}/en/products/oks-1511-release-agent-silicone-free-spray/`,
  '1600': `${BASE}/en/products/oks-1600-weld-parting-agent-water-based-concentrate/`,
  '1601': `${BASE}/en/products/oks-1601-weld-parting-agent-water-based-spray/`,
  '2100': `${BASE}/en/products/oks-2100-protective-film-for-metals/`,
  '2101': `${BASE}/en/products/oks-2101-protective-film-for-metals-spray/`,
  '2301': `${BASE}/en/products/oks-2301-mould-protector-spray/`,
  '2501': `${BASE}/en/products/oks-2501-white-allround-paste-metal-free-spray/`,
  '2610': `${BASE}/en/products/oks-2610-universal-cleaner/`,
  '2611': `${BASE}/en/products/oks-2611-universal-cleaner-spray/`,
  '2621': `${BASE}/en/products/oks-2621-contact-cleaner-spray/`,
  '2731': `${BASE}/en/products/oks-2731-compressed-air-spray/`,
  '2800': `${BASE}/en/products/oks-2800-leak-detector/`,
  '2801': `${BASE}/en/products/oks-2801-leak-detector-spray/`,
  '2901': `${BASE}/en/products/oks-2901-belt-tuning-spray/`,
  '3521': `${BASE}/en/products/oks-3521-high-temperature-chain-oil-synthetic-spray/`,
  '3720': `${BASE}/en/products/oks-3720-gear-oil-iso-vg-220/`,
  '3730': `${BASE}/en/products/oks-3730-gear-oil-iso-vg-460/`,
  '3751': `${BASE}/en/products/oks-3751-adhesive-lubricant-with-ptfe-spray/`,
  '3760': `${BASE}/en/products/oks-3760-multipurpose-oil-iso-vg-100/`,
  '3770': `${BASE}/en/products/oks-3770-hydraulic-oil-iso-vg-46/`,
  '3790': `${BASE}/en/products/oks-3790-sugar-dissolving-oil-synthetic/`,
  '4100': `${BASE}/en/products/oks-4100-mos-extreme-pressure-grease/`,
  '4200': `${BASE}/en/products/oks-4200-mos-high-temperature-bearing-grease-synthetic/`,
  '4220': `${BASE}/en/products/oks-4220-extreme-temperature-bearing-grease/`,
};

// The ja catalogue sometimes stacks the designation across lines
// ("OKS\n220\n…"), so the matcher tolerates any whitespace after "OKS".

/** URL of the OKS product page for a cell starting with e.g. "OKS 400". */
export function oksUrl(cell: string): string | undefined {
  const m = cell.match(/^OKS\s*(\d+)/);
  return m ? oksProductUrls[m[1]] : undefined;
}

/** The leading "OKS <number>" designation of a cell, or undefined. */
export function oksDesignation(cell: string): string | undefined {
  return cell.match(/^OKS\s*\d+/)?.[0];
}
